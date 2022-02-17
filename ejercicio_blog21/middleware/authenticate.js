
//Prohibe el ingreso a signin y a login si hay usuario logueado
function isLoged(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    return next();
  }
}

//Prohibe el ingreso a admin si no tiene los permisos suficientes
function adminAuthentication(req, res, next) {

  /*switch ( req.user.role.content ) {
    case "Admin":
      next();
      break;
    case "Editor":
      next();
      break;
    case "Escritor":
      next();
      break;
  
    default:
      
      break;
  }*/
  
  if ( req.isAuthenticated() ) 
    return next();
  else {
    res.redirect("/");
  }
}

module.exports = { adminAuthentication, isLoged };
