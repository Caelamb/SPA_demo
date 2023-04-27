const { Router } = require("express");
const { getUserHandler,getUserIdHandler,postUserHandler, deleteUserHandler } = require("../handlers/usersHandlers")

const usersRouter = Router();

usersRouter.get("/", getUserHandler);
usersRouter.get("/:id", getUserIdHandler);
usersRouter.post("/", postUserHandler);
usersRouter.delete("/:id", deleteUserHandler);


module.exports = usersRouter;