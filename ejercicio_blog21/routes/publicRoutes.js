const express = require("express");
const publicRouter = express.Router();

const pagesController = require("../controllers/pagesController");

// Rutas del Públicas:
// ...

publicRouter.get("/", (req, res)=>{

    pagesController.showHome(req, res);
});

publicRouter.get("/articulo/:id", (req, res)=>{
    console.log( "Se recibio el id", req.params.id );
    res.render("index");
});

module.exports = publicRouter;
