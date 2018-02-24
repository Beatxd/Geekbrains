import React from 'react';

import {delPost} from '../../actions/posts-actions';

export default class Post extends React.Component {
  render() {
    return (
      <div className='card'>
        <h5 className="card-header">{this.props.title}</h5>
        <div className="card-body">
          <p className="card-text">
            {this.props.body}
          </p>
        </div>
        <button type="button" className="btn btn-outline-danger btn-sm" id={this.props.id}>Del</button>
      </div>
    )
  }
}