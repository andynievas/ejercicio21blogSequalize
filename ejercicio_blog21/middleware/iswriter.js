/* verifica si es Escritor */
function isWriter(req, res, next) {
  if (req.user.roleId === 3) {
    return next();
  } else res.redirect("/noPermission");
}

module.exports = isWriter;
