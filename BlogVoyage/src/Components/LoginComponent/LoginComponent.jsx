import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./LoginComponent.css";
import background from "../../assets/login.avif";

export default function LoginComponent() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div className="vertical-center">
        <div className="row justify-content-center">
          <Card style={{ width: "20rem", marginTop: "150px" }} className="card">
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  textTransform: "uppercase",
                }}
              >
                Login
              </Card.Title>
              <Form style={{ marginTop: "20px" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <div className="text-center">
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </div>
                <div className="text-center mt-3">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    style={{ textDecoration: "none", color: "green" }}
                  >
                    Register
                  </a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
