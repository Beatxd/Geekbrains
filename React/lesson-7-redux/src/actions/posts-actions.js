import axios from 'axios';

export function fetchPosts() {
  return {
    type: 'FETCH_POSTS',
    payload: axios.get('http://jsonplaceholder.typicode.com/posts?userId=1')
  }
}

export function delPost() {
  return {
    type: 'DEL_POST',
    payload: [{title: 'any pos', body: 'body'}]
  }
}