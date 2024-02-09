const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { requireAuth } = require('../middleware/authMiddleware');

router.post("/add",requireAuth, bookController.addBook);
router.get("/getBooks", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.put("/:id",requireAuth, bookController.updateBook);
router.delete("/:id",requireAuth, bookController.deleteBook);

module.exports = router;
