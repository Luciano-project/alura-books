const fs = require('fs');

function getAllFavorites() {
    return JSON.parse(fs.readFileSync("favorites.json"));
};

function deleteFavorite(id) {
    let nowBooks = JSON.parse(fs.readFileSync("favorites.json"));
    const newFilteredBooks = nowBooks.filter(book => book.id !== id);
    fs.writeFileSync("favorites.json", JSON.stringify(newFilteredBooks));
};

function insertFavorite(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const favorites = JSON.parse(fs.readFileSync("favorites.json"));
    const insertItem = books.find(book => book.id === id)
    const newFavoriteList = [...favorites, insertItem];
    fs.writeFileSync("favorites.json", JSON.stringify(newFavoriteList));
};

module.exports = {
    getAllFavorites,
    deleteFavorite,
    insertFavorite,
}