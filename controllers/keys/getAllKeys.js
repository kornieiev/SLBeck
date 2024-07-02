const { Key } = require("../../models");

const getAllKeys = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query; // важливо вказати значення за замовчуванням

  const skip = (page - 1) * limit;

  const result = await Key.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email"); // назва поля, яке потрібно поширити. Візьми поле "owner" знайди з якої колекції воно і пошир дані в цієї колекції замість поля "owner"
  // другим аргументом вказується список полей, які потрібно повернути
  res.status(200).json(result);
};

module.exports = getAllKeys;

// ?page=5&limit=10
