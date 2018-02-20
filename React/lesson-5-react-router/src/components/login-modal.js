import React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="myModal" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Login</label>
                  <input type="login" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Login"/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}