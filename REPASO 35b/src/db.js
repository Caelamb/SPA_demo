const { Sequelize } = require("sequelize");

require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_NAME } = process.env;

//son los modelos
const UsersModel = require("./models/Users");
const PostsModel = require("./models/Posts");

const sequelize = new Sequelize(
    `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
    );

UsersModel(sequelize);
PostsModel(sequelize);

const { Users , Posts } = sequelize.models;

// creamos las relaciones

//un usuario tiene varios posts
Users.hasMany(Posts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

//un post va a pertenecer a un usuario
Posts.hasMany(Users);

module.exports = {
    ...sequelize.models,
    conn: sequelize
};