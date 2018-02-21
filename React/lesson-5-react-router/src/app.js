import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'bootstrap';

// blog layout
import Blog from './layouts/blog-container';
// components
import Marketing from './components/blog-marketing';
import PageNotFound from './components/blog-404'
import Followers from './components/blog-followers'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Blog}>
      <IndexRoute component={Marketing}/>
      <Route path="followers" component={Followers}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
  , document.querySelector('main')
);