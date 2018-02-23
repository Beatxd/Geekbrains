import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import axios from 'axios';

import {
  ADD_POST,
  FETCH_POSTS_START,
  FETCH_POSTS_END
} from '../const/posts-constants';

class PostsStore extends EventEmitter {
  constructor() {
    super(...arguments);
    this.posts = [];

    this.fetchPostsStart = this.fetchPostsStart.bind(this);
    this.fetchPostsEnd = this.fetchPostsEnd.bind(this);
    this.change = this.change.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  fetchPostsStart() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        let {data} = res;
        dispatcher.dispatch({
          type: FETCH_POSTS_END,
          payload: data
        });
      });
  }

  change(){
    this.emit('change', this.posts)
  }

  fetchPostsEnd(posts) {
    this.posts = posts;
    this.change();
  }

  addPost(post){
    this.posts.push(post);
    this.change();
  }

  handleActions(action){
    switch (action.type){
      case ADD_POST:{
        this.addPost(action.payload);
        break;
      }
      case FETCH_POSTS_START:{
        this.fetchPostsStart();
        break;
      }
      case FETCH_POSTS_END:{
        this.fetchPostsEnd();
        break;
      }
    }
  }
}