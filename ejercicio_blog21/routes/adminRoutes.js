const express = require("express");
const adminRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");


// Es necesario estar logeado para ingresar
adminRouter.use(isAuth);

// Rutas del Admin:
adminRouter.get("/jwt", isAdmin, authController.show);

adminRouter.get("/jwt/create", isAdmin, authController.create);

adminRouter.get("/", pagesController.showAdmin );

adminRouter.get("/editar/:id", pagesController.showEdit );

adminRouter.post("/editar/:id", pagesController.edit );

adminRouter.get("/crear", pagesController.showCreate );

adminRouter.post("/crear", pagesController.create );

adminRouter.get("/eliminar/:id", pagesController.destroy );

adminRouter.get("/eliminar-usuario/:id", userController.destroy );

module.exports = adminRouter;
