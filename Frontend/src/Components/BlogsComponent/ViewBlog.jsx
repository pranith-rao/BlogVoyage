import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ViewBlog() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);

  const getBlogData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/blog/getBlog/${id}`);
      setBlogData(response.data.blog);
    } catch (error) {
      console.log(error.message);
    }
  };

  useState(() => {
    getBlogData();
  }, []);

  return (
    <>
      <NavbarComponent />
      <Container style={{ marginTop: "30px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ textTransform: "uppercase" }}>{blogData.title}</h1>
          <p>Added By: {blogData.addedBy}</p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
          </div>
        </div>
        <div style={{ marginTop: "20px", textAlign: "justify" }}>
          <div dangerouslySetInnerHTML={{ __html: blogData.blog }} />
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Button href="/" variant="dark">
            Back
          </Button>
        </div>
      </Container>
    </>
  );
}
