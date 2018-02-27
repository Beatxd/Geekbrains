import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap';


// blog layout
import Blog from './layouts/blog-container';
// components

import Marketing from './components/blog-sub-pages/blog-marketing';
import PageNotFound from './components/blog-sub-pages/blog-404'
import Followers from './components/blog-sub-pages/blog-users'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Blog}>
        <IndexRoute component={Marketing}/>
        <Route path="followers" component={Followers}/>
        <Route path="*" component={PageNotFound}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('main')
);