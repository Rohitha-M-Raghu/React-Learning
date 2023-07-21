import React from "react";
import "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
    console.log("Timer Mounted...");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Previous seconds:", prevState.seconds);
    console.log("Current seconds:", this.state.seconds);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("Timer Unmounted...");
  }

  render() {
    return <h1>Seconds Elapsed: {this.state.seconds}</h1>;
  }
}

export default Timer;
