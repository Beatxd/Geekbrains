import React from 'react';

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
      </div>
    )
  }
}