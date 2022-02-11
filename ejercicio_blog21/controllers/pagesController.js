const { Article } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll();
  res.render("home", { articles });
}

async function showArticle(req, res) {
  const article = await Article.findByPk(Number(req.params.id));
  res.render("article", { article });
}

async function create(req, res) {
  const article = await Article.create({
    title: "req.body.title",
    content: "req.body.content",
    image: "req.body.image",
    createdAt: "req.body.date",
  });
  console.log(article);
  res.redirect("home");
}

async function edit(req, res) {
  const article = await Article.update(
    {
      title: "req.body.title",
    },
    { content: "req.body.content" },
    { image: "req.body.image" },
    { createdAt: "req.body.date" },
    { where: { id: "req.params.id" } },
  );
  console.log(article);
  res.redirect("article");
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
  /* showContact,
  showAboutUs, */
};
