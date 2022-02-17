

const { Role } = require("../models");

module.exports = async () => {
  const roles = [];

  roles.push({
    content: "Lector",
  });
  roles.push({
    content: "Escritor",
  });
  roles.push({
    content: "Editor",
  });
  roles.push({
    content: "Administrador",
  });

  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Roles.");
};
