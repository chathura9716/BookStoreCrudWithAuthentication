import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Modal, message, Card } from "antd";
import customAxios  from "../../customaxios/CustomAxios";
import EditBooks from "./EditBooks"; // Assuming you have already created the EditBooks component

const BooksManagement = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalClosed, setModalClosed] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await customAxios.get(
          "/books/getbooks"
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [modalClosed]);

  const handleEdit = (record) => {
    setSelectedBook(record);
    setIsModalVisible(true);
    setModalClosed(false);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setIsModalVisible(false);
    setModalClosed(true);
  };

  const handleDelete = async (record) => {
    Modal.confirm({
      title: "Confirm Delete",
      content: "Are you sure you want to delete this book?",
      onOk: async () => {
        try {
          await customAxios.delete(`/books/${record._id}`);
          message.success("Book deleted successfully!");
          setModalClosed(true);
        } catch (error) {
          console.error("Error deleting book:", error);
          message.error("Error deleting book. Please try again.");
        }
      },
    });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "bookname",
      key: "bookname",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor:"black"}}>
      <Card style={{ width: 1000 }}>
        <Table columns={columns} dataSource={books} />
      </Card>
      <EditBooks bookData={selectedBook} onClose={handleCloseModal} />
    </div>
  );
};

export default BooksManagement;
