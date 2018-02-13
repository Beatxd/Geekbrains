import React from 'react';

// components for blog layout
import BlogHeader from '../components/blog-header';
import Jumbotron from '../components/blog-jumbotron';
import RowMarketing from '../components/blog-row-marketing';

export default class Blog extends React.Component {
  render() {
    return (
      <div className="container">
        <BlogHeader/>
        <Jumbotron/>
        <RowMarketing/>
      </div>
    )
  }
}