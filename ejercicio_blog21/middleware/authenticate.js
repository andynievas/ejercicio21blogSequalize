//Prohibe el ingreso a admin si no hay usuario logueado
function adminAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
}
//Prohibe el ingreso a signin y a login si hay usuario logueado
function isLoged(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    return next();
  }
}

module.exports = { adminAuthentication, isLoged };
