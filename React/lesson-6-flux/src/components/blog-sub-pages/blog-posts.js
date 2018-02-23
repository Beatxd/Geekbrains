import React from 'react';

//components
import PostsList from './blog-posts-list';
import PostsStore from '../../stores/posts-store';
import {addPost, fetchPosts} from '../../actions/posts-actions';

export default class Posts extends React.Component {
  constructor(){
    super(...arguments);

    this.state = {
      posts: []
    }

    this.newPost = this.newPost.bind(this);
    this.onPostChange = this.onPostChange.bind(this);
  }

  newPost() {
    let body = 'Новый пост';
    let userId = 1;
    let title = 'Пост';

    addPost({title, userId, body})
  }

  onPostChange(posts){
    this.setState({
      posts: posts
    })
  }

  componentWillMount(){
    PostsStore.on('change', this.onPostChange)
  }

  componentDidMount(){
    fetchPosts();
  }

  componentWillUnmount(){
    PostsStore.removeListener('change', this.onPostChange());
  }

  render() {
    return (
      <div>
        <h2 className='badge-light'>Your posts</h2>
        <button type='button' className='btn btn-info btn-block' onClick={this.newPost}>Add post</button>
        <PostsList posts={this.state.posts}/>

      </div>
    )
  }

}