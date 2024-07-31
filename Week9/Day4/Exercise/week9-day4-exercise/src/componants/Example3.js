import React from "react";
import data from "./test.json"

class Example3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    render() {
        return (
            <>
            <div>
            <img src={this.state.data[0].logo}></img>
            <a href={this.state.data[0].url}>{this.state.data[0].companyName}</a>
            <h1>{this.state.data[0].roles[0].title}</h1>
            <p>{this.state.data[0].roles[0].startDate}{this.state.data[0].roles[0].location}</p>
            <p>{this.state.data[0].roles[0].description}</p>
            </div>
            <div>
            <img src={this.state.data[1].logo}></img>
            <a href={this.state.data[1].url}>{this.state.data[1].companyName}</a>
            <h1>{this.state.data[1].roles[0].title}</h1>
            <p>{this.state.data[1].roles[0].startDate}{this.state.data[0].roles[0].location}</p>
            <p>{this.state.data[1].roles[0].description}</p>
            </div>
            </>
        );
    }
  }

  

  export default Example3;