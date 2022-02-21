const express = require("express");
const apiRouter = express.Router();
const apiController = require("../controllers/apiController");
const pagesController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const { getToken } = require("../controllers/apiController");
const { adminAuthentication } = require("../middleware/authenticate");
const { isAdminAndEditorandWriter } = require("../middleware/isAdminAndEditor");
const checkJwt = require("express-jwt");
// Rutas del Admin:
/* apiRouter.use(adminAuthentication, isAdminAndEditorandWriter); */

// Token routes
apiRouter.post("/api/token", getToken);
apiRouter.use(checkJwt({ secret: process.env.secretKey, algorithms: ["HS256"] }));
// Articles routes
//muestra todos los articulos
/* apiRouter.get("/API", (req, res) => {
  //Ver como hago el middleware! asi funcióna
  apiController.showArticlesJson(req, res);
});

apiRouter.get("/API/articles/:id", (req, res) => {
  apiController.showEdit(req, res);
});
// Muestra los articulos por Autor
apiRouter.get("/API/articles/:id" , (req, res) => {
  apiController.showArticlesByUser(req, res);
}); */
// Muestra los articulos por busqueda de palabras en el titulo
apiRouter.get("/API/articles" /* /:id */, (req, res) => {
  apiController.showArticles(req, res);
});

apiRouter.patch("/API/articles/id", (req, res) => {
  apiController.edit(req, res);
});

apiRouter.post("/API/articles/id", (req, res) => apiController.create(req, res));

apiRouter.delete("/API/articles/id", (req, res) => {
  apiController.destroy(req, res);
});

apiRouter.get("/API/articles", (req, res) => {
  apiController.showEdit(req, res);
});

apiRouter.get("API/user");
apiRouter.get("API/user/id");
apiRouter.post("API/user/id");
apiRouter.patch("API/user/id");
apiRouter.delete("API/user/id");

/* apiRouter.get("/registro", isLoged, show);
apiRouter.post("/registro", create);
apiRouter.get("/logout", logout);

apiRouter.get("/login", isLoged, (req, res) => {
  res.render("login");
 */

/* apiRouter.delete("/eliminar/:id", adminAuthentication, isAdminAndEditorandWriter, (req, res) => {
  apiController.destroy(req, res);
}); */

module.exports = apiRouter;
