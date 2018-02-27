import React from 'react';

//components
import Row from './blog-marketing-row';

//data
import data from '../../data/data';

export default class RowMarketing extends React.Component {
  render() {
    return (
      <div><h2 className='badge-light'>Your posts</h2>
      <div className="row marketing">
        <Row row={data.postsRow1}/>
        <Row row={data.postsRow2}/>
      </div>
      </div>
    )
  }
}