const express = require("express");
const publicRouter = express.Router();

// Rutas del Públicas:
// ...

publicRouter.get("/", (req, res)=>{
    res.render("index");
});

publicRouter.get("/articulo/:id", (req, res)=>{
    console.log( "Se recibio el id", req.params.id );
    res.render("index");
});

module.exports = publicRouter;
