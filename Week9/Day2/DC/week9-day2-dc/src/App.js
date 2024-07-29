import './vote.css';
import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  function addVote(index) {
    languages[index].votes += 1
    setLanguages([...languages])
  }
  return (
  <>
  <div className="container">
  {languages.map((item, index) => {
    return (<div className='voteBox'>
           <p>{item.votes}</p>
           <p>{item.name}</p>
           <button className='voteBtn' onClick={() => {
            addVote(index)
           }}
    >Click Here</button>
    </div>)
          })}
    </div>
  </>
  );
}

export default App;
