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