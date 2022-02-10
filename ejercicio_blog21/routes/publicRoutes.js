const express = require("express");
const publicRouter = express.Router();

const userController = require("../controllers/userController");

// Rutas del Públicas:
// ...

publicRouter.get("/", (req, res)=>{

    userController.index();

    res.render("index", { articles });
});

publicRouter.get("/articulo/:id", (req, res)=>{
    console.log( "Se recibio el id", req.params.id );
    res.render("index");
});

module.exports = publicRouter;
