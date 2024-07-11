const { ObjectId } = require("mongodb"); // Не забудьте добавить это

const { HttpError } = require("../../helpers");
const { Key } = require("../../models");

const updateById = async (req, res, next) => {
  const { id } = req.params;
  console.log("updateById-req.params ~ id:", id);
  const data = req.body;
  console.log("updateById-req.body ~ data:", data);

  // // Преобразуем строку в ObjectId
  // const objectId = new ObjectId(id);
  // console.log("objectId:", objectId);

  const result = await Key.findByIdAndUpdate(objectId, data, { new: true });
  console.log("result:", result);

  if (!result) {
    ``;
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = updateById;
