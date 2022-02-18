
// Si no esta logeado no lo deja continuar
function isLoged(req, res, next) {
  if ( !req.isAuthenticated() ) {
    res.redirect("/login");
  } else {
    return next();
  }
}

//Prohibe el ingreso a signin y a login si hay usuario logueado
function preventShowAuthAgain(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    return next();
  }
}

//Prohibe el ingreso a admin si no tiene los permisos suficientes
function adminAuthentication(req, res, next) {
  
  if ( req.isAuthenticated() ) 
    return next();
  else {
    res.redirect("/");
  }
}

module.exports = { isLoged, preventShowAuthAgain, adminAuthentication };
