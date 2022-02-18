const { Article, User, Comment } = require("../models");
const jwt = require("jsonwebtoken");


async function show(req, res) {
    // const articles = await Article.findAll( { include: User } );
  
    res.render("auth", {
      currentUser: res.locals.user || null,
    });
}

// Create jwt
async function create(req, res) {
    const token = jwt.sign( {"sub": req.user.id}, process.env.CLAVE_PARA_JWT );
    console.log(token);
    res.render("jwtCreated", { 
        currentUser: res.locals.user || null,
        jwt: token
    });
}

// Validate jwt
async function validate(req, res) {
  
    jwt.sign( {"sub": req.user.id}, process.env.CLAVE_PARA_JWT );

    res.redirect("/admin/jwt");
}

module.exports = {
    show,
    create,
};
  