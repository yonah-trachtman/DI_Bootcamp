// 🌟 Exercise 1: Timer
// Instructions

// Using this HTML code:
let container = document.getElementById("container")
const btn = document.getElementById("clear")



// Part I

//     In your Javascript file, using setTimeout, call a function after 2 seconds.
//     The function will alert “Hello World”.
const myTimeout = setTimeout(myGreeting, 2000);
function myGreeting() {
    alert("Hello World")
}

// Part II

//     In your Javascript file, using setTimeout, call a function after 2 seconds.
//     The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
const pushDiv = setTimeout(newp, 2000);
function newp() {
    const para = document.createElement("p");
    para.innerText = "Hello World";
    container.appendChild(para);
    container = document.getElementById("container")
}


// Part III

//     In your Javascript file, using setInterval, call a function every 2 seconds.
myInterval = setInterval(newp, 2000); 
//     The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
//     The interval will be cleared (ie. clearInterval), when the user will click on the button.
function clear() {
    clearInterval(myInterval); 
}
btn.addEventListener("click", clear)
//     Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
clearint = setInterval(function () {
    if (container.childElementCount == 5) {
        clearInterval(myInterval); 
        clearInterval(clearint)
    }
}, 1)


