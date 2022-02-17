const { Article, User, Comment } = require("../models");
const formidable = require("formidable");
const { faker } = require("@faker-js/faker");

async function showHome(req, res) {
  const articles = await Article.findAll({
    include: User,
    order: [["createdAt", "DESC"]],
  });

  res.render("home", {
    articles,
    title: "Clean Blog",
    subtitle: "A Blog Theme by Start Bootstrap",
    image: "/assets/img/home-bg.jpg",
    currentUser: res.locals.user || null,
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
    currentUser: res.locals.user || null,
  });
}

async function showAdmin(req, res) {
  
  if( req.user.role.content === "Administrador" ){
    console.log("rol: Lector");

    const articles = await Article.findAll({ include: User });

    const usersList = User.findAll();
    
    res.render("admin", {
      title: "Welcome to Administrator page",
      subtitle: "Manage all the articles",
      image: "/assets/img/contact-bg.jpg",
      currentUser: res.locals.user,
      articles,
      usersList,
    });
  }else if( req.user.role.content === "Editor" ){
    const articles = await Article.findAll({ include: User });
    res.render("admin", {
      title: "Welcome to Editor page",
      subtitle: "Edit all the articles",
      image: "/assets/img/contact-bg.jpg",
      currentUser: res.locals.user,
      articles,
    });
  }else if( req.user.role.content === "Escritor" ){
    const articles = await Article.findAll( { where: { userId: req.user.id } } );// { where: { userId: req.user.id } }
    res.render("admin", {
      title: "Welcome to Escritor page",
      subtitle: "Manage your articles",
      image: "/assets/img/contact-bg.jpg",
      currentUser: res.locals.user,
      articles,
    });
  }

}

// Muestra un formulario para crear un articulo
async function showCreate(req, res) {
  res.render("create", {currentUser: res.locals.user} );
}

// Muestra todos los artículos en formato JSON
async function showArticlesJson(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

// Crea el articulo en la base de datos
async function create(req, res) {
  const form = formidable({
    multiples: false,
    uploadDir: __dirname + "/../public/images",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const currentUser = res.locals.user.id;

    const article = await Article.create({
      userId: currentUser,
      title: String(fields.title),
      content: String(fields.content),
      image: "http://placeimg.com/640/480"/*String(files.image.newFilename)*/,
    });
  });

  res.redirect("/");
}

// Muestra el formulario para editar un articulo
async function showEdit(req, res) {
  const article = await Article.findByPk(Number(req.params.id));
  res.render("edit", { article, currentUser: res.locals.user });
}

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
  const article = await Article.destroy({ where: { id: Number(req.params.id) } });
  res.redirect("/admin");
}

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
};
