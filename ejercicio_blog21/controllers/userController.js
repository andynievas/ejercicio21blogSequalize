const { User } = require("../models");



async function index(req, res) {}


async function show(req, res) {

  res.render("signin");
}


async function create(req, res) {

 const [user, created] = await User.findOrCreate(
   {where: {email}}
 );

 if(created) {

  req.login(user, () => res.redirect("/admin"));
 } 
 else {
   res.redirect("/login");
 }
  
};


async function store(req, res) {}


async function edit(req, res) {}


async function update(req, res) {}


async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
