const { getAllFavorites, insertFavorite, deleteFavorite } = require('../services/favorites');

function getFavorites(req, resp) {
    try {
        const books = getAllFavorites();
        resp.send(books);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

function postFavorite(req, resp) {
    try {
        const id = req.params.id;
        insertFavorite(id);
        resp.status(201);
        resp.send("Book inserted with success!");
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

function delFavorite(req, resp) {
    try {
        const id = req.params.id;
        if (id && Number(id)){
            deleteFavorite(id);
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

module.exports = {
    getFavorites,
    postFavorite,
    delFavorite,
}