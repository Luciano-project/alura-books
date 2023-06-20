const fs = require('fs');

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"));
};

function getBookID(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));

    // The filter() method creates a new array with all elements
    // that pass the test implemented by the provided function.
    // We just want the first occorence at the array, so we use [0].
    const filteredBook = books.filter(book => book.id === id)[0];
    return filteredBook;
};

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const newBookList = [...books, newBook];

    // This sintax is called spread operator. It allows us to
    // create a new array with the elements of the old array.
    fs.writeFileSync("books.json", JSON.stringify(newBookList));
};

function modifyBook(modifications, id) {
    let nowBooks = JSON.parse(fs.readFileSync("books.json"));
    // Now we need to find the index of the book that we want to modify
    // and then we can use the index to modify the book.
    const indexModificateBook = nowBooks.findIndex(book => book.id === id);

    // The spread operator allows us to create a new object with the
    // properties of the old object and the new properties.
    // In this case, if the fields has the same name, the new value
    // will overwrite the old value.
    const modifiedContent = { ...nowBooks[indexModificateBook], ...modifications };

    // Now we can modify the book.
    nowBooks[indexModificateBook] = modifiedContent;
    fs.writeFileSync("books.json", JSON.stringify(nowBooks));
}

function deleteBook(id) {
    let nowBooks = JSON.parse(fs.readFileSync("books.json"));
    const newFilteredBooks = nowBooks.filter(book => book.id !== id);
    fs.writeFileSync("books.json", JSON.stringify(newFilteredBooks));
};

module.exports = {
    getAllBooks,
    getBookID,
    insertBook,
    modifyBook,
    deleteBook,
}