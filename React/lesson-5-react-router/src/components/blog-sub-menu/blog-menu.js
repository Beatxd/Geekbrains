import React from 'react';

import MenuItem from './blog-menu-item';

export default class Menu extends React.Component{
  isActive(href) {
    return this.props.path === href;
  }
  render(){
    return(
      <ul className="nav nav-tabs">
        <MenuItem href="/" active={this.isActive('/')}>Posts</MenuItem>
        <MenuItem href="/followers" active={this.isActive('/followers')}>Followers</MenuItem>
        <MenuItem href="/notFound" active={this.isActive('/notFound')}>page 404</MenuItem>
      </ul>
    )
  }
}