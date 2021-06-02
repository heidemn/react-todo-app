import React from 'react';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          seconds: 0,
          running: false
      };
      this.startStop = this.startStop.bind(this);
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
      
      this.setState(state => ({
        seconds: state.seconds,
        running: true
      }));
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startStop() {
        if (this.state.running) {
            clearInterval(this.interval);
        } else {
            this.interval = setInterval(() => this.tick(), 1000);
        }
        this.setState(state => ({
            seconds: state.seconds,
            running: !state.running
        }));
        console.log('Start/stop');
    }

    startStopText() {
        return this.state.running ? 'Stop' : 'Start';
    }
    
    render() {
        return (
            <div>
                Seconds: {this.state.seconds} <
                button onClick={this.startStop}>
                    {this.startStopText()}
                </button>
            </div>
        );
    }
}

export default Timer;
