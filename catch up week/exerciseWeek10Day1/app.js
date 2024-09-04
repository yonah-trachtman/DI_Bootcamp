const express = require('express');
const app = express();


app.use(express.json());


const routes = require('./routes/routes');
const todos = require('./routes/todoroutes');
const booksRouter = require('./routes/bookroutes');


app.use('/', routes);
app.use('/todos', todos);
app.use('/books', booksRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
