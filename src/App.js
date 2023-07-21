import React from "react";
import Timer from "./components/Timer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: false,
    };
    console.log("Props: " + props);
  }

  toggleTimer = () => {
    this.setState((prevState) => ({
      showTimer: !prevState.showTimer,
    }));
  };

  render() {
    return (
      <div>
        {this.state.showTimer && <Timer />}
        <button onClick={this.toggleTimer}>
          {this.state.showTimer ? "Unmount Timer" : "Mount Timer"}
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log("App - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App - compoenentDidUpdate");
  }

  componentWillUnmount() {
    console.log("App - componentWillUnmount");
  }
}

export default App;
