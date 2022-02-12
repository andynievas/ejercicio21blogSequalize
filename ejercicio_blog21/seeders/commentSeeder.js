const { faker } = require("@faker-js/faker");
const { Comment, Article, User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];

  for (let i = 0; i < 20; i++) {
    comments.push({
      content: faker.lorem.sentence(10),
      userId: faker.datatype.number({ min: 1, max: 20 }),
      articleId: faker.datatype.number({ min: 1, max: 20 }),
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Comments.");
};
