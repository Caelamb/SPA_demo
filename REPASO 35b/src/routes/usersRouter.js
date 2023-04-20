const { Router } = require("express");
const { getUserHandler,getUserIdHandler,postUserHandler} = require("../handlers/usersHandlers")

const usersRouter = Router();

usersRouter.get("/", getUserHandler);
usersRouter.get("/:id", getUserIdHandler);
usersRouter.post("/", postUserHandler);


module.exports = usersRouter;