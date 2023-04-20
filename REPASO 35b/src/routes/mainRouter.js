const { Router } = require("express");
const usersRouter = require("../routes/usersRouter");
const postsRouter = require("../routes/postsRouter");

const mainRouter = Router();

//modularizamos las routes
mainRouter.use("/users", usersRouter);
mainRouter.use("/posts", postsRouter);

module.exports = mainRouter;