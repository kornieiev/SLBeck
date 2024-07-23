const { Dealer } = require("../../models");

const getAllDealers = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = "" } = req.query; // важливо вказати значення за замовчуванням

  const skip = (page - 1) * limit;
  const result = await Dealer.find({}, "-createdAt -updatedAt", {
    skip,
    limit,
  });
  // другим аргументом вказується список полей, які потрібно повернути
  res.status(200).json(result);
  return;
};

module.exports = getAllDealers;

// ?page=5&limit=10
