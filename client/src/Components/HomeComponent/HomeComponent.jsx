import React from "react";
import Carousel from "react-bootstrap/Carousel";
import c1 from "../../assets/c1.avif";
import c2 from "../../assets/c2.avif";
import c3 from "../../assets/c3.avif";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import "./HomeComponent.css";

export default function HomeComponent() {
  return (
    <>
      <NavbarComponent />
      <Carousel className="carousel">
        <Carousel.Item style={{ height: "550px" }}>
          <img className="d-block w-100" src={c1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "550px" }}>
          <img className="d-block w-100" src={c2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "550px" }}>
          <img className="d-block w-100" src={c3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
