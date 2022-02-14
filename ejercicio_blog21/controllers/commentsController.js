// Display a listing of the resource.
const { Comment } = require("../models");
const { faker } = require("@faker-js/faker");

async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  const randomUser = faker.datatype.number({ min: 1, max: 20 });
  const comment = await Comment.create({
    userId: randomUser,
    content: String(req.body.comment),
    articleId: String(req.params.id),
  });

  res.redirect(`/articulo/${req.params.id}`);
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
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
