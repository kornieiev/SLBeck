const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET_SL } = process.env;

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const loginUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email, or Password invalid!");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email, or Password invalid!");
  }

  const payload = { id: user._id };

  const token = jwt.sign(payload, JWT_SECRET_SL, { expiresIn: "23h" });

  await User.findByIdAndUpdate(user._id, { token }, { new: true });
  // await User.findByIdAndUpdate({
  //   token,
  // });

  res.status(202).json({
    token,
    user: { name, email },
  });
};

module.exports = loginUser;
