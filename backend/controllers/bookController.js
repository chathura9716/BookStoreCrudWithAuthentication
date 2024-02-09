const bookService = require('../services/bookService');

const addBook = async (req, res) => {
    try {
        const bookData = req.body;
        const result = await bookService.addBook(bookData);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getBookById = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await bookService.getBookById(bookId);
        if (!book) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.status(200).json(book);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const bookData = req.body;
        const result = await bookService.updateBook(bookId, bookData);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const result = await bookService.deleteBook(bookId);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
};
