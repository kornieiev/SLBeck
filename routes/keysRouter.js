const express = require("express");
const { getAllKeys, createKey } = require("../controllers/keys");
const {
  createKeySchema,
  updateIsActiveSchema,
} = require("../schemas/keysSchemas");
const { validateBody, isValidId } = require("../middlewares");
const getOneById = require("../controllers/keys/getOneById");
const updateById = require("../controllers/keys/updateById");
const updateIsActiveById = require("../controllers/keys/updateIsActiveById");
const deleteOneById = require("../controllers/keys/deleteOneById");

//

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
