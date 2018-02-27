import axios from 'axios';

export function fetchPosts() {
  return {
    type: 'FETCH_POSTS',
    payload: axios.get('http://jsonplaceholder.typicode.com/posts?userId=1')
  }
}