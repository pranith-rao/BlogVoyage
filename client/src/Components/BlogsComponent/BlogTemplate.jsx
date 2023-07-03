import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import axios from "axios";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

export default function BlogTemplate() {
  const cookies = new Cookies();
  const [redirect, setRedirect] = useState(false);
  const [blogData, setBlogData] = useState({
    title: "",
    summary: "",
    blog: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (blogData.blog === "") {
        alert("Blog cant be empty");
      } else {
        const response = await axios.post(
          "http://localhost:3001/user/addBlog",
          blogData,
          {
            headers: { authorization: `${cookies.get("token")}` },
          }
        );
        if (response.data.status === 200) {
          alert(response.data.message);
          setRedirect(true);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (redirect) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <>
      <NavbarComponent />
      <Container className="mt-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control
              type="text"
              value={blogData.title}
              name="title"
              onChange={handleData}
              placeholder="Enter the title"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Summary</Form.Label>
            <Form.Control
              type="text"
              value={blogData.summary}
              name="summary"
              onChange={handleData}
              placeholder="Enter the summary"
              required
            />
          </Form.Group>
          <ReactQuill
            theme="snow"
            name="blog"
            value={blogData.blog}
            onChange={(value) => {
              setBlogData({ ...blogData, blog: value });
            }}
          />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="primary" size="md" type="submit">
              POST
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
