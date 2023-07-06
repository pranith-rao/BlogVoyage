const express = require("express");
const blogController = require("../controller/blogController");

const blogRouter = express.Router();

blogRouter.get("/getAllBlogs", blogController.getAllBlogs);
blogRouter.get("/getTopBlogs", blogController.getTopBlogs);
blogRouter.get("/getBlog/:id", blogController.getBlog);

module.exports = blogRouter;
