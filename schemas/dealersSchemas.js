const Joi = require("joi");

const createDealerSchema = Joi.object({
  dealerName: Joi.string().required(),
});

module.exports = { createDealerSchema };
