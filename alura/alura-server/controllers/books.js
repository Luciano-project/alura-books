const { getAllBooks, getBookID, insertBook, modifyBook, deleteBook } = require('../services/books');

function getBooks(req, resp) {
    try {
        const books = getAllBooks();
        resp.send(books);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

function getBook(req, resp) {
    try {
        const id = req.params.id;
        if (id && Number(id)){
            const book = getBookID(id);
            resp.send(book);
        } else {
            resp.status(422);
            resp.send("Invalid ID");
        };
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

function postBook(req, resp) {
    try {
        const newBook = req.body;
        if (req.body.name) {
            insertBook(newBook);
            resp.status(201);
            resp.send("Book inserted with success!");
        } else {
            resp.status(422);
            resp.send("The name field is required!");
        }
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};
 
function patchBook(req, resp) {
    try {
        const id = req.params.id;
        if (id && Number(id)){
            const body = req.body;
            modifyBook(body, id);
            resp.send("Item modified with success!");
        } else {
            resp.status(422);
            resp.send("Invalid ID");
        };

    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

function delBook(req, resp) {
    try {
        const id = req.params.id;
        if (id && Number(id)){
            deleteBook(id);
            resp.send("Item deleted with success!");
        } else {
            resp.status(422);
            resp.send("Invalid ID");
        };
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};


// This function allows the export of the getBooks function to be used in other files.
module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    delBook,
};

//The main reposnsability of the controllers is to process the requests and send the responses.