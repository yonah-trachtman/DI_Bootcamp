import { useState, useEffect } from "react";
import Garage from "./Garage";

function Car(props) {
    const [color, setColor] = useState("Red")
    const { modal } = props
    return (
        <>
            <h1>This car is { modal } { color }</h1>
            <Garage size="small"/>
        </>
    )
}



export default Car