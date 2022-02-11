const { Article } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll();
  res.render("home", {
    articles,
    title: "Clean Blog",
    subtitle: "A Blog Theme by Start Bootstrap",
    image: "/assets/img/home-bg.jpg",
  });
}

async function showArticle(req, res) {
  const article = await Article.findByPk(Number(req.params.id));
  res.render("article", { article });
}

async function showAdmin(req, res) {
  const articles = await Article.findAll();
  res.render("admin", {
    articles,
    title: "Welcome to Administrator page",
    subtitle: "Manage all the articles",
    image: "/assets/img/contact-bg.jpg",
  });
}

// Muestra un formulario para crear un articulo
async function showCreate(req, res) {
  res.render("create");
}
// Crea el articulo en la base de datos
async function create(req, res) {
  const article = await Article.create({
    title: String(req.body.title),
    content: String(req.body.content),
    image: String(req.body.image),
    createdAt: "11/02/2022",
  });
  console.log(article);
  res.redirect("/");
}

// Muestra el formulario para editar un articulo
async function showEdit(req, res) {
  const article = await Article.findByPk(Number(req.params.id));
  res.render("edit", { article });
}
// Actualiza los datos del articulo en la base de datos
async function edit(req, res) {
  const article = await Article.update(
    {
      title: String(req.body.title),
    },
    { content: String(req.body.content) },
    { image: String(req.body.image) },
    { createdAt: String(req.body.createdAt) },
    { where: { id: String(req.body.id) } },
  );
  console.log(article);
  res.redirect("article");
}

async function destroy(req, res) {
  const article = await Article.destroy({ where: { id: Number(req.body.id) } });
}

/* *************************************************************** */
/* async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
} */

// Otros handlers...
// ...

module.exports = {
  showHome,
  showArticle,
  create,
  edit,
  showAdmin,
  destroy,
  showCreate,
  showEdit,
  /* showContact,
  showAboutUs, */
};
