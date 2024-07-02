const { controllerWrapper } = require("../../helpers");
const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const currentUser = require("./currentUser");
const logoutUser = require("./logoutUser");

module.exports = {
  registerUser: controllerWrapper(registerUser),
  loginUser: controllerWrapper(loginUser),
  currentUser: controllerWrapper(currentUser),
  logoutUser: controllerWrapper(logoutUser),
};
