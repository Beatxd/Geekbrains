import dispatcher from '../dispatcher';
import {BLOCK_FOLLOWER, FETCH_FOLLOWERS_START} from '../const/followers-constants';

export function blockFollower(id) {
  dispatcher.dispatch({
    type: BLOCK_FOLLOWER,
    payload: id
  });
}

export function fetchFollowers() {
  dispatcher.dispatch({
    type: FETCH_FOLLOWERS_START
  });
}