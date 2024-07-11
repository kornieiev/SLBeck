const { ObjectId } = require("mongodb");

const { HttpError } = require("../../helpers");
const { Key } = require("../../models");

const updateIsActiveById = async (req, res, next) => {
  const { id } = req.params;
  console.log("req.params ~ id:", id);

  const data = req.body;
  console.log("req.body ~ data:", data);

  // Преобразуем строку в ObjectId
  const objectId = new ObjectId(id);

  const result = await Key.findByIdAndUpdate(objectId, data, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = updateIsActiveById;
