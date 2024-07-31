import React from "react";
import data from "./test.json"

class Example2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    render() {
        return (
            <>
            <h1>{this.state.data[0].Area}</h1>
            <ul>
            <li>{this.state.data[0].SkillSet[0].Name}</li>
            <li>{this.state.data[0].SkillSet[1].Name}</li>
            <li>{this.state.data[0].SkillSet[2].Name}</li>
            </ul>
            <h1>{this.state.data[1].Area}</h1>
            <ul>
            <li>{this.state.data[1].SkillSet[0].Name}</li>
            <li>{this.state.data[1].SkillSet[1].Name}</li>
            <li>{this.state.data[1].SkillSet[2].Name}</li>
            <li>{this.state.data[1].SkillSet[1].Name}</li>
            <li>{this.state.data[1].SkillSet[2].Name}</li>
            </ul>
            </>
        );
    }
  }

  

  export default Example2;

