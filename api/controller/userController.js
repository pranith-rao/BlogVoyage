const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../db/models/user");
const Blog = require("../db/models/blog");

class userController {
  async userRegister(req, res) {
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
            res
              .status(400)
              .json({ message: "Email already taken", status: 400 });
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
  }

  async userLogin(req, res) {
    const data = req.body;
    try {
      const userData = await User.findOne({ username: data.username });
      if (userData) {
        const passOk = await bcrypt.compareSync(
          data.password,
          userData.password
        );
        if (passOk) {
          jwt.sign(
            {
              username: userData.username,
              id: userData._id,
              email: userData.email,
            },
            process.env.SECRET,
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                message: "Login Successfull",
                status: 200,
                token: token,
              });
            }
          );
        } else {
          res.status(400).json({ message: "Invalid Credentials", status: 400 });
        }
      } else {
        res
          .status(400)
          .json({ message: "Username not registered", status: 400 });
      }
    } catch (error) {
      res.status(400).json({ message: error.message, status: 400 });
    }
  }

  async userProfile(req, res) {
    try {
      const userData = await User.findOne({ _id: req.userInfo.id });
      res.status(200).json({ userData });
    } catch (error) {
      res.status(400).json({ message: error.message, status: 400 });
    }
  }

  async userProfileUpdate(req, res) {
    try {
      const userData = await User.findOne({ _id: req.userInfo.id });
      const updatedData = await User.updateOne(
        { _id: userData._id },
        { username: req.body.username, email: req.body.email },
        { new: true }
      );
      res.status(200).json({ message: "Update Successfull", status: 200 });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Credentials already taken", status: 400 });
    }
  }

  async getNavbar(req, res) {
    try {
      const userData = await User.findOne({ _id: req.userInfo.id });
      res.status(200).json({ userData });
    } catch (error) {
      res.status(400).json({ message: error.message, status: 400 });
    }
  }

  async addBlog(req, res) {
    try {
      const data = req.body;
      const addBlog = new Blog({
        title: data.title,
        summary: data.summary,
        blog: data.blog,
      });
      const added = await addBlog.save();
      res.status(200).json({ message: "Blog Added Successfull", status: 200 });
    } catch (error) {
      res.status(400).json({ message: error.message, status: 400 });
    }
  }
}

module.exports = new userController();
