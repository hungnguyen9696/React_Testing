import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 })
  };

  render() {

    return (
      <div data-test='component-app'>
        <h1>App</h1>
        <h2 data-test='counter-display'>Counter display: {this.state.counter}</h2>
        <button onClick={this.handleClick} data-test='increment-button'>Increment button</button>
      </div>
    );
  }
}
export default App;
