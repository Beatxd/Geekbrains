import React from 'react';

export default class Posts extends React.Component {
  render() {
    if (!this.props.data.length) return <p>Sorry! No Posts yet</p>;

    let posts = this.props.data.map((post, index) => {
      if (post.userId === this.props.userId) {
        return (
          <div key={'post-' + index} className="post-hr">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{'post id: ' + post.id}</p>
          </div>
        )
      }
    });

    return (
      <div>
        <button type="button" className="btn btn-outline-info" data-toggle="modal"
                data-target={"#userModal" + this.props.userId}>
          Follower posts
        </button>
        <div className="modal fade" id={"userModal" + this.props.userId} tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{this.props.userName + '`s posts'}</h5>
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
