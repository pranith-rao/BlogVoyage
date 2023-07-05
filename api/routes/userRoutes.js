const express = require("express");
const auth = require("../middleware/auth");
const userController = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/register", userController.userRegister);
userRouter.post("/login", userController.userLogin);
userRouter.get("/getUserData", auth, userController.getUserData);
userRouter.put("/update_profile", auth, userController.userProfileUpdate);
userRouter.get("/navbar", auth, userController.getNavbar);
userRouter.post("/addBlog", auth, userController.addBlog);
userRouter.put("/editBlog/:id", auth, userController.editBlog);

module.exports = userRouter;
