const { Article, User, Comment, Role } = require("../models");
const formidable = require("formidable");
const { faker } = require("@faker-js/faker");
const { Op } = require("sequelize");
/* const jwt = require("jsonwebtoken"); */
/* 
async function showHome(req, res) {
  const articles = await Article.findAll({
    include: User,
    order: [["createdAt", "DESC"]],
  });

  res.json("home", {
    articles,
    title: "Clean Blog",
    subtitle: "A Blog Theme by Start Bootstrap",
    image: "/assets/img/home-bg.jpg",
  });
}

async function showArticle(req, res) {
  const article = await Article.findByPk(Number(req.params.id), {
    include: [User, Comment],
    nested: true,
  });
  const commentsWithUser = await Comment.findAll({
    where: { articleId: article.id },
    include: [Article, User],
  });

  res.json("article", {
    article,
    user: article.user,
    comments: commentsWithUser,
  });
}

async function showAdmin(req, res) {
  const articles = await Article.findAll({ include: User });
  res.json("admin", {
    articles,
    title: "Welcome to Administrator page",
    subtitle: "Manage all the articles",
    image: "/assets/img/contact-bg.jpg",
    user: articles.user,
  });
}
async function showArticleByAuthor(req, res) {
  const articles = await Article.findAll({ include: User });
  res.json({
    articles,
    title: "Welcome to Administrator page",
    subtitle: "Manage all the articles",
    image: "/assets/img/contact-bg.jpg",
    user: articles.user,
  });
}

// Muestra un formulario para crear un articulo
async function showCreate(req, res) {
  res.json("create");
}

// Muestra todos los artículos en formato JSON
async function showArticlesJson(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

// Crea el articulo en la base de datos
async function create(req, res) {
  const { userId, title, content, image } = req.body;
  const article = await Article.create({
    userId,
    title,
    content,
    image,
  });

  res.redirect("/api");
}

// Muestra el formulario para editar un articulo
async function showEdit(req, res) {
  const article = await Article.findByPk(Number(req.params.id));
  res.json({ article });
}
async function showArticlesByUser(req, res) {
  const filterCriteria = req.query;

  const articles = await Article.findAll({
    where: filterCriteria,
  });
  res.json({ articles });
} */

async function showArticles(req, res) {
  const filterCriteria = req.query;
  if (filterCriteria.title) {
    filterCriteria.title = { [Op.like]: `%${filterCriteria.title}%` }; //se podria usar { [Op.substring]: `${filterCriteria.title}` }
  }
  const articles = await Article.findAll({ include: { model: User, where: filterCriteria } });
  res.json({ articles });
}

async function getToken(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (user && (await user.validPassword(req.body.password))) {
    const token = jwt.sign({ sub: user.id }, process.env.secretKey);
    res.json({ token: token });
  } else {
    res.sendStatus(401);
  }
}

/* { title: { [Op.like]: filterCriteria } } */

/* 
// Actualiza los datos del articulo en la base de datos
async function edit(req, res) {
  const form = formidable({
    multiples: false,
    uploadDir: __dirname + "/../public/images",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    await Article.update(
      {
        title: String(fields.title),

        content: String(fields.content),
        image: String(files.image.newFilename),
      },

      { where: { id: Number(fields.newId) } },
    );
  });

  res.redirect("/admin");
}

async function destroy(req, res) {
  const article = await Article.findByPk(req.params.id);
  /* if (req.user.roleId === 1 || req.user.id === article.userId) { 
  await article.destroy();
  res.json({ message: `Articulo ${req.params.id} borrado` });
  /* } else {
    res.json("noPermision", {
      article,
      title: "Welcome to Administrator page",
      subtitle: "Manage all the articles",
      image: "/assets/img/contact-bg.jpg",
    }); 
}*/

/* else {
    await article.destroy();
  }  ({ where: { id: Number(req.params.id) } }); 
  res.redirect("/admin"); */

module.exports = {
  /* showHome,
  showArticle, */
  showArticles,
  getToken,
  /*  create,
  edit,
  showAdmin,
  destroy,
  showCreate,
  showEdit,
  showArticlesJson,
  showArticlesByUser,
  showArticlesByTileLeter, */
};
