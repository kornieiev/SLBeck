const { ObjectId } = require("mongodb");

const { HttpError } = require("../../helpers");
const { Key } = require("../../models");

const updateIsActiveById = async (req, res, next) => {
  const { id } = req.params;
  console.log("🚀 ~ updateIsActiveById ~ id:", id);
  const data = req.body;
  console.log("req.body ~ data:", data);

  // // Преобразуем строку в ObjectId
  const objectId = new ObjectId(id);
  console.log("objectId:", objectId);

  const result = await Key.findByIdAndUpdate({ _id: objectId }, data, {
    new: true,
  });
  console.log("🚀result:", result);

  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = updateIsActiveById;
