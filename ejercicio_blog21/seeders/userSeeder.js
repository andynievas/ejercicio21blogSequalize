const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  users.push({
    firstname: "prueba",
    lastname: "prueba",
    creartedAt: faker.image.imageUrl(),
    email: "1@1.com",
  });
  for (let i = 0; i < 20; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      creartedAt: faker.image.imageUrl(),
      email: faker.internet.email(),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
