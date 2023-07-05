require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

require("./db/conn");
const blogs = require("./db/models/blog");

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/user", userRouter);

app.get("/getAllBlogs", async (req, res) => {
  try {
    const blogData = await blogs.find();
    if (blogData.length > 0) {
      res.status(200).json({ blog: blogData, status: 200 });
    } else {
      res.status(404).json({ message: "No Blogs Found", status: 404 });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

app.get("/getTopBlogs", async (req, res) => {
  try {
    const blogData = await blogs.find().limit(6);
    if (blogData.length > 0) {
      res.status(200).json({ blog: blogData, status: 200 });
    } else {
      res.status(404).json({ message: "No Blogs Found", status: 404 });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

app.get("/getBlog/:id", async (req, res) => {
  try {
    const blogData = await blogs.findOne({ _id: req.params.id });
    res.status(200).json({ blog: blogData, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

app.delete("/delBlog/:id", async (req, res) => {
  try {
    const response = await blogs.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Deleted Successfully", status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

app.listen(process.env.PORT);
