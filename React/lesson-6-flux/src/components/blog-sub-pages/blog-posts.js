import React from 'react';

//components
import PostsList from './blog-posts-list';
import PostsStore from '../../stores/posts-store';
import {addPost, fetchPosts, delPost} from '../../actions/posts-actions';

export default class Posts extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      posts: [],
    };

    this.newPost = this.newPost.bind(this);
    this.onPostChange = this.onPostChange.bind(this);
  }

  newPost() {
    let body = document.querySelector('#post-text').value || 'empty theme';
    let userId = 1;
    let title = document.querySelector('#post-theme').value || 'empty body';

    document.querySelector('#post-theme').value = '';
    document.querySelector('#post-text').value = '';

    addPost({title, userId, body})
  }

  onPostChange(posts) {
    this.setState({
      posts: posts,
    })
  }

  componentWillMount() {
    PostsStore.on('change', this.onPostChange);
  }

  componentDidMount() {
    fetchPosts();
  }

  componentWillUnmount() {
      PostsStore.removeListener('change', this.onPostChange);
  }

  render() {
    return (
      <div className='content'>
        <h2 className='badge-light'>Your posts</h2>
        <div className='border-dark'>
          <div className="form-group">
            <label htmlFor="post-theme">Theme of the post</label>
            <input type="text" className="form-control" id="post-theme" placeholder="Theme"/>
          </div>
          <div className="form-group">
            <label htmlFor="post-text">Text</label>
            <input type="text" className="form-control" id="post-text" placeholder="Text"/>
          </div>
          <button type='button' className='btn btn-info btn-block' onClick={this.newPost}>Add post</button>
        </div>
        <PostsList posts={this.state.posts}/>
      </div>
    )
  }

}