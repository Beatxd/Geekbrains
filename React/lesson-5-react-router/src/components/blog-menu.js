import React from 'react';

import MenuItem from './blog-menu-item';

export default class Menu extends React.Component{
  isActive(href) {
    return this.props.path === href;
  }
  render(){
    return(
      <ul className="nav nav-tabs">
        <span className="badge badge-secondary">{this.props.menuName}</span>
        <MenuItem href="/" active={this.isActive('/')}>Your posts</MenuItem>
        <MenuItem href="/followers" active={this.isActive('/followers')}>Followers</MenuItem>
      </ul>
    )
  }
}