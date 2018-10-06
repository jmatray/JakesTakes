import React, { Component } from 'react';
import './App.css';
import Title from './Components/IntroTitle.js';
import MainContainer from './Components/MainContainer.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.homeTitle = "Recent";

    this.state = {
        currentView: this.homeTitle
    };
  }

  handleChange(val) {
    this.setState({
      currentView: val
    });
  }
  render() {
    return (
      <div className="App fade-in">
        <Title homeTitle={this.homeTitle} handleTitleSelect={this.handleChange}/>
        <MainContainer currentView={this.state.currentView} handleMenuSelect={this.handleChange}/>

      </div>
    );
  }
}

export default App;
