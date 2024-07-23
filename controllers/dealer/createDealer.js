const { Dealer } = require("../../models");

const createDealer = async (req, res, next) => {
  const { _id: owner } = req.user;
  const data = req.body;

  const result = await Dealer.create({ ...req.body, owner });

  res.status(201).json({ result }, "-createdAt -updatedAt");
};

module.exports = createDealer;
