import dispatcher from '../dispatcher';
import {ADD_POST,DEL_POST, FETCH_POSTS_START, EDIT_POST} from '../const/posts-constants';

export function addPost({title, userId, body}) {
  const post = {title, userId, body};

  dispatcher.dispatch({
    type: ADD_POST,
    payload: post
  });
}

export function editPost({id, title, body}) {
  const post = {id, title, body};
  dispatcher.dispatch({
    type: EDIT_POST,
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