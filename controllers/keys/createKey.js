const { Key } = require("../../models");

const createKey = async (req, res, next) => {
  const result = await Key.create({ ...req.body });
  res.status(200).json(result);
};

module.exports = createKey;
