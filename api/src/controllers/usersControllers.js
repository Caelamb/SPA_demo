const { user, post } = require("../db");
const axios = require("axios");

const createUserDB = async (name, email, phone) => {
  const newUser = await user.create({ name, email, phone });
  return newUser;
};

const getUserApi = async () => {
  const peticion = (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;
  const apiInfoMap = peticion.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  });
  return apiInfoMap;
};

const getUserDB = async () => {
  const allUsers = await user.findAll({
    include: {
      model: post,
      attributes: ["title", "body"],
    },
  });
  return allUsers;
};

const getAllUsers = async (name) => {
  const usersDB = await getUserDB(); //usuarios de la db
  const usersApi = await getUserApi(); //usuarios de la api
  const allUsers = [...usersDB, ...usersApi]; //todos los usuarios
  if (name) {
    let filterUsers = allUsers.filter(
      (user) => user.name.toLowerCase().includes(name.toLowerCase())
    );
    if (filterUsers.length) {
      return filterUsers;
    }
  } else {
    return allUsers;
  }
};

const getUserById = async (id) => {
  if (isNaN(id)) {
    const users = await user.findByPk(id);
    return users;
  }
  const users = (
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  ).data;
  return users;
};

const userDelete = async (id) => {
  await user.destroy({ where: { id } });
};

module.exports = {
  createUserDB,
  getAllUsers,
  getUserById,
  userDelete,
};
