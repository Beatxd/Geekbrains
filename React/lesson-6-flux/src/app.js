import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'bootstrap';

// blog layout
import Blog from './layouts/blog-container';
// components
import Posts from './components/blog-sub-pages/blog-posts';
import PageNotFound from './components/blog-sub-pages/blog-404'
import Followers from './components/blog-sub-pages/blog-users'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Blog}>
      <IndexRoute component={Posts}/>
      <Route path="followers" component={Followers}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
  , document.querySelector('main')
);