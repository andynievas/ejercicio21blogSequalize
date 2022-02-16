const express = require("express");
const publicRouter = express.Router();
const passport = require("passport");
const { show, create, logout } = require("../controllers/userController");
const { isLoged } = require("../middleware/authenticate");

const pagesController = require("../controllers/pagesController");
const commentsController = require("../controllers/commentsController");

// Rutas del Públicas:

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
publicRouter.get("/registro", show);
publicRouter.post("/registro", create);
publicRouter.get("/logout", logout);
publicRouter.get("/login", isLoged, (req, res) => {
  res.render("login");
});

publicRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
  }),
);

module.exports = publicRouter;
