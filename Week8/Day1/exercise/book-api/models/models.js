const { db } = require("../config/config.js")

const _getAllBooks = () => {
    return db("books").select("id", "title", "author","publishedyear").orderBy("id");
  }
  
  const _getOneBook = (book_id) => {
    return db("books")
    .select("id", "title", "author","publishedyear")
    .where({ id: book_id });
  }
  
  const _insertBook = (title, author, publishedyear) => {
    return db("books").insert({title, author, publishedyear},["id","title","author","publishedyear"])
  }

  const _updateBook = (title, author, publishedyear, book_id) => {
    return db("books")
    .update({title, author, publishedyear})
    .where({ id: book_id })
    .returning("id","title","author","publishedyear")
  }

  const _deleteBook = (book_id) => {
    return db("books")
    .where({ id: book_id })
    .del()
    .returning("id","title","author","publishedyear")
  }

  module.exports = {
    _getAllBooks,
    _getOneBook,
    _insertBook,
    _updateBook,
    _deleteBook
  };