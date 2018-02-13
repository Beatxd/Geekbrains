import React from 'react';

export default class Row extends React.Component {
  render() {
    let component = this.props.row.map((item, i) => {
      return (
        <div key={i}>
          {item.header}
          {item.text}
        </div>
      )
    });
    
    return (
      <div className="col-lg-6">
        {component}
      </div>
    )
  }
}