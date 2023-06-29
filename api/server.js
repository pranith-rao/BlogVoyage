const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("./db/conn");
const port = process.env.PORT || 3001;

const app = express();
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors());

const User = require("./db/models/user");

app.post("/register", async (req, res) => {
  const data = req.body;

  try {
    if (data.password1 === data.password2) {
      const nameExists = await User.isThisUsernameInUse(data.username);
      if (!nameExists) {
        const emailExists = await User.isThisEmailInUse(data.email);
        if (!emailExists) {
          const registerUser = new User({
            username: data.username,
            email: data.email,
            password: data.password1,
          });
          const registered = await registerUser.save();
          res
            .status(200)
            .json({ message: "Registration Successfull", status: 200 });
        } else {
          res.status(400).json({ message: "Email already taken", status: 400 });
        }
      } else {
        res
          .status(400)
          .json({ message: "Username already taken", status: 400 });
      }
    } else {
      res.status(400).json({ message: "Passwords don't match", status: 400 });
    }
  } catch (error) {
    res.status(400).json({ message: error.message, status: 400 });
  }
});

app.post("/login", async (req, res) => {
  const data = req.body;
  try {
    const userData = await User.findOne({ username: data.username });
    if (userData) {
      const passOk = await bcrypt.compareSync(data.password, userData.password);
      if (passOk) {
        res.status(200).json({ message: "Login Successfull", status: 200 });
      } else {
        res.status(400).json({ message: "Invalid Credentials", status: 400 });
      }
    } else {
      res.status(400).json({ message: "Username not registered", status: 400 });
    }
  } catch (error) {
    res.status(400).json({ message: error.message, status: 400 });
  }
});

app.listen(port);
