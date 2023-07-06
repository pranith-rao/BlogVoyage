import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

export default function NavbarComponent() {
  const cookies = new Cookies();
  const [username, setUsername] = useState("");
  const [redirect2, SetRedirect2] = useState(false);

  const setNavbar = async () => {
    try {
      const data = await axios.get("http://localhost:3001/user/navbar", {
        headers: { authorization: `${cookies.get("token")}` },
      });
      setUsername(data.data.userData.username);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setNavbar();
  }, []);

  const logout = () => {
    cookies.remove("token");
    alert("Logged Out Successfully");
    SetRedirect2(true);
  };

  if (redirect2) {
    return <Navigate to={"/login"} />;
  }

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="bg-body-tertiary"
      style={{ fontWeight: "bold" }}
    >
      <Navbar.Brand href="/" className="ms-3">
        BlogVoyage
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end ms-3"
      >
        <Nav>
          {username && (
            <>
              <Nav.Link href="/Profile">Profile</Nav.Link>
              <Nav.Link href="/createBlog">Write a Blog</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </>
          )}
          {username === "" && (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
