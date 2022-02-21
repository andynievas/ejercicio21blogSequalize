const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const writerRoutes = require("./writerRoutes");
const apiRoutes = require("./apiRoutes");
module.exports = (app) => {
  app.use(publicRoutes);
  app.use("/admin", adminRoutes);
  app.use("/admin/writer", writerRoutes);
  app.use(apiRoutes);
};
