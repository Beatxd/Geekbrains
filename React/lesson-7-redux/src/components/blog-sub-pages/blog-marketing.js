import React from 'react';

import {connect} from 'react-redux';
import {fetchPosts, delPost, addPost, editPost} from '../../actions/posts-actions';

// mixin for this.props.dispatch and store.
@connect((store) => {

  return {
    users: store.users.users,
    isFetching: store.users.isFetching,
    posts: store.posts.posts,
    isFetchingPosts: store.posts.isFetching,
  }

})

export default class RowMarketing extends React.Component {
  constructor() {
    super(...arguments);
    this.props.dispatch(fetchPosts());
  }

  render() {
    const loader = (
      <div className="loader">
        <div className="loader_inner"></div>
      </div>
    );

    let posts = this.props.posts.map((post, index) => {
      return (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{'post id: ' + post.id}</p>
          <button onClick={() => {
            this.props.dispatch(delPost(post.id))
          }}>del
          </button>
          <button className="" data-toggle="modal" data-target="#editPostModal" onClick={ () => {
            document.querySelector('#edit-post-theme').value = post.title;
            document.querySelector('#edit-post-text').value = post.body;
            document.querySelector('#edit-post-id').innerText = post.id;
          }}>edit
          </button>
        </div>)
    });

    return (
      <div>
        <h2 className='badge-light'>Your posts</h2>
        <h4>New post</h4>
        <div>
          <input type="text" placeholder="theme" id="new-post-theme"/>
          <input type="text" placeholder="text" id="new-post-text"/>
          <input type="button" value="Send" onClick={() => {
            const post = {
              title: document.querySelector('#new-post-theme').value || 'empty theme',
              body: document.querySelector('#new-post-text').value || 'empty body',
              id: +this.props.posts[this.props.posts.length - 1].id + 1
            };
            this.props.dispatch(addPost(post))
          }}/>
        </div>
        <div className="row marketing">
          {this.props.isFetching ? loader : (this.props.posts.length ? posts : 'Нет пользователей')}
        </div>

        <div className="modal fade" id="editPostModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit post № <span id="edit-post-id"> </span></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>theme<br/>
                  <input type="text" id="edit-post-theme"/>
                </p>
                <p>text<br/>
                  <input type="text" id="edit-post-text"/>
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                  const post = {
                    title: document.querySelector('#edit-post-theme').value || 'empty theme',
                    body: document.querySelector('#edit-post-text').value || 'empty body',
                    id: document.querySelector('#edit-post-id').innerText
                  };
                  this.props.dispatch(editPost(post))
                }}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}