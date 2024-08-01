import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [amount1, setAmount1] = useState(0)
  const [amount2, setAmount2] = useState(0)
  const [sum, setSum] = useState()
  const [operand, setOperand] = useState("Plus")


  const handleNumber1 = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value < 0.0000000001) {
      setAmount1(0);
    } else {
      setAmount1(value);
    }
  };

  const handleNumber2 = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value < 0.0000000001) {
      setAmount2(0);
    } else {
      setAmount2(value);
    }
  };

  const handleOperand = (e) => {
    setOperand(e.target.value)
  }
  
  const getFinal = () => {
    if (operand === "Minus") {
      setSum(amount1 - amount2)
    } else if (operand === "Times") {
      setSum(amount1 * amount2)
    } else if (operand === "Divide") {
      if ( amount2 > 0) {
        setSum(amount1 / amount2)
      } else {
        setSum("Can't devide by zero")
      } 
    } else {
      setSum(amount1 + amount2)
    }
  }

  return (
    <div className="App">
      <h3>Calculating Two Numbers</h3>
      <input value={amount1} type='number' onChange={(e)=> {
        handleNumber1(e)
      }}/>
      <input value={amount2} type='number' onChange={(e)=> {
        handleNumber2(e)
      }}/>
      <select onChange={(e) => {
        handleOperand(e)
      }}>
      <option value="Plus">Plus</option>
      <option value="Minus">Minus</option>
      <option value="Times">Times</option>
      <option value="Divide">Divide</option>
      </select>
      <button onClick={getFinal}>Add Numbers</button>
      <h1>{sum}</h1>
    </div>
  );
}

export default App;
