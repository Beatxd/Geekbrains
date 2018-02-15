import React from 'react';

export default class Jumbotron extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      showColors: false
    };

    this.showColorSwitcher = () => {
      this.state.showColors = !this.state.showColors;
    };
    // binds
    this.showColorSwitcher = this.showColorSwitcher.bind(this)
  }
  render(){
    let colorSwitcher;
    const colorSwitcherStyle = {
      padding: '11px',
      color: 'green',
      textShadow:`
      -0 -1px 2px #FFFFFF, 0 -1px 2px #FFFFFF, -0 1px 2px #FFFFFF, 0 1px 2px #FFFFFF,
      -1px -0 2px #FFFFFF, 1px -0 2px #FFFFFF, -1px 0 2px #FFFFFF, 1px 0 2px #FFFFFF`,
      fontWeight: '700',
      background: `
      repeating-linear-gradient(45deg, transparent, transparent 1em, #5A9C6E 0, #5A9C6E 2em,
      transparent 0, transparent 3em, #A8BF5A 0, #A8BF5A 4em, transparent 0, transparent 5em, #FAC46E 0, #FAC46E 6em,
      transparent 0, transparent 7em, #FABB 0, #FAD5BB 8em), 
      repeating-linear-gradient(-45deg,transparent, transparent 1em, #A8BF5A 0,#A8BF5A 2em,
      transparent 0, transparent 3em, #FABB 0, #FAD5BB 4em, transparent 0, transparent 5em, #FAC46E 0, #FAC46E 6em), 
      #F2FEFF`,
    backgroundBlendMode: 'multiply'
    };
    const btnGreen = {backgroundColor: 'green'};
    const btnBlack = {backgroundColor: 'black'};
    let jumbotronStyle = {};
    switch(color){
      case 'green': {
        jumbotronStyle = {backgroundColor: 'green'};
        break;
      },
      case 'black': {
        jumbotronStyle = {backgroundColor: 'black'};
        break;
      }
    }

    if(this.state.showColors){
      colorSwitcher = (
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" style={btnGreen} className="btn btn-secondary">Green</button>
          <button type="button" style={btnBlack} className="btn btn-secondary">Black</button>
          <button type="button" className="btn btn-secondary">Grey</button>
        </div>
      );
    }

    return (
      <div className="jumbotron" style={jumbotronStyle}>
        <h1>Jumbotron heading</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-lg btn-success" href="#" role="button" data-toggle="modal" data-target="#myModal">Login now!</a></p>
        <p><button type="button" style={colorSwitcherStyle} className="btn btn-secondary" onClick={() => {
          this.setState({showColors: !this.state.showColors})
        }}>Change color</button></p>
        {colorSwitcher}
      </div>
    )
  }
}