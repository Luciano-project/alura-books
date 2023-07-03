const express = require('express');
const cors = require('cors');

//import the routes from books.js
const routerBooks = require('./routes/books');
const routerFavorites = require('./routes/favorites');
const app = express();

const port = 8000;

// This allows us to use the JSON format.
app.use(express.json());

// This allows us to use the cors.
app.use(cors({origin:'*'}))

//the route /books is handled by the routerBooks
app.use('/books', routerBooks);
app.use('/favorites', routerFavorites);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
}); 