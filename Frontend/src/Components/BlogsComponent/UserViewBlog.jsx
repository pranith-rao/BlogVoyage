import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function UserViewBlog() {
  const cookies = new Cookies();
  const { id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [navigate, setNavigate] = useState(false);

  const handleDelete = async () => {
    try {
      const delResponse = await axios.delete(
        `http://localhost:3001/user/delBlog/${id}`,
        {
          headers: { authorization: `${cookies.get("token")}` },
        }
      );
      if (delResponse) {
        alert(delResponse.data.message);
        setNavigate(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getBlogData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/blog/getBlog/${id}`
      );
      setBlogData(response.data.blogData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

/*   useEffect(() => {
    console.log("blogData useEffect ", blogData);
    console.log("addedBy.username useEffect  ", blogData?.addedBy?.username);
  }, [blogData]); */

  if (navigate) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <>
      <NavbarComponent />
      <Container style={{ marginTop: "30px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ textTransform: "uppercase" }}>{blogData.title}</h1>
          <p>Added By: {blogData?.addedBy?.username}</p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <Button variant="dark" href={`/editBlog/${id}`}>
              Edit
            </Button>
            <Button variant="dark" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
        <div style={{ marginTop: "20px", textAlign: "justify" }}>
          <div dangerouslySetInnerHTML={{ __html: blogData.blog }} />
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Button href="/" variant="dark">
            Back
          </Button>
        </div>
      </Container>
    </>
  );
}
