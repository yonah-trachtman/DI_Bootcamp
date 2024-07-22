const {
  _getAllBooks,
  _getOneBook,
  _insertBook,
  _updateBook,
  _deleteBook
} = require("../models/models.js");

const getAllBooks = (req, res) => {
  _getAllBooks()
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

const getOneBook = (req, res) => {
  const { id } = req.params;
  _getOneBook(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

const updateBook = (req, res) => {
  const { id } = req.params
  const { title, author, publishedyear } = req.body;
  _updateBook(title, author, publishedyear, id)
    .then((result) => {
      getAllBooks(req,res)
    })
    .catch((e) => {
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

const insertBook = (req, res) => {
    const { title, author, publishedyear } = req.body;
    _insertBook(title, author, publishedyear)
      .then((result) => {
        console.log(result)
        getAllBooks(req,res)
      })
      .catch((e) => {
        console.log(e)
        res.status(404).json({ message: "something went wrong!!!" });
      });
  };

const deleteBook = (req, res) => {
    const { id } = req.params;
    _deleteBook(id)
      .then((result) => {
        res.json(result);
      })
      .catch((e) => {
        res.status(404).json({ message: "something went wrong!!!" });
      });
  };

module.exports = {
    getAllBooks,
    getOneBook,
    insertBook,
    updateBook,
    deleteBook
};