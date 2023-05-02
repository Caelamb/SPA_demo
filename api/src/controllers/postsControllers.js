const { post } = require("../db");

const getPosts = async () => {
  const posts = await post.findAll();
  return posts;
};

const createPostDB = async (title, body, userId) => {
  const posts = await post.create({ body, title });
  await posts.setUser(userId);
  return posts;
};

module.exports = {
  createPostDB,
  getPosts,
};
