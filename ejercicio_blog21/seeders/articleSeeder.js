const { faker } = require("@faker-js/faker");
const { Article, User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 20; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      image: faker.image.imageUrl(),
      // date: faker.date.past(),
      userId: faker.datatype.number({ min: 1, max: 20 }),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
