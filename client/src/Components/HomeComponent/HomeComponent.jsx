import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import "./HomeComponent.css";
import Card from "react-bootstrap/Card";
import bg from "../../assets/bg.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function HomeComponent() {
  return (
    <>
      <NavbarComponent />
      <Card className="bg-dark text-white">
        <Card.Img
          src={bg}
          alt="Card image"
          style={{ height: "300px", backgroundSize: "cover" }}
        />
        <Card.ImgOverlay style={{ textAlign: "center", top: "25%" }}>
          <Card.Title>
            <h1>BLOGVOYAGE</h1>
          </Card.Title>
          <Card.Text style={{ fontSize: "20px" }}>
            Where Words Unleash Their Power: Inspiring Minds, One Blog at a Time
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <h2
        style={{ textAlign: "center", fontWeight: "bold", marginTop: "50px" }}
      >
        _____FEATURED BLOGS_____
      </h2>
      <Row>
        <Col>
          <Card border={"info"} style={{ width: "18rem", marginTop: "30px" }}>
            <Card.Header className="text-center">Blog Title</Card.Header>
            <Card.Body>
              <Card.Text>
                Blog Description: Some quick example text to build on the card
                title and make up the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <Button variant="info" size="sm">
                  Read More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border={"info"} style={{ width: "18rem", marginTop: "30px" }}>
            <Card.Header className="text-center">Blog Title</Card.Header>
            <Card.Body>
              <Card.Text>
                Blog Description: Some quick example text to build on the card
                title and make up the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <Button variant="info" size="sm">
                  Read More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border={"info"} style={{ width: "18rem", marginTop: "30px" }}>
            <Card.Header className="text-center">Blog Title</Card.Header>
            <Card.Body>
              <Card.Text>
                Blog Description: Some quick example text to build on the card
                title and make up the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <Button variant="info" size="sm">
                  Read More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border={"info"} style={{ width: "18rem", marginTop: "30px" }}>
            <Card.Header className="text-center">Blog Title</Card.Header>
            <Card.Body>
              <Card.Text>
                Blog Description: Some quick example text to build on the card
                title and make up the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <Button variant="info" size="sm">
                  Read More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border={"info"} style={{ width: "18rem", marginTop: "30px" }}>
            <Card.Header className="text-center">Blog Title</Card.Header>
            <Card.Body>
              <Card.Text>
                Blog Description: Some quick example text to build on the card
                title and make up the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <Button variant="info" size="sm">
                  Read More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border={"info"} style={{ width: "18rem", marginTop: "30px" }}>
            <Card.Header className="text-center">Blog Title</Card.Header>
            <Card.Body>
              <Card.Text>
                Blog Description: Some quick example text to build on the card
                title and make up the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <Button variant="info" size="sm">
                  Read More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="bg-dark text-white mt-5">
        <Card.Img
          src={bg}
          alt="Card image"
          style={{ height: "50px", backgroundSize: "cover" }}
        />
        <Card.ImgOverlay style={{ textAlign: "center", top: "25%" }}>
          <Card.Text style={{ fontSize: "20px" }}>Footer</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
