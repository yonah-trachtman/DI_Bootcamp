import logo from './logo.svg';
import './App.css';
import quotes from './Server/RandomQuotesProject-JSBOOTCAMP-Week8Day5-main/QuotesDatabase';
import React, { useState, useEffect } from 'react'; 
import QuotesBox from './Componants/QuoteBox';



function App() {
  const [color, setColor] = useState(getRandomColor())
  const [num, setNum] = useState(Math.floor(Math.random() * quotes.length))
  const [quote, setQuote] = useState(quotes[num].quote);
  const [author, setAuthor] = useState(quotes[num].author);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const getNewQuote = () => {
    let newNumber = Math.floor(Math.random() * quotes.length);
    while (newNumber === num) {
      newNumber = Math.floor(Math.random() * quotes.length);
    }
    setColor(getRandomColor())
    setNum(newNumber);
    setQuote(quotes[newNumber].quote);
    setAuthor(quotes[newNumber].author);
  };
  

  return (
    <div className="App" style={{"backgroundColor": color}}>
      <div className='InnerContainer'>
      <h1 style={{"color": color}}>"{quote}"</h1>
      <p style={{"color": color}}><i>-{author}-</i></p>
      <button style={{"backgroundColor": color}} onClick={()=> {
        getNewQuote()
      }}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
