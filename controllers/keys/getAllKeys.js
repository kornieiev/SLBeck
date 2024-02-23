const { Key } = require("../../models");

const getAllKeys = async (req, res, next) => {
  const result = await Key.find({}, "-createdAt -updatedAt");
  res.status(200).json(result);
};

module.exports = getAllKeys;
