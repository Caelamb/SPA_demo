const { Router } = require("express");
const {
  getUserHandler,
  getUserIdHandler,
  postUserHandler,
  deleteUserHandler,
} = require("../handlers/usersHandlers");
const usersRouter = Router();

usersRouter
  .get("/", getUserHandler)
  .get("/:id", getUserIdHandler)
  .post("/", postUserHandler)
  .delete("/:id", deleteUserHandler);

module.exports = usersRouter;
