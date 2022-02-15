const express = require("express");
const userRouter = express.Router();

const pagesController = require("../controllers/pagesController");
const userController = require("../controllers/userController");

//RUTAS :D

userRouter.get("/registro", "controlador");
userRouter.post("/registro", "controlador");
userRouter.get("/login", "controlador");
userRouter.post("/login", "controlador");
userRouter.get("/logout", "controlador");

module.exports = userRouter;
