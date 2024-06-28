const express = require("express");
const { getAllKeys, createKey } = require("../controllers/keys");
const { createKeySchema } = require("../schemas/keysSchemas");
const { validateBody } = require("../helpers");

//

const keysRouter = express.Router();

keysRouter.get("/", getAllKeys);

keysRouter.post("/", validateBody(createKeySchema), createKey);

module.exports = keysRouter;
