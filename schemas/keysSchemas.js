const Joi = require("joi");

const createKeySchema = Joi.object({
  Maker: Joi.string().required(),
  Model: Joi.string().required(),
  Year: Joi.string().required(),
  "Type of Ignition": Joi.string().required(),
  "Type of Key": Joi.string(),
  "No Buttons": Joi.number(),
  "Price All Keys Lost": Joi.string().allow(null, "").optional(),
  "Price Add a Key": Joi.string().allow(null, "").optional(),
  "Price Program Only": Joi.string().allow(null, "").optional(),
  "Dealer Price": Joi.string().allow(null, "").optional(),
  "Dealer Program": Joi.string().allow(null, "").optional(),
  "Dealer Emergency Blade": Joi.string().allow(null, "").optional(),
  "Dealer Price Total": Joi.string().allow(null, "").optional(),
  "Dealer Location": Joi.string().allow(null, "").optional(),
  "Secure Locks Parts": Joi.string().allow(null, "").optional(),
  "Part #": Joi.string().allow(null, "").optional(),
  Link: Joi.string().allow(null, "").optional(),
  Comments: Joi.string().allow(null, "").optional(),
  isActive: Joi.bool().allow(null, "").optional(),
  // _id: Joi.string(),
  // YearStart: Joi.number(),
  // YearEnd: Joi.number(),
});

const updateIsActiveSchema = Joi.object({
  isActive: Joi.boolean(),
});

module.exports = { createKeySchema, updateIsActiveSchema };
