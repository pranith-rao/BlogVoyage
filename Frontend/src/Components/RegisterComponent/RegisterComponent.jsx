import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import background from "../../assets/login.avif";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function RegisterComponent() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [redirect, setRedirect] = useState(false);

  const handleData = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setRegisterData({ ...registerData, [property]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/user/register",
        registerData
      );
      if (response.data.status === 200) {
        alert(response.data.message);
        setRedirect(true);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.status === 400
      ) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Button variant="success" href="/" style={{ margin: "10px" }}>
        BACK
      </Button>
      <div className="row justify-content-center">
        <Card
          style={{ width: "20rem", marginBottom: "23px" }}
        >
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                fontSize: "25px",
                textTransform: "uppercase",
              }}
            >
              Registration
            </Card.Title>
            <Form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={registerData.username}
                  onChange={handleData}
                  autoComplete="off"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={registerData.email}
                  onChange={handleData}
                  autoComplete="off"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password1"
                  value={registerData.password1}
                  onChange={handleData}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={registerData.password2}
                  onChange={handleData}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </div>
              <div className="text-center mt-3">
                Already have an Account?{" "}
                <a
                  href="/login"
                  style={{ textDecoration: "none", color: "green" }}
                >
                  Login
                </a>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
