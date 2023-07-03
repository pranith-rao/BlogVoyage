const User = require("../db/models/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      res.status(401).json({ message: "No token provided" });
    }

    const info = await jwt.verify(token, process.env.SECRET);
    req.userInfo = info;

    const userData = User.findOne({ _id: info._id });
    if (!userData) {
      res.status(404).json({ message: "User Doesnt exist" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = auth;
