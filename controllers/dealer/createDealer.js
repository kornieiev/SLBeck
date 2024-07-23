const { Dealer } = require("../../models");

const createDealer = async (req, res, next) => {
  const { _id: owner } = req.user;
  const data = req.body;
  console.log("data", data);

  const result = await Dealer.create({ ...req.body, owner });

  res.status(201).json({ result });
};

module.exports = createDealer;
