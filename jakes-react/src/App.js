import React, { Component } from 'react';
import './App.css';
import Title from './Components/IntroTitle.js';
import Menu from './Components/Menu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <Menu/>
      </div>
    );
  }
}

export default App;
