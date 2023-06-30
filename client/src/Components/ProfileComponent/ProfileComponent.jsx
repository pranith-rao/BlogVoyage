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
  const getDetails = async () => {
    try {
      const data = await axios.get("http://localhost:3001/user/profile", {
        headers: { authorization: `${cookies.get("token")}` },
      });
      setUsername(data.data.userData.username);
      setEmail(data.data.userData.email);
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
            <Button variant="primary" href="/edit_profile">
              Update Profile
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Container>
          <h2 style={{ marginTop: "15px" }}>My Blogs</h2>
          <hr />
          <Row>
            <Col>
              <Card
                border={"info"}
                style={{ width: "18rem", marginTop: "30px" }}
              >
                <Card.Header className="text-center">Blog Title</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Blog Description: Some quick example text to build on the
                    card title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="info" size="sm">
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                border={"info"}
                style={{ width: "18rem", marginTop: "30px" }}
              >
                <Card.Header className="text-center">Blog Title</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Blog Description: Some quick example text to build on the
                    card title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="info" size="sm">
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                border={"info"}
                style={{ width: "18rem", marginTop: "30px" }}
              >
                <Card.Header className="text-center">Blog Title</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Blog Description: Some quick example text to build on the
                    card title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="info" size="sm">
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                border={"info"}
                style={{ width: "18rem", marginTop: "30px" }}
              >
                <Card.Header className="text-center">Blog Title</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Blog Description: Some quick example text to build on the
                    card title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="info" size="sm">
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                border={"info"}
                style={{ width: "18rem", marginTop: "30px" }}
              >
                <Card.Header className="text-center">Blog Title</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Blog Description: Some quick example text to build on the
                    card title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="info" size="sm">
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                border={"info"}
                style={{ width: "18rem", marginTop: "30px" }}
              >
                <Card.Header className="text-center">Blog Title</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Blog Description: Some quick example text to build on the
                    card title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="info" size="sm">
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
