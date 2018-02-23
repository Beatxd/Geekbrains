import React from 'react';

import {Link} from 'react-router';

export default class MenuItem extends React.Component{
  render(){
    return(
      <li className='nav-item'>
        <Link to={this.props.href} className={'nav-link ' + (this.props.active ? 'active' : '')}>
          {this.props.children}
        </Link>
      </li>
    )
  }
}