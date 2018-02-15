import React from 'react';

import Row from '../components/blog-marketing-row';

export default class RowMarketing extends React.Component {
  render() {
    const row1 = [
      {
        header: <h4>Subheading</h4>,
        text: <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
      },
      {
        header: <h4>Subheading</h4>,
        text: <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
          fermentum.</p>
      },
      {
        header: <h4>Subheading</h4>,
        text: <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      }];
    const row2 = [
      {
        header: <h4>Subheading</h4>,
        text: <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
      },
      {
        header: <h4>Subheading</h4>,
        text: <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
          fermentum.</p>
      },
      {
        header: <h4>Subheading</h4>,
        text: <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      }];

    return (
      <div className="row marketing">
        <Row row={row1}/>
        <Row row={row2}/>
      </div>
    )
  }
}