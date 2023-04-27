const { Users, Posts } = require("../db");
const axios = require("axios");

const createUserDB = async (name, email, phone) => {
    const newUser = await Users.create({name, email, phone});
    return newUser; 
};

const getUserAPI = async () => {
    const peticion = await axios.get(`https://jsonplaceholder.typicode.com/users`).data;

    const apiInfoMap = peticion.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
        }
    });
    return apiInfoMap;
};

const getUserDB = async () => {
    const allUsers = await Users.findAll({
        include: {
            model: Posts,
            attributes: ["title", "body"],
        }
    });
    return allUsers;
};

const getAllUsers = async (name) => {
    const usersDB = await getUserDB();
    const usersApi = await getUserAPI();
    const allUsers = [... usersDB, ... usersApi];
    if(name){
        let filterUsers = allUsers.filter(
            user => user.name.toLowerCase() === name.toLowerCase()
            );
        if (filterUsers.length){
            return filterUsers;
        }
    } else {
        return allUsers;
    }
};

const getUserById = async (id) => {
if(isNaN(id)) {
    const userById = await Users.findByPK(id);
    return userById 
 }
 const users = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
 return users.data;
};

const userDelete = async(id) => {
    await Users.destroy({ where: { id } })
};

module.exports = {
    createUserDB,
    getAllUsers,
    getUserById,
    userDelete
};