const express = require("express");
const { getAllDealers, createDealer } = require("../controllers/dealer");
const { validateBody, isValidId, authenticate } = require("../middlewares");
const { createDealerSchema } = require("../schemas/dealersSchemas");

const keysRouter = express.Router();

// getAllDealers
keysRouter.get("/", authenticate, getAllDealers);

// createDealer
keysRouter.post(
  "/",
  authenticate,
  validateBody(createDealerSchema),
  createDealer
);

module.exports = keysRouter;
