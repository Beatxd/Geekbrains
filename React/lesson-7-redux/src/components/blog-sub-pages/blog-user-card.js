import React from 'react';

//components
import Posts from './blog-user-posts';

//data
import data from '../../data/data';

export default class User extends React.Component {
  render() {
    return (
      <div className="panel panel-default col-md-6 col-sm-12">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.props.username}
          </h3>
        </div>
        <div className="panel-body">
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.website}</p>
          <Posts data={data.userPosts} userName={this.props.username} userId={this.props.id}/>
        </div>
      </div>
    );
  }
}
