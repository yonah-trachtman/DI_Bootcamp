import React from "react";

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };

    }

    componentWillUnmount() {
        alert("Component is about to be unmounted!");
    }



    render() {

        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

export default Child;
