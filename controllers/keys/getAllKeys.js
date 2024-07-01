const { Key } = require("../../models");

const getAllKeys = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Key.find({ owner }, "-createdAt -updatedAt");
  res.status(200).json(result);
};

module.exports = getAllKeys;
