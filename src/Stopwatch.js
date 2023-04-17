import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isRunning: false
    };
  }

  handleStart = () => {
    this.setState({ isRunning: true });
    this.intervalID = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  handlePause = () => {
    clearInterval(this.intervalID);
    this.setState({ isRunning: false });
  }

  handleReset = () => {
    clearInterval(this.intervalID);
    this.setState({ counter: 0, isRunning: false });
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handlePause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
