//core module
const path = require('path');

const express = require("express");

const rootDir = require('../util/pathutil')

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "Views", "index.html"));
});


module.exports = storeRouter;
