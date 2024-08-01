import React, { useState, useEffect } from 'react'; 

 
 const QuotesBox = (props) => {
    return(
    <>
    <h1>"{props.quote}"</h1>
    <p><i>-{props.author}-</i></p>
    </>
    )
}

export default QuotesBox