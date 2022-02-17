const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  users.push({
    firstname: "a",
    lastname: "a",
    // creartedAt: faker.image.imageUrl(),
    email: "hola1@gmail.com",
    password: "$2a$07$IyRg/RQxG8LZ5FLlStuto.3l8nISFYPmBXdby612Qwj9EwPUcondO",
    // roleId: Number(1),
  });
  for (let i = 0; i < 2; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      creartedAt: faker.image.imageUrl(),
      email: faker.internet.email(),
      // roleId: 1,
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
