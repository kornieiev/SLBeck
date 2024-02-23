const Joi = require("joi");

const createKeySchema = Joi.object({
  year: Joi.string().required(),
  maker: Joi.string().required(),
  model: Joi.string().required(),
  typeOfIgnition: Joi.string().required(),
  typeOfKey: Joi.string(),
  noButtons: Joi.string(),
  priceAllKeyLost: Joi.string(),
  priceAddKey: Joi.string(),
  priceProgramOnly: Joi.string(),
  dealerPrice: Joi.string(),
  dealerProgram: Joi.string(),
  dealerEmergencyBlade: Joi.string(),
  dealerPriceTotal: Joi.string(),
  dealerLocation: Joi.string(),
  dealerLocksParts: Joi.string(),
  partNum: Joi.string(),
  link: Joi.string(),
  comments: Joi.string(),
});

module.exports = { createKeySchema };
