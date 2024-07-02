const { User } = require("../../models");

const logoutUser = async (req, res, next) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: "" }, { new: true });

  res.status(200).json({
    message: "Logout success",
  });
};

module.exports = logoutUser;
