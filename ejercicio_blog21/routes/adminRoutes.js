const express = require("express");
const adminRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const { adminAuthentication } = require("../middleware/authenticate");
const { isAdminAndEditorandWriter } = require("../middleware/isAdminAndEditor");
// Rutas del Admin:
adminRouter.use(adminAuthentication, isAdminAndEditorandWriter);
adminRouter.get("/", (req, res) => {
  //Ver como hago el middleware! asi funcióna
  pagesController.showAdmin(req, res);
});

adminRouter.get("/editar/:id", (req, res) => {
  pagesController.showEdit(req, res);
});

adminRouter.post("/editar/:id", (req, res) => {
  pagesController.edit(req, res);
});

adminRouter.get("/crear", (req, res) => pagesController.showCreate(req, res));

adminRouter.post("/crear", (req, res) => pagesController.create(req, res));

adminRouter.get("/eliminar/:id", adminAuthentication, isAdminAndEditorandWriter, (req, res) => {
  pagesController.destroy(req, res);
});

module.exports = adminRouter;
