import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
      <div className='panel-default panel'>
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">
          {this.props.body}
        </div>
      </div>
    )
  }
}