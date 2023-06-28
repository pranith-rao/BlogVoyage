import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./BlogsComponent.css";

export default function BlogsComponent() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row className="mt-4">
          <Card className="content">
            <Row>
              <Col sm={1} className="dateContent">
                15 June
              </Col>
              <Col sm={11}>
                <Card.Header>Blog Title</Card.Header>
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">By username</Card.Subtitle>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content...<a href="#">read more</a>
                  </Card.Text>
                  <Button variant="outline-primary">#man</Button>{' '}
                  <Button variant="outline-primary">#humor</Button>{' '}
                  <Button variant="outline-primary">#life</Button>{' '}
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row className="mt-4">
          <Card className="content">
            <Row>
              <Col sm={1} className="dateContent">
                15 June
              </Col>
              <Col sm={11}>
                <Card.Header>Blog Title</Card.Header>
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">By username</Card.Subtitle>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content...<a href="#">read more</a>
                  </Card.Text>
                  <Button variant="outline-primary">#man</Button>{' '}
                  <Button variant="outline-primary">#humor</Button>{' '}
                  <Button variant="outline-primary">#life</Button>{' '}
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row className="mt-4">
          <Card className="content">
            <Row>
              <Col sm={1} className="dateContent">
                15 June
              </Col>
              <Col sm={11}>
                <Card.Header>Blog Title</Card.Header>
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">By username</Card.Subtitle>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content...<a href="#">read more</a>
                  </Card.Text>
                  <Button variant="outline-primary">#man</Button>{' '}
                  <Button variant="outline-primary">#humor</Button>{' '}
                  <Button variant="outline-primary">#life</Button>{' '}
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </>
  );
}
