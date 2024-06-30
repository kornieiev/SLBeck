const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      match: emailRegex,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// для відловлення помилки, якщо передано не вірний запис у модель
// https://youtu.be/ptECPvMUfkk?t=2513
userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
