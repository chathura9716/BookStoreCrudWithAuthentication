import React, { useEffect } from "react";
import customAxios  from "../../customaxios/CustomAxios";
import { Form, Input, Button, message, Card } from "antd";
import "./AddBooks.css";

export const AddBooks = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const response = await customAxios.post("/books/add", values);
      console.log(response.data);
      form.resetFields();
      message.success("Book added successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Error submitting form!");
    }
  };
  return (
    <div className="container  text-white container-fluid mx-10 my-5  ">
      <Card title="Add New Book" style={{ width: "100%" }}>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            label="Book Name"
            name="bookname"
            rules={[{ required: true, message: "Please input the book name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Author"
            name="author"
            rules={[{ required: true, message: "Please input the author!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image url"
            name="image"
            rules={[{ required: true, message: "Please input the image URL!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
