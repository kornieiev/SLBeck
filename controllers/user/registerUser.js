const bcrypt = require("bcrypt");

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

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
  });
};

module.exports = registerUser;
