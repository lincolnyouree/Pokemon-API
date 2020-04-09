import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  state = {
    pokemon: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Pokemon Index</header>
      </div>
    )
  }

}

export default App;
