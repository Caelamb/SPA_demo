const { Router } = require("express");
const { getPostsHandler, postHandler } = require("../handlers/postsHandlers");

const postsRouter = Router();

postsRouter.get("/", getPostsHandler);
postsRouter.post("/", postHandler);

module.exports = postsRouter;
