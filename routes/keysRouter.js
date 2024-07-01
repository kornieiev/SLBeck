const express = require("express");
const {
  getAllKeys,
  createKey,
  getOneById,
  updateById,
  updateIsActiveById,
  deleteOneById,
} = require("../controllers/keys");
const {
  createKeySchema,
  updateIsActiveSchema,
} = require("../schemas/keysSchemas");
const { validateBody, isValidId, authenticate } = require("../middlewares");

const keysRouter = express.Router();

keysRouter.get("/", authenticate, getAllKeys);

keysRouter.get("/:id", authenticate, isValidId, getOneById);

keysRouter.post("/", authenticate, validateBody(createKeySchema), createKey);

keysRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(createKeySchema),
  updateById
);

keysRouter.patch(
  "/:id",
  authenticate,
  isValidId,
  validateBody(updateIsActiveSchema),
  updateIsActiveById
);

keysRouter.delete("/:id", authenticate, isValidId, deleteOneById);

module.exports = keysRouter;
