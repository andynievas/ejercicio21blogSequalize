const { Article } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll();
  res.render("home", { articles });
}

async function showArticle(req, res) {
  const article = await Article.findByPk(Number(req.params.id));
  res.render("article", { article });
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
