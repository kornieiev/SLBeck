const { Key } = require("../../models");

const createKey = async (req, res, next) => {
  const { _id: owner } = req.user;

  const result = await Key.create({ ...req.body, owner });

  res.status(201).json({ result });
};

module.exports = createKey;
