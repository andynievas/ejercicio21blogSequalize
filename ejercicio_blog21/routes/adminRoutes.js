const express = require("express");
const adminRouter = express.Router();

// Rutas del Admin:
// ...

adminRouter.get("/admin", (req, res)=>{
    res.render("admin");
});

module.exports = adminRouter;
