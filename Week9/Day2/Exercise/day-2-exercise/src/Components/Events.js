import { useState, useEffect } from "react";

function Events() {

    const [isToggleOn, setToggle] = useState(true);
    const [buttonText, setButtonText] = useState('ON');

    const clickMe = () => {
        alert("I was Clicked")
    }

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        alert(`Enter key was pressed, input was ${document.getElementById("input").value}`)
    }
}

    return (
        <>
        <input onKeyDown={ handleKeyDown } id="input" placeholder="press enter to get"></input>
        <button onClick={ clickMe }>Come on I dare ya</button>

        <div>
            <p>Exercise 9</p>
        <button id="button" onClick={ ()=> {
            if (isToggleOn) {
                setToggle(false)
                setButtonText("OFF")
            } else {
                setToggle(true)
                setButtonText("ON")
            }
        } }>{buttonText}</button>
        </div>
        </>
    )
}


export default Events