const express = require("express");
const { validateBody, authenticate } = require("../middlewares");
const { registrationSchema, loginSchema } = require("../schemas/userSchemas");
const {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
} = require("../controllers/user");

const authRouter = express.Router();

authRouter.post("/register", validateBody(registrationSchema), registerUser);
authRouter.post("/login", validateBody(loginSchema), loginUser);
authRouter.get("/current", authenticate, currentUser);
authRouter.post("/logout", authenticate, logoutUser);

module.exports = authRouter;
