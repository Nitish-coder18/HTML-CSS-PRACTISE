//core module
const express = require("express");

const hostRouter = express.Router();

const registeredHomes = [];


hostRouter.get("/add-home", (req, res, next) => {
 res.render("add-home", {pageTitle: 'Host Your Home'});
});

hostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push(req.body)
  console.log(registeredHomes);
  res.render("home-added", {pageTitle: 'added Home'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
