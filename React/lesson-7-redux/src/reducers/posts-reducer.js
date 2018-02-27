import * as Posts from '../constants/posts';

export function postsReducer(state = {posts: [], isFetching: false}, action) {
  switch (action.type) {
    case Posts.FETCH_POSTS_PENDING: {
      state = {...state, isFetching: true};
      break;
    }
    case Posts.FETCH_POSTS_FULFILLED: {
      state = {...state, isFetching: false, posts: action.payload.data};
      break;
    }
    case Posts.FETCH_POSTS_REJECTED: {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }
  }

  return state;
}