const { HttpError, controllerWrapper } = require("../../helpers");

const getAllKeys = require("./getAllKeys");
const createKey = require("./createKey");
const getOneById = require("./getOneById");
const updateById = require("./updateById");
const updateIsActiveById = require("./updateIsActiveById");
const updateKey = require("./updateKey");
const deleteOneById = require("./deleteOneById");
const getKeysByMaker = require("./getKeysByMaker");

module.exports = {
  getAllKeys: controllerWrapper(getAllKeys),
  createKey: controllerWrapper(createKey),
  getOneById: controllerWrapper(getOneById),
  updateById: controllerWrapper(updateById),
  updateIsActiveById: controllerWrapper(updateIsActiveById),
  updateKey: controllerWrapper(updateKey),
  deleteOneById: controllerWrapper(deleteOneById),
  getKeysByMaker: controllerWrapper(getKeysByMaker),
};
