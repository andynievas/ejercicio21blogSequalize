const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  // users.push({
  //   firstname: "prueba",
  //   lastname: "prueba",
  //   creartedAt: faker.image.imageUrl(),
  //   email: "1@1.com",
  //   password: "$2a$07$F4JwuGpahqTkZU.lgzQqSesfTZBiFiFs3S.Uz31ZLJxytqRMm0Mva",
  //   roleId: Number(1),
  // });
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
