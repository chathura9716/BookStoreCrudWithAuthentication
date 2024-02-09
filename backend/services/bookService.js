const bookModel = require("../models/booksModel");

class BookService {
    async addBook(bookData) {
        const newBook = new bookModel(bookData);
        await newBook.save();
        return { message: "Book added successfully!" };
    }

    async getAllBooks() {
        return await bookModel.find();
    }

    async getBookById(bookId) {
        return await bookModel.findById(bookId);
    }

    async updateBook(bookId, bookData) {
        await bookModel.findByIdAndUpdate(bookId, bookData);
        return { message: "Book updated successfully!" };
    }

    async deleteBook(bookId) {
        await bookModel.findByIdAndDelete(bookId);
        return { message: "Book deleted successfully!" };
    }
}

module.exports = new BookService();
