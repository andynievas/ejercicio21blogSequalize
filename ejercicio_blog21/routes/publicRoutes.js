const express = require("express");
const publicRouter = express.Router();

// Rutas del Públicas:
// ...

publicRouter.get("/", (req, res)=>{
    res.render("index");
});

module.exports = publicRouter;
