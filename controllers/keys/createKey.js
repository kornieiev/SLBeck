const { Key } = require("../../models");

const createKey = async (req, res, next) => {
  // const { _id: owner } = req.user;

  console.log("createKey ...req.body:", ...req.body);

  // const result = await Key.create({ ...req.body, owner });
  const result = await Key.create({ ...req.body });
  console.log("🚀 ~ createKey ~ result:", result);

  res.status(201).json({ result });
};

module.exports = createKey;
