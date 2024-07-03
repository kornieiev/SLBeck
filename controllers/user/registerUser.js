const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET_SL } = process.env;

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const registerUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashedPassword });
  console.log("🚀 ~ registerUser ~ newUser:", newUser);

  const registeredUser = await User.findOne({ email });
  console.log("🚀 ~ registerUser ~ registeredUser:", registeredUser);

  const payload = { id: registeredUser._id };

  const token = jwt.sign(payload, JWT_SECRET_SL, { expiresIn: "23h" });

  res.status(201).json({
    token,
    name: newUser.name,
    email: newUser.email,
  });
};

module.exports = registerUser;
