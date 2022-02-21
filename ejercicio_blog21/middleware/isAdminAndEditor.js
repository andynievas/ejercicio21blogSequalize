/* verifica si es Administrador o Editor */
function isAdminAndEditorandWriter(req, res, next) {
  if (req.user.roleId <= 3) {
    return next();
  } else res.redirect("/noPermision");
}

module.exports = { isAdminAndEditorandWriter };
