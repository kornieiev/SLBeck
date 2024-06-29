const { HttpError } = require("../../helpers");
const { Key } = require("../../models");

const deleteOneById = async (req, res, next) => {
  const { id } = req.params;
  // const result = await Key.findByIdAndRemove(id); // DEPRECATED!
  const result = await Key.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "Delete success" });
};

module.exports = deleteOneById;
