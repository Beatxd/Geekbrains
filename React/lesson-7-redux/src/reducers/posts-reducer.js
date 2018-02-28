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
    case Posts.DEL_POST: {
      let posts = state.posts.concat();
      posts.forEach((post, i, arr) => {
        if (action.payload === post.id) arr.splice(i, 1);
      });
      state = {...state, posts: posts};
      break;
    }
    case Posts.ADD_POST: {
      let posts = state.posts.concat(action.payload);
      state = {...state, posts: posts};
      break;
    }
    case Posts.EDIT_POST: {
      let posts = state.posts.concat();
      posts.forEach((post, i, arr) => {
        if (+action.payload.id === post.id) {
          arr.splice(i, 1, action.payload)
        }
      });
      state = {...state, posts: posts};
      break;
    }
  }

  return state;
}