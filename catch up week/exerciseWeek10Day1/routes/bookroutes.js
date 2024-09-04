const express = require('express');
const router = express.Router();


let books = [];
let id = 1;


router.get('/', (req, res) => {
    res.json(books);
});

router.post('/', (req, res) => {
    const { title, author, publishedDate } = req.body;
    const newBook = { id: id++, title, author, publishedDate };
    books.push(newBook);
    res.status(201).json(newBook);
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, publishedDate } = req.body;
    const book = books.find(book => book.id === parseInt(id));
    if (book) {
        book.title = title;
        book.author = author;
        book.publishedDate = publishedDate;
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

module.exports = router;
