const express = require("express");
const { validateBody } = require("../middlewares");
const { registrationSchema, loginSchema } = require("../schemas/userSchemas");
const { registerUser, loginUser } = require("../controllers/user");

const authRouter = express.Router();

authRouter.post("/register", validateBody(registrationSchema), registerUser);
authRouter.post("/login", validateBody(loginSchema), loginUser);

module.exports = authRouter;
