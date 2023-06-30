require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

require("./db/conn");

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/user", userRouter);

app.listen(process.env.PORT);
