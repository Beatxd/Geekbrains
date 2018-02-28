import axios from 'axios';

export function fetchPosts() {
  return {
    type: 'FETCH_POSTS',
    payload: axios.get('http://jsonplaceholder.typicode.com/posts?userId=1')
  }
}

export function delPost(id) {
  return {
    type: 'DEL_POST',
    payload: id
  }
}

export function addPost(obj) {
  return {
    type: 'ADD_POST',
    payload: obj
  }
}

export function editPost(obj) {
  return {
    type: 'EDIT_POST',
    payload: obj
  }
}