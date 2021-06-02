import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      running: false
    };
    this.startStopTimer = this.startStopTimer.bind(this);
    this.interval = undefined;
  }

  tick() {
    this.setState((state, props) => ({
      seconds: state.seconds + (props.increment || 1)
    }));
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    if (this.interval) {
      return;
    }

    this.interval = setInterval(() => this.tick(), 1000);
    this.setState((state, props) => ({
      running: true
    }));
    console.log('Started');
  }

  stopTimer() {
    if (!this.interval) {
      return;
    }

    clearInterval(this.interval);
    this.interval = undefined;

    this.setState((state, props) => ({
      running: false
    }));
    console.log('Stopped');
  }  

  startStopTimer() {
    if (this.interval) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startStopText() {
    return this.interval ? 'Stop' : 'Start';
    //return this.state.running ? 'Stop' : 'Start';
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds} <
          button onClick={this.startStopTimer}>
          {this.startStopText()}
        </button>
      </div>
    );
  }
}

export default Timer;
