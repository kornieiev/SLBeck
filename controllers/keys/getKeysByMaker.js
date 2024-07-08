const { Key } = require("../../models");

const getKeysByMaker = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { maker } = req.params;
  console.log("🚀 ~ getKeysByMaker ~ maker:", maker);
  const [makerr, model] = maker.split("-");

  const { page = 1, limit = "" } = req.query; // важливо вказати значення за замовчуванням

  const skip = (page - 1) * limit;

  if (req.user.role === "admin") {
    const result = await Key.find(
      { Maker: makerr, Model: model },
      "-createdAt -updatedAt",
      {
        skip,
        limit,
      }
    ).populate("owner", "name email"); // назва поля, яке потрібно поширити. Візьми поле "owner" знайди з якої колекції воно і пошир дані в цієї колекції замість поля "owner"
    // другим аргументом вказується список полей, які потрібно повернути
    res.status(200).json(result);
    return;
  } else {
    const result = await Key.find({ owner }, "-createdAt -updatedAt", {
      skip,
      limit,
    }).populate("owner", "name email"); // назва поля, яке потрібно поширити. Візьми поле "owner" знайди з якої колекції воно і пошир дані в цієї колекції замість поля "owner"
    // другим аргументом вказується список полей, які потрібно повернути
    res.status(200).json(result);
  }
};

module.exports = getKeysByMaker;

// ?page=5&limit=10
