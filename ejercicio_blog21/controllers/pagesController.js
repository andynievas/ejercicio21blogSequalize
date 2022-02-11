const { Article } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll();
  res.render("home", { articles });
}

async function showAdmin(req, res) {
  const articles = await Article.findAll();
  res.render("admin", { articles });
}

async function showArticle(req, res) {
  const article = await Article.findByPk(Number(req.params.id));
  res.render("article", { article });
}

async function showCreate(req, res) {
  res.render("create");
}

async function showEditar(req, res) {
  res.render("edit");
}

async function editArticle(req, res) {
  const article = await Article.findByPk(Number(req.params.id));
  res.render("edit", { article });
}

async function create(req, res) {
  const article = await Article.create({
    title: String(req.body.title),
    content: String(req.body.content),
    image: String(req.body.image),
    createdAt: String(req.body.date),
  });
  console.log(article);
  res.redirect("home");
}

async function edit(req, res) {
  const article = await Article.update(
    {
      title: "req.body.title",
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
  const article = await Article.destroy({ where: { id: String(req.body.id) } });
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
  editArticle,
  destroy,
  /* showContact,
  showAboutUs, */
};
