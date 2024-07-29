import { useState, useEffect } from "react";

function Color() {
    const [favoriteColor, setColor] = useState("red");

    useEffect(() => {
        return () => alert("useEffect reached");
      },[favoriteColor]);
    
    

    return (
        <div>
        <h1>My favoriteColor is {favoriteColor}</h1>
        <button onClick={()=> {
            setColor("blue")
        }}>Change Color</button>
        </div>
    )
}


export default Color