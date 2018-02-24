import dispatcher from '../dispatcher';
import {ADD_POST,DEL_POST, FETCH_POSTS_START} from '../const/posts-constants';

export function addPost({title, userId, body}) {
  const post = {title, userId, body};

  dispatcher.dispatch({
    type: ADD_POST,
    payload: post
  });
}

export function delPost(id) {
  dispatcher.dispatch({
    type: DEL_POST,
    payload: id
  });
}

export function fetchPosts() {
  dispatcher.dispatch({
    type: FETCH_POSTS_START
  });
}