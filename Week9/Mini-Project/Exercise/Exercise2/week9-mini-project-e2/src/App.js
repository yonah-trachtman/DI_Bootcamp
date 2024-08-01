
import logo from './logo.svg';
import './App.css';
import Pictures from './componants/Pictures';
import React, { useState, useEffect } from 'react';


function App() {
  const [query, setQuery] = useState('mountain');
  const [queryInput, setInput] = useState("");
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);


  useEffect(() => {
    setSubmitDisabled(queryInput.trim() === "");
  }, [queryInput]);

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(queryInput);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (queryInput.trim == "") {
      setSubmitDisabled(false)
    } else {
      setSubmitDisabled(true)
    }
    
  };
  
  

  return (
    <div className="App">
      <h1>SnapShot</h1>
      <form onSubmit={(e)=> {
        handleSearch(e)
      }}>
      <input 
      placeholder="Search..." 
      onChange={(e) => {
        handleInputChange(e)
      }}
      />
      <input type='submit' value="search" disabled={isSubmitDisabled}/>
      </form>
      <div className='btns'>
        <button onClick={() => {
          setQuery('plains')
        }}>Plains</button>
        <button onClick={() => {
          setQuery('island')
        }}>Island</button>
        <button onClick={() => {
          setQuery('swamp')
        }}>Swamp</button>
        <button onClick={() => {
          setQuery('mountain')
        }}>Mountain</button>
        <button onClick={() => {
          setQuery('forest')
        }}>Forest</button>
      </div>
      <Pictures query={query}/>
    </div>
  );
}

export default App;
