import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import axios from 'axios';

import {
  ADD_POST,
  DEL_POST,
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
    this.delPost = this.delPost.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  fetchPostsStart() {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
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
    post.id = +this.posts[this.posts.length - 1].id + 1;
    this.posts.unshift(post);
    this.change();
  }

  delPost(id){
    this.posts.forEach((post, index, arr) => {
      if (id === post.id){
        arr.splice(index, 1);
      }
    });
    this.change();
  }

  handleActions(action){
    switch (action.type){
      case ADD_POST:{
        this.addPost(action.payload);
        break;
      }
      case DEL_POST:{
        this.delPost(action.payload);
        break;
      }
      case FETCH_POSTS_START:{
        this.fetchPostsStart();
        break;
      }
      case FETCH_POSTS_END:{
        this.fetchPostsEnd(action.payload);
        break;
      }
    }
  }
}

const postsStore = new PostsStore();
dispatcher.register(postsStore.handleActions);

export default postsStore;