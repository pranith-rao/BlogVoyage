import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./LoginComponent.css";
import background from "../../assets/login.avif";

export default function LoginComponent() {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
                    name="email"
                    autoComplete="off"
                    value={loginData.name}
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
                  <Button
                    variant="success"
                    type="submit"
                    onSubmit={handleSubmit}
                  >
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
