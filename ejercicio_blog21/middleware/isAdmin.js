

//Prohibe el ingreso si no es Admin
function isAdmin(req, res, next) {
  
  if ( req.user.role.id === 4 ) 
    return next();
  else {
    res.redirect("/");
  }
}

module.exports = isAdmin;
