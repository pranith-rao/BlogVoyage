const blogs = require("../db/models/blog");

class blogController {
  async getAllBlogs(req, res) {
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
  }

  async getTopBlogs(req, res) {
    try {
      const blogData = await blogs.find().limit(6);
      if (blogData.length > 0) {
        res.status(200).json({ blog: blogData, status: 200 });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  }

  async getBlog(req, res) {
    try {
      const blogData = await blogs
        .findOne({ _id: req.params.id })
        .populate("addedBy");
      res.status(200).json({ blogData, status: 200 });
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  }
}

module.exports = new blogController();
