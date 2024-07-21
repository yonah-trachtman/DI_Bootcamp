// 🌟 Exercise 2: Building a Basic CRUD API with Express.js
// Instructions

// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

//     Create a new directory named book-api.

//     Inside the book-api directory, initialize a new Node.js project and install the express package.

//     Create a new file named app.js in the book-api directory.

//     In app.js, import the express module and create an instance of an Express app.
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())



//     Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.
let books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
    { id: 2, title: "1984", author: "George Orwell", publishedYear: 1949 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 }
];
//     Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
app.listen(5000, ()=> {
    console.log("running in server 5000");
})
//     Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get('/books', (req, res) => {
    res.json(books)
  })
//     Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.
app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find((item) => item.id == id)
    if (!book)  return res.sendStatus(404)
    res.json(blog)
})
//     Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).
app.post('/books', (req, res) => {
    // console.log(req.body)
    const newBooks = {
        ...req.body,
        id: books.length + 1,
      };
      books.push(newBooks);
      res.status(201).json(newBooks);
});