import * as Users from '../constants/users';

export function usersReducer(state = {users: [], isFetching: false}, action) {
  switch (action.type) {
    case Users.FETCH_USERS_PENDING: {
      state = {...state, isFetching: true};
      break;
    }
    case Users.FETCH_USERS_FULFILLED: {
      state = {...state, isFetching: false, users: action.payload.data};
      break;
    }
    case Users.FETCH_USERS_REJECTED: {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }
  }

  return state;
}