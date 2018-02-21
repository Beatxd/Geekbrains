import React from 'react';

export default class Jumbotron extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      showColors: false
    };

    // functions
    this.jumbotronStyle = {};
    this.changeColor = (e) => {
      switch(e.target.id){
        case 'btn-green': {
          this.jumbotronStyle = {backgroundColor: 'lightgreen', color: 'black'};
          break;
        }
        case 'btn-black': {
          this.jumbotronStyle = {backgroundColor: 'black', color: 'white'};
          break;
        }
        default: this.jumbotronStyle = {}
      }
      this.setState({color: 'black'});
    };

    // binds
    this.changeColor = this.changeColor.bind(this);

  }
  render(){
    // color switcher
    const btnGreen = {backgroundColor: 'green'};
    const btnBlack = {backgroundColor: 'black'};

    // btn to open color switcher
    let colorSwitcher;


    if(this.state.showColors){
      colorSwitcher = (
        <div className="btn-group" role="group" aria-label="Basic example" onClick={this.changeColor}>
          <button id="btn-green" type="button" style={btnGreen} className="btn btn-secondary">Green</button>
          <button id="btn-black" type="button" style={btnBlack} className="btn btn-secondary">Black</button>
          <button type="button" className="btn btn-secondary">Default</button>
        </div>
      );
    }

    return (
      <div className="jumbotron" style={this.jumbotronStyle}>
        <h1>Jumbotron heading</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p>
          <a className="btn btn-lg btn-info" href="#" role="button" data-toggle="modal" data-target="#myModal">Login now!</a>
          <button type="button" style={this.props.data} className="btn btn-secondary" onClick={() => {
            this.setState({showColors: !this.state.showColors})
          }}>Change color</button>
        </p>
        {colorSwitcher}
      </div>
    )
  }
}