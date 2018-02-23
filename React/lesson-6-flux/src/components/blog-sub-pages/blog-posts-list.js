import React from 'react';

import Post from './blog-post';

export default class PostsList extends React.Component {
  render() {
    if(!this.props.posts.length) return null;

    let posts = this.props.posts.map((post, index) => {
      if (post.userId === 1) {
        return <Post key={index} {...post}/>
      }
    });

    return (
      <div className="panel panel-default">
        {posts}
      </div>
    )
  }
}