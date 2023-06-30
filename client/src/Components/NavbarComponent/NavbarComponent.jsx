import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavbarComponent() {
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
          <Nav.Link href="/Profile">Profile</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          {/* <Nav.Link href="/createBlog">Write a Blog</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
