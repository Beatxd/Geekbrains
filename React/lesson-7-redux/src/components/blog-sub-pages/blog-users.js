import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../../actions/users-actions';

//components
import User from './blog-user-card'

// mixin for this.props.dispatch and store.
@connect((store) => {
  return {
    users: store.users.users,
    isFetching: store.users.isFetching
  }

})

export default class Jumbotron extends React.Component {
  constructor() {
    super(...arguments);
    this.props.dispatch(fetchUsers());
  }

  render() {
    const loader = (
      <div className="loader">
        <div className="loader_inner"> </div>
      </div>
    )

    let users = this.props.users.map((user, index) => {
      return <User key={index} {...user} users={this.props.users}/>
    });

    return (
      <div>
        <h2 className='badge-light'>Your followers</h2>
        <div className='row users-container'>
          {this.props.isFetching ? loader : (this.props.users.length ? users : 'Нет пользователей')}
        </div>
      </div>
    );
  }
}