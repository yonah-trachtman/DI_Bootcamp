// 🌟 Exercise 2 : Move the box
// Instructions




//     Copy the code above, to a structured HTML file.
//     In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
let square = document.getElementById("animate");
let timer;
let left = 1

function myMove() {
 timer = setInterval(animation, 1)
    
}

function animation () {
    
    
    square.style.left = left+"px"
    left += 1
    console.log(left)
    console.log(square.style.left)
    if (square.style.left == "350px") {
        clearInterval(timer)
    }
}
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

// Exercise2