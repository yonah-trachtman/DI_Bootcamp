import React from "react";

class Example1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    render() {
        return (
            <>
            <ul>
            <li>{this.state.data[0]}</li>
            <li>{this.state.data[1]}</li>
            <li>{this.state.data[2]}</li>
            </ul>
            </>
        );
    }
}

  

  export default Example1;