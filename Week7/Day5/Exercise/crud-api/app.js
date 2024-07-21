// 🌟 Exercise 3: Building a Basic CRUD API with Express and Axios using a Data Module
// Instructions

// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js and Axios to retrieve data from the JSONPlaceholder API and respond with that data in your own API. You’ll also create a separate module to handle data retrieval using Axios.

// Part 1: Setting Up the Express Server

//     Create a new directory named crud-api.

//     Inside the crud-api directory, initialize a new Node.js project and install the express and axios packages.

//     Create a new file named app.js in the crud-api directory.

//     In app.js, import the express module and create an instance of an Express app.
const express = require('express')
const app = express()
app.use(express.json());
//     Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

app.listen(5000, ()=> {
    console.log("running in server 5000");
})



// Part 3: Using the Data Module in the Express App

//     Inside app.js, import the dataService module you created.
const {fetchPosts} = require("./data/dataService.js")
//     Create an endpoint in your Express app that uses the fetchPosts function from the dataService module to retrieve data from the JSONPlaceholder API.
app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts("https://jsonplaceholder.typicode.com/posts");
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Error fetching posts' });
    }
});
//     Respond with the fetched data from the JSONPlaceholder API. https://jsonplaceholder.typicode.com/posts

//     Print a message in the console to indicate that the data has been successfully retrieved and sent as a response.
