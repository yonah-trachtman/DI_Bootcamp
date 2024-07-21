// 🌟 Exercise 1: Building a RESTful API
// Instructions

// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

//     Create a directory named blog-api.

//     Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

//     Install the express package by running npm install express in the terminal.

//     Create a file named server.js.

//     In server.js, require the express package and set up an Express app.
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


app.listen(3000, ()=> {
    console.log("running in server 3000");
})

//     Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.
const blogs = [
    {
      id: 1,
      title: "Introduction to Express",
      content: "Express is a web application framework for Node.js.",
    },
    {
      id: 2,
      title: "Creating Routes in Express",
      content: "You can define routes using the express.Router() method.",
    },
    {
      id: 3,
      title: "Handling Requests and Responses",
      content:
        "Express provides methods to handle incoming requests and send responses.",
    },
  ];
//     Implement the following routes using Express:
//     GET /posts: Return a list of all blog posts.
app.get('/posts', (req, res) => {
    res.json(blogs)
  })
//     GET /posts/:id: Return a specific blog post based on its id.
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const blog = blogs.find((item) => item.id == id)
    if (!blog)  return res.sendStatus(404)
    res.json(blog)
})
//     POST /posts: Create a new blog post.

app.post('/posts', (req, res) => {
  const newBlog = {
    id: blogs.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});
//     PUT /posts/:id: Update an existing blog post.
app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const blog = blogs.findIndex((item) => item.id == id);
  if (blog === -1) {
    return res.status(404).send("Blog not found");
  }
  blogs[blog] = {
    id: blogs[blog].id,
    title,
    content,
  };
  res.status(200).json("Blog updated");
});
// app.put('/posts/:id', (req, res) => {
//     const { id } = req.params;
//     const {title, content} = req.body
//     const blog = blogs.findIndex((item) => item.id == id)
//       blogs[blog] = {
//         id: blogs[blog].id,
//         title,
//         content
//       };
//       res.status(200).json("Product updated");
// })
//     DELETE /posts/:id: Delete a blog post.
// app.delete('/posts/:id', (req, res) => {
//     const { id } = req.params
//     const blog = blogs.findIndex((item) => item.id == id)
//     if (id === -1) {
//         return res.status(404).send("blog not found");
//       }
//       blog.splice(blog, 1);
//       res.status(200).json("blog deleted");
//   })
  app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    const blog = blogs.findIndex((item) => item.id == id);
    if (blog === -1) {
      return res.status(404).send("Blog not found");
    }
    blogs.splice(blog, 1);
    res.status(200).json("Blog deleted");
  });
//     Implement error handling for invalid routes and server errors.

//     Start the Express app and listen on a specified port (e.g., 3000).
