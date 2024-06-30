const Joi = require("joi");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const registrationSchema = Joi.object({
  name: Joi.string().required().min(3).max(12),
  email: Joi.string().required().pattern(emailRegex),
  password: Joi.string().required().min(3).max(12),
});

const loginSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegex),
  password: Joi.string().required(),
});

module.exports = { registrationSchema, loginSchema };
