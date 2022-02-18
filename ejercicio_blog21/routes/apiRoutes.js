const express = require("express");
const apiRoutes = express.Router();
const apiController = require("../controllers/apiController");

const passport = require("passport");
const userController = require("../controllers/userController");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");


// Rutas de la api

// Show articles
apiRoutes.get("/articles", apiController.show );

// Show article
apiRoutes.get("/article/:article_id", apiController.showOne );

// Show articles by author
apiRoutes.get("/articles/:author_id", apiController.showByAuthor );

// Show articles if contains letters in title
apiRoutes.get("/articles/contains/:letters", apiController.showIfContainsLetters );

// Create article
apiRoutes.post("/articles/create", isAuth, isAdmin, apiController.create );

// Edit article
apiRoutes.patch("/articles/:autor_id", apiController.show );

// Destroy article
apiRoutes.delete("/articles/:autor_id", apiController.show );


module.exports = apiRoutes;
