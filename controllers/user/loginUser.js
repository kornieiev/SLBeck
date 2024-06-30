const bcrypt = require("bcrypt");

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

// Функция для сравнения пароля
async function comparePassword(plainPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.findOne({ email });

  if (!comparePassword(password, user.password)) {
    console.log("Password uncorrect!");
    throw HttpError(401);
  }

  res.status(202).json({ ...user });
};

module.exports = loginUser;
