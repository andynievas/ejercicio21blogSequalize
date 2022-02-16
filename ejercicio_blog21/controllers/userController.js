const { User } = require("../models");

async function index(req, res) {}
async function store(req, res) {}
async function edit(req, res) {}
async function update(req, res) {}
async function destroy(req, res) {}

//Funcion encargada de mostrar la view singin.ejs
async function show(req, res) {
  res.render("signin");
}

//funcion encargada de crear el usuario
async function create(req, res) {
  const { firstname, lastname, email, password } = req.body;
  const [user, created] = await User.findOrCreate({
    where: { firstname, lastname, email, password },
  });

  if (created) {
    req.login(user, () => res.redirect("/admin"));
  } else {
    res.redirect("/login");
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
