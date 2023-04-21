const { Sequelize } = require("sequelize");

require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_NAME } = process.env;

//son los modelos
const UsersModel = require("./models/Users");
const PostsModel = require("./models/Posts");
const Users = require("./models/Users");

const sequelize = new Sequelize(
    `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
    );

UsersModel(sequelize);
PostsModel(sequelize);

const { user, post } = sequelize.models;

// creamos las relaciones

//un usuario tiene varios posts
user.hasMany(post);

//un post va a pertenecer a un usuario
post.hasMany(user);

module.exports = {
    ...sequelize.models,
    conn: sequelize
};