import React from 'react';
import {delPost, editPost} from '../../actions/posts-actions';

export default class Post extends React.Component {
  constructor(){
    super(...arguments);

    this.editCurrentPost = this.editCurrentPost.bind(this);
  }

  editCurrentPost(){
    let title = document.querySelector(".edit-post-theme-" + this.props.id).value || 'empty theme';
    let id = this.props.id;
    let body = document.querySelector(".edit-post-text-" + this.props.id).value || 'empty body';

    document.querySelector(".edit-post-theme-" + this.props.id).value = '';
    document.querySelector(".edit-post-text-" + this.props.id).value = '';

    editPost({title, id, body})
  }

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
            delPost(this.props.id)
          }}>Del
          </button>
          <button type="button" className="btn btn-outline-secondary btn-sm"
                  data-target={"#edit-post-modal-" + this.props.id} data-toggle="modal">
            Edit
          </button>
        </div>
        <div className="modal fade" id={"edit-post-modal-" + this.props.id} tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Edit post № {this.props.id}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <input type="text" className={"edit-post-theme-" + this.props.id} placeholder="Theme"/>
                </div>
                <div>
                  <input type="text" className={"edit-post-text-" + this.props.id} placeholder="Text"/>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                  this.editCurrentPost();
                }}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}