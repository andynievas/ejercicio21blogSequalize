const express = require("express");
const adminRouter = express.Router();
const pagesController = require("../controllers/pagesController");
// Rutas del Admin:
// ...

adminRouter.get("/", (req, res) => {
  res.render("admin");
});

adminRouter.get("/crear", (req, res) => {
  res.render("create");
});

adminRouter.post("/crear", (req, res) => {
  pagesController.create(req, res);
});

adminRouter.get("/editar/:id", (req, res) => {
  res.render("editar");
});

adminRouter.post("/editar/:id", (req, res) => {
  pagesController.editar(req, res);
});

module.exports = adminRouter;
