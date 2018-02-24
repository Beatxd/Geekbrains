import React from 'react';

//components
import User from './blog-user-card';
import FollowersStore from '../../stores/followers-store';
import {fetchFollowers} from '../../actions/followers-actions';
import PostsStore from '../../stores/posts-store';
import {fetchPosts} from '../../actions/posts-actions';

export default class Jumbotron extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      users: [],
      posts: []
    };

    this.onFollowerChange = this.onFollowerChange.bind(this);
    this.onPostChange = this.onPostChange.bind(this);
  }


  onFollowerChange(users) {
    this.setState({
      users: users,
    })
  }
  onPostChange(posts) {
    this.setState({
      posts: posts,
    })
  }

  componentWillMount() {
    FollowersStore.on('change', this.onFollowerChange);
    PostsStore.on('change', this.onPostChange);
  }

  componentDidMount() {
    fetchFollowers();
    fetchPosts();
  }

  componentWillUnmount() {
    FollowersStore.removeListener('change', this.onFollowerChange);
    PostsStore.removeListener('change', this.onPostChange);
  }

  render(){
    if (!this.state.users.length){
      return null;
    }

    let users = this.state.users.map((user, index) => {
      return <User key={index} {...user} posts={this.state.posts}/>
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