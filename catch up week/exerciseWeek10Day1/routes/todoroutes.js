const express = require('express');
const router = express.Router();


let todos = [];
let id = 1;


router.get('/', (req, res) => {
    res.json(todos);
});


router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newTodo = { id: id++, title, description };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = todos.find(todo => todo.id === parseInt(id));
    if (todo) {
        todo.title = title;
        todo.description = description;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'To-do item not found' });
    }
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'To-do item not found' });
    }
});

module.exports = router;
