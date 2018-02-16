import React from 'react';

export default class Jumbotron extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      showColors: false,
      color: 'grey'
    };
  }
  render(){
    // color switcher
    const btnGreen = {backgroundColor: 'green'};
    const btnBlack = {backgroundColor: 'black'};

    let jumbotronStyle = {};
    switch(this.state.color){
      case 'green': {
        jumbotronStyle = {backgroundColor: 'lightgreen', color: 'black'};
        break;
      }
      case 'black': {
        jumbotronStyle = {backgroundColor: 'black', color: 'white'};
        break;
      }
    }

    // btn to open color switcher
    let colorSwitcher;

    if(this.state.showColors){
      colorSwitcher = (
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" style={btnGreen} className="btn btn-secondary"
                  onClick={() => {this.setState({color: 'green'})}}>Green</button>
          <button type="button" style={btnBlack} className="btn btn-secondary"
                  onClick={() => {this.setState({color: 'black'})}}>Black</button>
          <button type="button" className="btn btn-secondary"
                  onClick={() => {this.setState({color: 'grey'})}}>Grey</button>
        </div>
      );
    }

    return (
      <div className="jumbotron" style={jumbotronStyle}>
        <h1>Jumbotron heading</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p>
          <a className="btn btn-lg btn-success" href="#" role="button" data-toggle="modal" data-target="#myModal">Login now!</a>
          <button type="button" style={this.props.styles} className="btn btn-secondary" onClick={() => {
            this.setState({showColors: !this.state.showColors})
          }}>Change color</button>
        </p>
        {colorSwitcher}
      </div>
    )
  }
}