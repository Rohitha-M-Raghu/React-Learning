import React from "react";
import "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isPaused: true,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.setState({ isPaused: false });

    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        if (!this.state.isPaused) {
          this.setState((prevState) => ({
            seconds: prevState.seconds + 1,
          }));
        }
      }, 1000);
    }
  };

  pauseTimer = () => {
    this.setState({ isPaused: true });
  };

  resumeTimer = () => {
    this.setState({ isPaused: false });
  };

  resetTimer = () => {
    this.setState({ seconds: 0 });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Previous seconds:", prevState.seconds);
    console.log("Current seconds:", this.state.seconds);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("Timer Unmounted...");
  }

  render() {
    // return <h1>Seconds Elapsed: {this.state.seconds}</h1>;
    return (
      <div>
        <div className="time">Seconds Elapsed: {this.state.seconds}</div>
        {this.state.isPaused ? (
          <button onClick={this.resumeTimer}>Resume</button>
        ) : (
          <button onClick={this.pauseTimer}>Pause</button>
        )}
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Timer;
