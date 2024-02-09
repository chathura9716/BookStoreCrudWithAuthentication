import React from "react";
import { Modal } from "antd";
import "./BookDetail.css";

const BookDetailsDialog = ({ book, onClose }) => {
  return (
    <Modal
      open={true} // Set visible to true to show the modal
      onCancel={onClose}
      footer={null} // Remove the footer
      centered // Center the modal vertically
      className="book-details-modal" // Add a custom class for styling
    >
      <div className="modal-header">
        <h5 className="modal-title">{book.bookname}</h5>
      </div>
      <div className="modal-body">
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Description:</strong> {book.description}
        </p>
        {/* Add more details as needed */}
      </div>
    </Modal>
  );
};

export default BookDetailsDialog;
