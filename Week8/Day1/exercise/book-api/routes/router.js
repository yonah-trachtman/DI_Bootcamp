const {
  getAllBooks,
  getOneBook,
  insertBook,
  updateBook,
  deleteBook
  } = require("../controllers/controllers.js");
  const express = require("express");
  
  const router = express.Router();
  
  router.get("/books", getAllBooks);
  router.get("/books/:id", getOneBook);
  router.post("/books", insertBook);
  router.put("/books/:id", updateBook);
  router.delete ("/books/:id", deleteBook)
  
  module.exports = {
    router,
  };