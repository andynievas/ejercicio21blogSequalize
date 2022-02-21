const { faker } = require("@faker-js/faker");
const { id } = require("date-fns/locale");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  users.push({
    firstname: "Admin",
    lastname: "Admin",
    creartedAt: faker.image.imageUrl(),
    email: "admin@admin.com",
    password: "1234",
    roleId: "1",
  });
  users.push({
    firstname: "Editor",
    lastname: "Editor",
    creartedAt: faker.image.imageUrl(),
    email: "editor@editor.com",
    password: "1234",
    roleId: "2",
  });
  users.push({
    firstname: "Writer",
    lastname: "Writer",
    creartedAt: faker.image.imageUrl(),
    email: "writer@writer.com",
    password: "1234",
    roleId: "3",
  });

  for (let i = 0; i < 20; i++) {
    let id = 4;

    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      creartedAt: faker.image.imageUrl(),
      email: faker.internet.email(),
      roleId: id,
      /* roleId: faker.datatype.number({ min: 1, max: 4 }), */
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
