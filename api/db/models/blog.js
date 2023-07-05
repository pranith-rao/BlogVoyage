const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
    required: true,
  },
  addedBy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
