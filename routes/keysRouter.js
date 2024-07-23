const express = require("express");
const {
  getAllKeys,
  createKey,
  getOneById,
  updateById,
  updateIsActiveById,
  deleteOneById,
  getKeysByMaker,
  updateDealerPriceByKeyId,
} = require("../controllers/keys");
const {
  createKeySchema,
  updateIsActiveSchema,
} = require("../schemas/keysSchemas");
const { validateBody, isValidId, authenticate } = require("../middlewares");

const keysRouter = express.Router();

// getAllKeys
keysRouter.get("/", authenticate, getAllKeys);

// getKeysByMaker
keysRouter.get("/:maker", authenticate, getKeysByMaker);

// getOneById
keysRouter.get("/:id", authenticate, isValidId, getOneById);

// createKey
keysRouter.post("/", authenticate, validateBody(createKeySchema), createKey);

// updateById
keysRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(createKeySchema),
  updateById
);

// updateDealerPriceByKeyId
keysRouter.put(
  "/dealer/:id",
  authenticate,
  isValidId,
  // validateBody(createKeySchema),
  updateDealerPriceByKeyId
);

// updateIsActiveById
keysRouter.patch(
  "/:id",
  authenticate,
  isValidId,
  // validateBody(updateIsActiveSchema),
  updateIsActiveById
);

// deleteOneById
keysRouter.delete("/:id", authenticate, isValidId, deleteOneById);

module.exports = keysRouter;
