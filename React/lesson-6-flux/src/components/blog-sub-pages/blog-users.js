import React from 'react';

//components
import User from './blog-user-card'

//data
import data from '../../data/data';

export default class Jumbotron extends React.Component {
  constructor() {
    super(...arguments);
  }

  render(){
    if (!data.users.length){
      return null;
    }

    let users = data.users.map((user, index) => {
      return <User key={index} {...user}/>
    });

    return (
      <div>
        <h2 className='badge-light'>Your followers</h2>
        <div className='row users-container'>
        {users}
        </div>
      </div>
    );
  }
}