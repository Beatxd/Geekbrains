import React from 'react';

//components
import Row from './blog-marketing-row';

export default class RowMarketing extends React.Component {
  render() {
    return (
      <div className="row marketing">
        <Row row={this.props.data.row1}/>
        <Row row={this.props.data.row2}/>
      </div>
    )
  }
}