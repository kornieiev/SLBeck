const { HttpError } = require("../../helpers");
const { Key } = require("../../models");

const updateById = async (req, res, next) => {
  const { id } = req.params;
  console.log("req.params ~ id:", id);
  const data = req.body;
  console.log("req.body ~ data:", data);

  const result = await Key.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    ``;
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = updateById;
