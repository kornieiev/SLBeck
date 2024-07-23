const { HttpError, controllerWrapper } = require("../../helpers");

const getAllDealers = require("./getAllDealers");
const createDealer = require("./createDealer");

module.exports = {
  getAllDealers: controllerWrapper(getAllDealers),
  createDealer: controllerWrapper(createDealer),
};
