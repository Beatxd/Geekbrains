import React from 'react';

// components for blog layout
import BlogHeader from '../components/blog-header';
import Jumbotron from '../components/blog-jumbotron';
import RowMarketing from '../components/blog-marketing';
import Modal from '../components/login-modal';
import Menu from '../components/blog-menu';

//data
import data from '../data/data';

export default class Blog extends React.Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <div className="container">
        <Modal/>
        <BlogHeader/>
        <Jumbotron styles={data.jumbotronSwitcher}/>
        <Menu menuName="Sub Menu" path={window.location.pathname}/>
        <RowMarketing/>
      </div>
    )
  }
  componentDidMount(){
    // alert('Компонент отрендерен!');
  }
}