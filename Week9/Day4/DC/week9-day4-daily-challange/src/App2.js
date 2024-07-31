import './App.css';
import React from 'react';

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      message: null,
      text: null,
      final: null,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:3001/api/hello");
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      this.setState({ message: data.message });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const message = this.state.text;
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      };
    try {
        const res = await fetch("http://localhost:3001/api/world", options);
        const data = await res.json();
        console.log(data);
        this.setState({ final: data.message });
    } catch (error) {
        console.log(error);
    }
};


  


  render() {
    const { message, error } = this.state;
    return (
      <>
        <h1>{ message }</h1>
        <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="inputField">Post to Server:</label>
          <input
            id="inputField"
            type="text"
            onChange={(e)=>{
                this.setState({ text: e.target.value })
            }}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.final}</p>
      </div>
      </>
    );
  }
}

export default App2;
