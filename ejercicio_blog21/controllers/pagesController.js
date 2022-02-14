const { Article, User, Comment } = require("../models");
const formidable = require("formidable");

async function showHome(req, res) {
  const articles = await Article.findAll({ include: User });

  res.render("home", {
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

  res.render("article", {
    article,
    user: article.user,
    comments: commentsWithUser,
  });
}

async function showAdmin(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("admin", {
    articles,
    title: "Welcome to Administrator page",
    subtitle: "Manage all the articles",
    image: "/assets/img/contact-bg.jpg",
    user: articles.user,
  });
}

// Muestra un formulario para crear un articulo
async function showCreate(req, res) {
  res.render("create");
}

// Muestra todos los artículos en formato JSON
async function showArticlesJson(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
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
  const form = formidable({
    multiples: false,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    console.log(fields);
    console.log(files);
    await Article.update(
      {
        title: String(fields.title),

        content: String(fields.content),
        image: files.image.newFilename,
      },
      /* { createdAt: String(req.body.createdAt) }, */
      /* { where: { id: String(req.params.id) } }, */

      { where: { id: Number(req.params.id) } },
    );
  });

  res.redirect("/admin");
}

async function destroy(req, res) {
  const article = await Article.destroy({ where: { id: Number(req.params.id) } });
  res.redirect("/admin");
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
  showArticlesJson,
  /* showContact,
  showAboutUs, */
};
