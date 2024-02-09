import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import "./Books.css";
import BookDetailsDialog from './BookDetail'; // Import the BookDetailsDialog component

const { Meta } = Card;

const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetch('http://localhost:1000/api/v1/books/getbooks')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setIsModalVisible(true);
  };

  return (
    <div className="container-fluid bg-dark py-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {books.map(book => (
          <div key={book.id} className="col mb-4" onClick={() => handleCardClick(book)}>
            <Card
              hoverable
              style={{ width: '100%', minHeight: '400px', cursor: 'pointer' }}
              cover={<img src={book.image} style={{ objectFit: 'cover', height: '300px' }} alt={book.bookname} />}
            >
              <Meta title={book.bookname} description={`Author: ${book.author}`} />
            </Card>
          </div>
        ))}
      </div>
      {isModalVisible && (
        <BookDetailsDialog book={selectedBook} onClose={() => setIsModalVisible(false)} />
      )}
    </div>
  );
};

export default Books;
