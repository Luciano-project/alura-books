const { Router } = require("express")
const { getBooks, getBook, postBook, patchBook, delBook } = require("../controllers/books")

const router = Router()

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', postBook);
router.patch('/:id', patchBook);
router.delete('/:id', delBook);

module.exports = router


// The main responsability of the routes is to receive the requests and send them to the controllers.