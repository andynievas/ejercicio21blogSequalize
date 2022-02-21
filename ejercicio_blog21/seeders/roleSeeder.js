const { Role, User } = require("../models");

/* faker.locale = "es"; */

module.exports = async () => {
  /*  const roles = ["administator", "editor", "writer", "reader"];
  console.log(roles); */
  const roles = [];

  roles.push({ roleName: "administrator" });
  roles.push({ roleName: "editor" });
  roles.push({ roleName: "writer" });
  roles.push({ roleName: "reader" });

  /* for (let i = 4; i < 20; i++) {
    roles.push({
      roleName: "reader",
    });
  } */

  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de roles.");
};
