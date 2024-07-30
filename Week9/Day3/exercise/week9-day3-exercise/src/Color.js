import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 3000)
  }
  getSnapshotBeforeUpdate(prevProps) {
    console.log("in getSnapshotBeforeUpdate");
    return true
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      console.log("after update")
    }
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={() => this.setState({ favoriteColor: "blue" })}>
          Change Color
        </button>
      </div>
    );
  }
}

export default Color;