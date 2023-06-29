import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./LoginComponent.css";
import background from "../../assets/login.avif";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function LoginComponent() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [redirect, setRedirect] = useState(false);

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        loginData
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
    return <Navigate to={"/profile"} />;
  }

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
              <Form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    autoComplete="off"
                    value={loginData.username}
                    onChange={handleData}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={loginData.password}
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
