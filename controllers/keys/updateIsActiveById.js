const { ObjectId } = require("mongodb");

const { HttpError } = require("../../helpers");
const { Key } = require("../../models");

const updateIsActiveById = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  // // Преобразуем строку в ObjectId
  const objectId = new ObjectId(id);

  const result = await Key.findByIdAndUpdate({ _id: objectId }, data, {
    new: true,
  });

  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = updateIsActiveById;
