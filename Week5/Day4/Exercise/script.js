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
const form = document.getElementsByClassName("form");
console.log(form);
//     Retrieve the inputs by their id and console.log them.
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const submit = document.getElementById("submit")
console.log(fname, lname, submit);
//     Retrieve the inputs by their name attribute and console.log them.

//     When the user submits the form (ie. submit event listener)
//         use event.preventDefault(), why ?
//         get the values of the input tags,
//         make sure that they are not empty,
//         create an li per input value,
//         then append them to a the <ul class="usersAnswer"></ul>, below the form.

// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>


// 🌟 Exercise 3 : Transform the sentence
// Instructions

// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

//     Declare a global variable named allBoldItems.

//     Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

//     Create a function called highlight() that changes the color of all the bold text to blue.

//     Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

//     Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


// 🌟 Exercice 4 : Volume of a sphere
// Instructions

//     Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 
