const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  // await db.sequelize.sync({ force: true });
  // console.log("[Database] ¡Las tablas fueron creadas!");

  // // Ejecutar seeders de (Users)
  // await require("./seeders/userSeeder")();
  // console.log("[Database] ¡Los datos de prueba fueron insertados!");

  // // Ejecutar seeders (datos de prueba):
  // await require("./seeders/articleSeeder")();
  // console.log("[Database] ¡Los datos de prueba fueron insertados!");

  // // Ejecutar seeders (datos de prueba):
  // await require("./seeders/commentSeeder")();
  // console.log("[Database] ¡Los datos de prueba fueron insertados!");

  // // Ejecutar seeders (datos de prueba):
  // await require("./seeders/rolesSeeder")();
  // console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
