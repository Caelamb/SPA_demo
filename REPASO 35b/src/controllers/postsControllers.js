const { Posts } = require("../db");

const getPots = async () => {
    const post = await Posts.findAll()
    return post;
};

const createPostDB = async (title, body, UserId) => {
    const posts = await Posts.create({ body, title});
    await posts.setUser(UserId)
    return posts;
};

module.exports = {
    createPostDB,
    getPots
};