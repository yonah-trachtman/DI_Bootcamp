// 🌟 Exercise 5 : Users
// Instructions

// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


//     Add the code above, to your HTML file

//     Using Javascript:
//         Retrieve the div and console.log it
const div = document.getElementById("container")
console.log(div);
//         Change the name “Pete” to “Richard”.
let list = document.getElementsByClassName("list")
list[0].children[1].innerHTML = "Richard"
//         Delete the second <li> of the second <ul>.
list[1].removeChild(list[1].children[1])
//         Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for (let index = 0; index < list.length; index++) {
    list[index].firstElementChild.innerHTML = "Yonah"
    
}

//     Using Javascript:
//         Add a class called student_list to both of the <ul>'s.
for (let index = 0; index < list.length; index++) {
    list[index].classList.add("student_list")
    
}
//         Add the classes university and attendance to the first <ul>.
list[0].classList.add("university", "attendance")

//     Using Javascript:
//         Add a “light blue” background color and some padding to the <div>.
div.style.background = "lightblue"
//         Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
list[1].children[1].style.display = "none"; 
//         Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
list[0].children[1].style.border = "thick solid black"
//         Change the font size of the whole body.
document.body.style.fontSize = "75px"





// 🌟 Exercise 6 : Change the navbar
// Instructions

// Create a new structured HTML file and a new Javascript file



//     Add the code above, to your HTML file

//     Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let navBar = document.getElementById("navBar")
navBar.setAttribute("id", "socialNetworkNavigation")
//     We are going to add a new <li> to the <ul>.
//         First, create a new <li> tag (use the createElement method).
const newLi = document.createElement("li");
//         Create a new text node with “Logout” as its specified text.
let textNode = document.createTextNode("Logout");
//         Append the text node to the newly created list node (<li>).
newLi.appendChild(textNode)
//         Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
navBar.firstElementChild.appendChild(newLi)
//     Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
console.log(navBar.firstElementChild.firstElementChild);
console.log(navBar.firstElementChild.lastElementChild)





// Exercise 7 : My Book List
// Instructions

// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

//     In the body of the HTML page, create an empty section:
//     <section class="listBooks"></section>

//     In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
//         title,
//         author,
//         image : a url,
//         alreadyRead : which is a boolean (true or false).


//     Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)


const allBooks = [{title: "Going Postal",
            author: "Terry Pratchett",
            image : "https://m.media-amazon.com/images/I/51exLHGorBL._SL500_.jpg",
            alreadyRead : true
            }, 
            {title: "Mossflower",
            author: "Brian Jacques",
            image: "https://m.media-amazon.com/images/I/81ENOB80kYL._AC_UF1000,1000_QL80_.jpg",
            alreadyRead : true
            }]

            
//     Requirements : All the instructions below need to be coded in the js file:
//         Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
//         For each book :
//             You have to display the book’s title and the book’s author.
//             Example: HarryPotter written by JKRolling.
//             The width of the image has to be set to 100px.
//             If the book is already read. Set the color of the book’s details to red.