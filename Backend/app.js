const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/user", userRouter);
app.use("/blog", blogRouter);

module.exports = app;
