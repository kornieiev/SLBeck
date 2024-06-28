const Joi = require("joi");

const createKeySchema = Joi.object({
  Year: Joi.string().required(),
  Maker: Joi.string().required(),
  Model: Joi.string().required(),
  "Type of Ignition": Joi.string().required(),
  "Type of Key": Joi.string(),
  "No Buttons": Joi.string(),
  "Price All Keys Lost": Joi.string(),
  "Price Add a Key": Joi.string(),
  "Price Program Only": Joi.string(),
  "Dealer Price": Joi.string(),
  "Dealer Program": Joi.string(),
  "Dealer Emergency Blade": Joi.string(),
  "Dealer Price Total": Joi.string(),
  "Dealer Location": Joi.string(),
  "Secure Locks Parts": Joi.string(),
  "Part #": Joi.string(),
  Link: Joi.string(),
  Comments: Joi.string(),
});

module.exports = { createKeySchema };
