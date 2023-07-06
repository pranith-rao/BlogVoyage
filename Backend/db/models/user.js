const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.isThisUsernameInUse = async function (username) {
  if (!username) {
    throw new Error("Please enter a username");
  }
  try {
    const usernameExists = await this.findOne({ username: username });
    if (usernameExists) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
};

userSchema.statics.isThisEmailInUse = async function (email) {
  if (!email) {
    throw new Error("Please enter a email ID");
  }
  try {
    const emailExists = await this.findOne({ email: email });
    if (emailExists) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
