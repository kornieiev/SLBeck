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
const { validateBody, isValidId } = require("../middlewares");

const keysRouter = express.Router();

keysRouter.get("/", getAllKeys);

keysRouter.get("/:id", isValidId, getOneById);

keysRouter.post("/", validateBody(createKeySchema), createKey);

keysRouter.put("/:id", isValidId, validateBody(createKeySchema), updateById);

keysRouter.patch(
  "/:id",
  isValidId,
  validateBody(updateIsActiveSchema),
  updateIsActiveById
);

keysRouter.delete("/:id", isValidId, deleteOneById);

module.exports = keysRouter;
