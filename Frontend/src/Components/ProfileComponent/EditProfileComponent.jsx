import React, { useState, useEffect } from "react";
import Navbar from "../NavbarComponent/NavbarComponent";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

export default function EditProfileComponent() {
  const cookies = new Cookies();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState("");

  const getDetails = async () => {
    try {
      const data = await axios.get("http://localhost:3001/user/getUserData", {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3001/user/update_profile",
        { username, email },
        {
          headers: { authorization: `${cookies.get("token")}` },
        }
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
    return <Navigate to={"/profile"} />;
  }

  return (
    <>
      <Navbar />
      <div className="row justify-content-center">
        <Card style={{ width: "20rem", marginTop: "100px" }} className="card">
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                fontSize: "25px",
                textTransform: "uppercase",
              }}
            >
              Update Profile
            </Card.Title>
            <Form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="success" type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
