const express = require("express");
const publicRouter = express.Router();
const passport = require("passport");
const userController = require("../controllers/userController");
const { isLoged, preventShowAuthAgain } = require("../middleware/authenticate");

const pagesController = require("../controllers/pagesController");
const commentsController = require("../controllers/commentsController");

// Rutas del Públicas:

publicRouter.get("/", (req, res) => {
  pagesController.showHome(req, res);
});

publicRouter.get("/articulo/:id", (req, res) => {
  pagesController.showArticle(req, res);
});

publicRouter.post("/articulo/comment/:id", isLoged , (req, res) => {
  commentsController.create(req, res);
});


publicRouter.get("/registro", preventShowAuthAgain, userController.show);
publicRouter.post("/registro", userController.create);
publicRouter.get("/logout", userController.logout);

publicRouter.get("/login", preventShowAuthAgain, (req, res) => {
  res.render("login", { currentUser: res.locals.user || null, });
});

publicRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);

module.exports = publicRouter;
