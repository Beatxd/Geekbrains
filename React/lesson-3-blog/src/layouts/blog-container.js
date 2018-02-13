import React from 'react';

// components for blog layout
import BlogHeader from '../components/blog-header';
import Jumbotron from '../components/blog-jumbotron';
import RowMarketing from './blog-marketing';
import Modal from '../components/login-modal';

export default class Blog extends React.Component {
  render() {
    return (
      <div className="container">
        <Modal/>
        <BlogHeader/>
        <Jumbotron/>
        <RowMarketing/>
      </div>
    )
  }
}