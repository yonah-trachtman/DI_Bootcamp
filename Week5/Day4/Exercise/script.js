// 🌟 Exercise 1 : Change the article
// Instructions

// Copy the code below, into a structured HTML file:




//     Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.getElementsByTagName("h1"); 
console.log(h1[0].innerHTML)
//     Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.getElementsByTagName("article");
article[0].removeChild(article[0].lastElementChild)


//     Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2 = document.getElementsByTagName("h2"); 
const h20 = h2[0]
function backgroundColorChange() {
    h20.style.backgroundColor = "red"
}

h20.addEventListener("click", backgroundColorChange)

//     Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.getElementsByTagName("h3")
function hide() {
    h3[0].style.display = "none"
}

h3[0].addEventListener("click", hide)
//     Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const btn = document.getElementById("btn")

function bold() {
    let peas = document.querySelectorAll("p")
    for (let index = 0; index < peas.length; index++) {
        peas[index].style.fontWeight = "bold"
        
    }
}


// 🌟 Exercise 2 : Work with forms
// Instructions

// Copy the code below, into a structured HTML file:



//     Retrieve the form and console.log it.
const form = document.getElementsByTagName("form");
console.log(form);
//     Retrieve the inputs by their id and console.log them.
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const submit = document.getElementById("submit")
console.log(fname, lname, submit);
//     Retrieve the inputs by their name attribute and console.log them.
const firstname = document.getElementById("fname").name
const lastname = document.getElementById("lname").name
console.log(firstname, lastname);
//     When the user submits the form (ie. submit event listener)
//         use event.preventDefault(), why ?
//         get the values of the input tags,
//         make sure that they are not empty,
//         create an li per input value,
//         then append them to a the <ul class="usersAnswer"></ul>, below the form.
function formsubmit(e) {
  e.preventDefault();
  let ul = document.getElementsByClassName("usersAnswer")
  let firstValue = document.createElement("li");
  let lastValue = document.createElement("li");
  if(fname.value.trim() === ""){
    alert('Please put a valid first name');
  } else {
    fname.value.trim()
    let ftext = document.createTextNode(fname.value);
    firstValue.appendChild(ftext);
  }
  if(fname.value.trim() === ""){
    alert('Please put a valid first name');
  } else {
    lname.value.trim()
    let ltext = document.createTextNode(lname.value);
    lastValue.appendChild(ltext);
  }
  console.log(e.target.elements["fname"].value, e.target.elements["lname"].value)

  ul[0].append(firstValue, lastValue)

}

form[0].addEventListener("submit", formsubmit, false)
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>


// 🌟 Exercise 3 : Transform the sentence
// Instructions

// Add this sentence to your HTML file then follow the steps :




// In the JS file:

//     Declare a global variable named allBoldItems.
let items = document.getElementsByTagName("strong")
const allBoldItems = []

//     Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {
    
    for (let index = 0; index < items.length; index++) {
        allBoldItems.push(items[index])
        
    }
    console.log(allBoldItems)
}

getBoldItems()
//     Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    for (let index = 0; index < allBoldItems.length; index++) {
        allBoldItems[index].style.color = "blue"
        
    }
}


//     Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault() {
    for (let index = 0; index < allBoldItems.length; index++) {
        allBoldItems[index].style.color = "black"
        
    }
}

//     Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

const p = document.getElementsByTagName("p")
const lastp  = p[p.length-1]


lastp.addEventListener("mouseover", highlight)
lastp.addEventListener("mouseout", returnItemsToDefault)
