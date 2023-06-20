const express = require('express');

//import the routes from books.js
const routerBooks = require('./routes/books');
const app = express();

const port = 8000;

// This allows us to use the JSON format.
app.use(express.json());

//the route /books is handled by the routerBooks
app.use('/books', routerBooks);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
}); 