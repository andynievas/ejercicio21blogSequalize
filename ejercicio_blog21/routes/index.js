const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const apiRoutes = require("./apiRoutes");
const userAvailable = require("../middleware/userAvailable");

module.exports = (app) => {
  app.use( userAvailable );
  app.use(publicRoutes);
  app.use( "/admin", adminRoutes );
  app.use("/api", apiRoutes);
  app.get("*", (req, res)=>{
    res.render("error", {
      title: "Error 404",
      subtitle: "Lo sentimos mucho, esta página no existe",
      image: "/assets/img/404error.jpg",
      currentUser: res.locals.user,
    });
  });
};
