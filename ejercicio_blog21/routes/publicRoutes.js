const express = require("express");
const publicRouter = express.Router();

const pagesController = require("../controllers/pagesController");
const commentsController = require("../controllers/pagesController");

// Rutas del Públicas:
// ...

publicRouter.get("/", (req, res) => {
  pagesController.showHome(req, res);
});

publicRouter.get("/articulo/:id", (req, res) => {
  pagesController.showArticle(req, res);
});

publicRouter.post("/articulo/comment/:id", (req, res) => {
  commentsController.create(req, res);
});

publicRouter.get("/api/articulos", (req, res) => {
  pagesController.showArticlesJson(req, res);
});

module.exports = publicRouter;
