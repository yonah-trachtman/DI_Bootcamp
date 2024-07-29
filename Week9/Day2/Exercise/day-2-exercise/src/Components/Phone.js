import { useState, useEffect } from "react";

function Phone() {
    const [phoneInfo, setInfo] = useState({
                                brand: "Samsung",
                                model: "Galaxy S20",
                                color: "black",
                                year: 2020,                                   
    });




   const changeColor = () => {
    phoneInfo.color = "blue"
    setInfo({...phoneInfo})
   }             
    return (
        <>
        <div>
            <h1>
                My phone is a {phoneInfo.brand}
            </h1>
            <p>It is a {phoneInfo.color} {phoneInfo.model} from {phoneInfo.year}</p>
            <button onClick={ changeColor }>Change Color</button>
        </div>
        </>
    )
}


export default Phone