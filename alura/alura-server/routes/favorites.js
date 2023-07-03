const { Router } = require("express")
const { getFavorites, postFavorite, delFavorite } = require("../controllers/favorites");

const router = Router()

router.get('/', getFavorites);
router.post('/:id', postFavorite);
router.delete('/:id', delFavorite);

module.exports = router;
// The main responsability of the routes is to receive the requests and send them to the controllers.