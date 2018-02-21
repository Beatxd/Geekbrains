import React from 'react';

//data
import data from '../data/data';

export default class User extends React.Component {
  render() {

    let posts = data.userPosts.map((post, index) => {
      if (post.userId === this.props.id) {
        return (
          <div key={'post-' + index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{'post id: ' + post.id}</p>
            <hr/>
          </div>
        )
      }
    });

    if (!data.userPosts.length){
      posts = (
        <p>No Posts yet</p>
      );
    }

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
          <button type="button" className="btn btn-outline-info" data-toggle="modal"
                  data-target={"#userModal" + this.props.id}>
            Follower posts
          </button>
        </div>
        <div className="modal fade" id={"userModal" + this.props.id} tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{this.props.username + ' posts'}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {posts}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}