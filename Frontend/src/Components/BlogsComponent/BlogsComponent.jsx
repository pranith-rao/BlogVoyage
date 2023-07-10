import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./BlogsComponent.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogsComponent() {
  const [blogData, setBlogData] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/blog/getAllBlogs"
      );
      setBlogData(response.data.blog);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <NavbarComponent />
      <Row>
        {blogData.map((blog) => {
          return (
            <Col key={blog._id} sm={4}>
              <Card border={"dark"} style={{ margin: "25px" }}>
                <Card.Header
                  className="text-center"
                  style={{ textTransform: "uppercase" }}
                >
                  {blog.title}
                </Card.Header>
                <Card.Body>
                  <Card.Text
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    {blog.summary}
                  </Card.Text>
                  <div className="text-center">
                    <Button
                      variant="dark"
                      size="sm"
                      href={`/viewBlog/${blog._id}`}
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button href="/" variant="dark">
          BACK
        </Button>
      </div>
    </>
  );
}
