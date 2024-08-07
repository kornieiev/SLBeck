const { Key, Request } = require("../../models");

const getAllKeys = async (req, res, next) => {
  // const { _id: owner } = req.user;
  const { page = 1, limit = "" } = req.query; // важливо вказати значення за замовчуванням

  const request = {
    userId: req.user._id,
    userName: req.user.name,
    requestTime: new Date(),
  };

  const skip = (page - 1) * limit;

  await Request.create({ ...request });

  // if (req.user.role === "admin") {
  const result = await Key.find({}, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email"); // назва поля, яке потрібно поширити. Візьми поле "owner" знайди з якої колекції воно і пошир дані в цієї колекції замість поля "owner"
  // другим аргументом вказується список полей, які потрібно повернути
  res.status(200).json(result);
  return;
  // } else {
  //   const result = await Key.find({ owner }, "-createdAt -updatedAt", {
  //     skip,
  //     limit,
  //   }).populate("owner", "name email"); // назва поля, яке потрібно поширити. Візьми поле "owner" знайди з якої колекції воно і пошир дані в цієї колекції замість поля "owner"
  //   // другим аргументом вказується список полей, які потрібно повернути
  //   res.status(200).json(result);
  // }
};

module.exports = getAllKeys;

// ?page=5&limit=10
