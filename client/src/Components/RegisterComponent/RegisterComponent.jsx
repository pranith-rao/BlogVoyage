import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./RegisterComponent.css";
import background from "../../assets/login.avif";

export default function RegisterComponent() {
  const [registerData, setRegisterData] = React.useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleData = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setRegisterData({ ...registerData, [property]: value });
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
          <Card style={{ width: "20rem", marginTop: "50px" }}>
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
              <Form style={{ marginTop: "20px" }}>
                <Form.Group className="mb-3">
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
                <Form.Group className="mb-3">
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
                <Form.Group className="mb-3">
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
                <Form.Group className="mb-3">
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
                  <Button
                    variant="success"
                    type="submit"
                    onSubmit={handleSubmit}
                  >
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
    </div>
  );
}
