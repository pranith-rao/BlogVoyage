const express = require("express");
const auth = require("../middleware/auth");
const userController = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/register", userController.userRegister);
userRouter.post("/login", userController.userLogin);
userRouter.get("/profile", auth, userController.userProfile);
userRouter.put("/update_profile", auth, userController.userProfileUpdate);

module.exports = userRouter;
