const express = require("express");
const writerRouter = express.Router();

const writerController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const { adminAuthentication } = require("../middleware/authenticate");
const iswriter = require("../middleware/iswriter");
// Rutas del Admin:
writerRouter.use(iswriter);
writerRouter.use(adminAuthentication);
writerRouter.get("/", (req, res) => {
  //Ver como hago el middleware! asi funcióna
  writerController.showAdmin(req, res);
});
/* 
writerRouter.get("/editar/:id", (req, res) => {
  writerController.showEdit(req, res);
}); */

writerRouter.post("/editar/:id", (req, res) => {
  writerController.edit(req, res);
});

writerRouter.get("/crear", (req, res) => writerController.showCreate(req, res));

writerRouter.post("/crear", (req, res) => writerController.create(req, res));

writerRouter.get("/eliminar/:id", adminAuthentication, iswriter, (req, res) => {
  writerController.destroy(req, res);
});

module.exports = writerRouter;
