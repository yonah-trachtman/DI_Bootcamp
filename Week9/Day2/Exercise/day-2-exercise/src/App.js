import { useState, useEffect } from "react";
import logo from './logo.svg';
import Car from './Components/Car';
import './App.css';
import  Events  from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

function App() {

  const carinfo = {name: "Ford", model: "Mustang"};
  
  return (
    <>
    <Car modal = {carinfo.model} />
    <Events />
    <Phone />
    <Color />
    </>
  );
}

export default App;
