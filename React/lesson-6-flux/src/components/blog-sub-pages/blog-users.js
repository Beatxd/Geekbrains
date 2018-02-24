import React from 'react';

//components
import User from './blog-user-card';
import FollowersStore from '../../stores/followers-store';
import {fetchFollowers} from '../../actions/followers-actions';

//data
// import data from '../../data/data';

export default class Jumbotron extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      users: [],
    };

    this.onFollowerChange = this.onFollowerChange.bind(this);
  }


  onFollowerChange(users) {
    this.setState({
      users: users,
    })
  }

  componentWillMount() {
    FollowersStore.on('change', this.onFollowerChange);
  }

  componentDidMount() {
    fetchFollowers();
  }

  componentWillUnmount() {
    FollowersStore.removeListener('change', this.onFollowerChange);
  }

  render(){
    if (!this.state.users.length){
      return null;
    }

    let users = this.state.users.map((user, index) => {
      return <User key={index} {...user}/>
    });

    return (
      <div>
        <h2 className='badge-light'>Your followers</h2>
        <div className='row users-container'>
        {users}
        </div>
      </div>
    );
  }
}