import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import axios from 'axios';

import {
  BLOCK_FOLLOWER,
  FETCH_FOLLOWERS_START,
  FETCH_FOLLOWERS_END
} from '../const/followers-constants';

class FollowersStore extends EventEmitter {
  constructor() {
    super(...arguments);
    this.followers = [];

    this.fetchFollowersStart = this.fetchFollowersStart.bind(this);
    this.fetchFollowersEnd = this.fetchFollowersEnd.bind(this);
    this.change = this.change.bind(this);
    this.blockFollower = this.blockFollower.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  fetchFollowersStart() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        let {data} = res;
        dispatcher.dispatch({
          type: FETCH_FOLLOWERS_END,
          payload: data
        });
      });
  }

  change(){
    this.emit('change', this.followers)
  }

  fetchFollowersEnd(followers) {
    this.followers = followers;
    this.change();
  }

  blockFollower(id){
    this.followers.forEach((follower, index, arr) => {
      if (id === follower.id){
        arr.splice(index, 1);
      }
  });
    this.change();
  }

  handleActions(action){
    switch (action.type){
      case BLOCK_FOLLOWER:{
        this.blockFollower(action.payload);
        break;
      }
      case FETCH_FOLLOWERS_START:{
        this.fetchFollowersStart();
        break;
      }
      case FETCH_FOLLOWERS_END:{
        this.fetchFollowersEnd(action.payload);
        break;
      }
    }
  }
}

const followersStore = new FollowersStore();
dispatcher.register(followersStore.handleActions);

export default followersStore;