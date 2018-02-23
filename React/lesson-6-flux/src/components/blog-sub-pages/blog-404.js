import React from 'react';
import {Link} from 'react-router';

export default class PageNotFound extends React.Component {
  render() {

    return (
      <div className='row'>
        <h1 className='center-children more-space-m'>Oops! 404 Not Found</h1>
        <h4 className='center-children'>Sorry, an error has occured, Requested page not found!</h4>
        <div className='center more-space-p'>
          <Link to="/" className="btn btn-info btn-lg more-space-m">Take Me Home</Link>
          <a href="#" className="btn btn-outline-secondary btn-lg more-space-m">Contact Support</a>
        </div>
      </div>
    )
  }
}