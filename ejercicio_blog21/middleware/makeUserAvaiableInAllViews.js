const req = require("express/lib/request");

/* deja disponible el req.user en las vistas */

function makeUserAvaiableInAllViews(req, res, next) {
  res.locals.user = req.user;
  next();
}

module.exports = { makeUserAvaiableInAllViews };
