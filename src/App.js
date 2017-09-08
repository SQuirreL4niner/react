import React, { Component } from 'react';
 import './App.css';
import uuid from 'uuid';
import $ from 'jquery';

import Game from './components/game/Game';
// import Square from './components/Square';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
