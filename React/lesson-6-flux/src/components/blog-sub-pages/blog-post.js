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
        <div>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => {
          delPost(this.props.id)}}>Del</button>
        <button type="button" className="btn btn-outline-secondary btn-sm">Edit</button>
        </div>
      </div>
    )
  }
}