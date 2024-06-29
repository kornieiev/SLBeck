const { HttpError } = require("../../helpers");
const { Key } = require("../../models");

const getOneById = async (req, res, next) => {
  const { id } = req.params;
  // const result = await Key.findOne({ _id: id });
  const result = await Key.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = getOneById;
