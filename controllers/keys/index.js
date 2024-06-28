const { HttpError, ctrlWrapper } = require("../../helpers");

const getAllKeys = require("./getAllKeys");
const createKey = require("./createKey");

module.exports = {
  getAllKeys,
  createKey,
};
