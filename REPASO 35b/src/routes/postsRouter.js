const { Router } = require("express");
const { getPostsHandler } = require("../handlers/postsHandlers");

const postsRouter = Router();

postsRouter.get("/", getPostsHandler);

module.exports = postsRouter;