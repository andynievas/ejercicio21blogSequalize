const { User } = require("../models");

async function index(req, res) {}
async function store(req, res) {}
async function edit(req, res) {}
async function update(req, res) {}

//Funcion encargada de mostrar la view singin.ejs
async function show(req, res) {
  res.render("signin", {currentUser: res.locals.user || null,} );
}

//funcion encargada de crear el usuario
async function create(req, res) {
  const { firstname, lastname, email, password } = req.body;
  const [user, created] = await User.findOrCreate({
    where: { firstname, lastname, email },//password
    defaults: { password, roleId: 1 }
  });

  if (created) {
    req.login(user, () => res.redirect("/"));
  } else {
    res.redirect("/login");
  }
}

async function destroy(req, res) {
  if( req.user.role.content === "Administrador" ){
    // borrar por medio del id del usuario
    const article = await User.destroy({ where: { id: Number(req.params.id) } });

  }else{
    res.render("error", {
      title: "4 - 0 - 4",
      subtitle: "Lo sentimos mucho, esta página no existe",
      image: "/assets/img/404error.jpg",
      currentUser: res.locals.user,
    });
  }
}

//Funcion encargada de desloguear al usuario
function logout(req, res) {
  req.logout();
  res.redirect("/login");
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  logout,
};
