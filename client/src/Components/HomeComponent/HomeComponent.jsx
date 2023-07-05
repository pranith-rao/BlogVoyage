import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import "./HomeComponent.css";
import Card from "react-bootstrap/Card";
import bg from "../../assets/bg.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomeComponent() {
  const [blogData, setBlogData] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getTopBlogs");
      setBlogData(response.data.blog);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

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
      {blogData.length == 0 ? (
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "40px",
            textTransform: "uppercase",
          }}
        >
          No Blogs Added
        </p>
      ) : (
        <Row>
          {blogData.map((blog) => {
            return (
              <Col key={blog._id} sm={4}>
                <Card border={"dark"} style={{ margin: "25px" }}>
                  <Card.Header
                    className="text-center"
                    style={{ textTransform: "uppercase" }}
                  >
                    {blog.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{blog.summary}</Card.Text>
                    <div className="text-center">
                      <Button
                        variant="dark"
                        size="sm"
                        href={`/viewBlog/${blog._id}`}
                      >
                        Read More
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
      <div style={{ textAlign: "center",marginTop:"20px" }}>
        <Button href="/blogs" variant="dark">VIEW ALL BLOGS</Button>
      </div>
      <Card className="bg-dark text-white mt-5">
        <Card.Img
          src={bg}
          alt="Card image"
          style={{ height: "60px", backgroundSize: "cover" }}
        />
        <Card.ImgOverlay style={{ textAlign: "center", top: "25%" }}>
          <Card.Text style={{ fontSize: "20px" }}>Footer</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
