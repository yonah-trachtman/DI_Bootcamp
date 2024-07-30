import React from "react";

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    if (this.state.counter >= 5) {
        throw new Error('I crashed!');
      }
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default BuggyCounter;
