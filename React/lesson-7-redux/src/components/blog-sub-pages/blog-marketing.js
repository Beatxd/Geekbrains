import React from 'react';

import {connect} from 'react-redux';
import {fetchPosts, delPost} from '../../actions/posts-actions';

// mixin for this.props.dispatch and store.
@connect((store) => {

  return {
    users: store.users.users,
    isFetching: store.users.isFetching,
    posts: store.posts.posts,
    isFetchingPosts: store.posts.isFetching,
  }

})

export default class RowMarketing extends React.Component {
  constructor() {
    super(...arguments);
    this.props.dispatch(fetchPosts());
  }
  render() {
    const loader = (
      <div className="loader">
        <div className="loader_inner"> </div>
      </div>
    );
    
    let posts = this.props.posts.map((post, index) => {
      return (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => {this.props.dispatch(delPost(post.id))}}>del</button>
        </div>)
    });

    return (
      <div>
        <h2 className='badge-light'>Your posts</h2>
        <div className="row marketing">
          {this.props.isFetching ? loader : (this.props.posts.length ? posts : 'Нет пользователей')}
        </div>
      </div>
    )
  }
}