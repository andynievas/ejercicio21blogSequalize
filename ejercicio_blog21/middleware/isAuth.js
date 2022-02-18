
// Si no esta logeado no lo deja continuar
function isAuth(req, res, next) {
  if ( req.isAuthenticated() ) {
    return next();
  } else {
    res.redirect("/login");
  }
}

module.exports = isAuth;
