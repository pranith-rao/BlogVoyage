import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../NavbarComponent/NavbarComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export default function ProfileComponent() {
  const cookies = new Cookies();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [blogs, setBlogs] = useState([]);
  const getDetails = async () => {
    try {
      const data = await axios.get("http://localhost:3001/user/getUserData", {
        headers: { authorization: `${cookies.get("token")}` },
      });
      setUsername(data.data.userData.username);
      setEmail(data.data.userData.email);
      setBlogs(data.data.blogData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex text-center justify-content-center mt-4">
        <Card style={{ width: "28rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            style={{ height: "200px" }}
            src="src/assets/profile.png"
          />
          <Card.Body>
            <p style={{ fontSize: "20px" }}>Username: {username}</p>
            <p style={{ fontSize: "20px" }}>Email: {email}</p>
            <Button variant="dark" href="/edit_profile">
              Update Profile
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Container>
          <h2 style={{ margin: "15px" }}>My Blogs</h2>
          <hr />
          {blogs.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "40px",
                textTransform: "uppercase",
              }}
            >
              No Blogs Added By You
            </p>
          ) : (
            <Row>
              {blogs.map((blog) => {
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
                        <Card.Text>{blog.summary}</Card.Text>
                        <div className="text-center">
                          <Button variant="dark" size="sm">
                            Read More
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          )}
        </Container>
      </div>
    </>
  );
}
