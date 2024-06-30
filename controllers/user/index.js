const { HttpError, controllerWrapper } = require("../../helpers");
const registerUser = require("./registerUser");
const loginUser = require("./loginUser");

module.exports = {
  registerUser: controllerWrapper(registerUser),
  loginUser: controllerWrapper(loginUser),
};
