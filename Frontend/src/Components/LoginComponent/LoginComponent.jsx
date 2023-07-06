import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import background from "../../assets/login.avif";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

export default function LoginComponent() {
  const cookies = new Cookies();
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
        "http://localhost:3001/user/login",
        loginData
      );
      if (response.data.status === 200) {
        alert(response.data.message);
        cookies.set("token", response.data.token);
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
    return <Navigate to={"/"} />;
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
      <div className="vertical-center">
        <div className="row justify-content-center">
          <Card
            style={{ width: "20rem", marginTop: "88px", marginBottom: "80px" }}
            className="card"
          >
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
              <Form onSubmit={handleSubmit}>
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
