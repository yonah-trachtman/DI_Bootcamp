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

const bookList = document.getElementsByClassName("listBooks")
let book1 = document.createElement("div");
let book2 = document.createElement("div");


for (let index = 0; index < allBooks.length; index++) {

    let bookTitle = document.createElement("p");
    bookTitle.innerText = allBooks[index]["title"]
    let bookAuther = document.createElement("p");
    bookAuther.innerText = allBooks[index]["author"]
    let bookImg = document.createElement("img")
    bookImg.src = allBooks[index]["image"]
    bookImg.style.width = "100px"
    if (allBooks[index]["alreadyRead"] == true){
        bookTitle.style.color = "red"
        bookAuther.style.color = "red"
    }
    if (index == 0) {
        book1.append(bookTitle, bookAuther, bookImg)
    } else {
        book2.append(bookTitle, bookAuther, bookImg)
    }
}

bookList[0].append(book1, book2)