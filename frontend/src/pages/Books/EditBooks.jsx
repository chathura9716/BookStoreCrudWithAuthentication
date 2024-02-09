import React, { useState, useEffect } from "react";
import customAxios  from "../../customaxios/CustomAxios";
import { Modal, Form, Input, Button, message } from "antd";
import "./AddBooks.css";

const EditBooks = ({ bookData, onClose }) => {
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    if (bookData) {
      form.setFieldsValue(bookData);
    }
  }, [bookData, form]);

  const onFinish = async (values) => {
    setSubmitLoading(true);
    try {
      await customAxios.put(`/books/${bookData._id}`, values);
      message.success('Book updated successfully!');
      onClose(); 
    } catch (error) {
      console.error("Error updating book:", error);
      message.error('Error updating book. Please try again.');
    }
    setSubmitLoading(false);
  };

  return (
    <Modal
      title="Edit Book"
      open={!!bookData}
      onCancel={onClose} 
      footer={null}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="bookname"
          label="Book Name"
          rules={[{ required: true, message: 'Please input the book name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="author"
          label="Author"
          rules={[{ required: true, message: 'Please input the author!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image"
          rules={[{ required: true, message: 'Please input the image URL!' }]}
        >
          <Input />
        </Form.Item>
       
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitLoading}>
            Update
          </Button>
          <Button onClick={onClose} style={{ marginLeft: 8 }}>
            Close
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditBooks;
