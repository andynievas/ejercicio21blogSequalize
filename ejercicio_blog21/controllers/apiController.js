const { Article, User, Comment } = require("../models");


// Muestra todos los artículos en formato JSON
async function show(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

// Muestra un artículo en formato JSON
async function showOne(req, res) {
  const article = await Article.findOne({ where: { id: req.params.article_id} });
  res.json(article);
}

// Muestra todos los artículos de un autor en formato JSON
async function showByAuthor(req, res) {
  const articles = await Article.findAll({ where: { userId: req.params.author_id } });
  res.json(articles);
}

// Muestra todos los artículos en formato JSON
async function showIfContainsLetters(req, res) {
  const articles = await Article.findAll();
  const filtrado = articles.filter( item => item.title.includes( req.params.letters ) );
  // filtrado is case sensitive
  res.json( filtrado );
}

// Crear, editar, borrar un artículo.

// Crea un articulo
async function create(req, res) {
  const { title, content, image } = req.body;
  const userId = req.user.id;
  const [article, created] = await Article.findOrCreate({
    where: { title, userId },
    defaults: {
      title,
      content,
      image: image || "http://placeimg.com/640/480",
      userId,
    }
  });

  if( created ){
    res.json( {"msg": "Se creo el articulo"} );
  }else res.status(400).end("Ya existe");

}

// Edita un articulo
async function edit(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

// Borra un articulo
async function destroy(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}


module.exports = {
  show,
  showOne,
  showByAuthor,
  showIfContainsLetters,
  create,
  edit,
  destroy,
};
