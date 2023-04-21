const { user } = require("../db");

const createUserDB = async (name, email, phone) => {
    const newUser = await user.create({name, email, phone});
    return newUser; 
};

const getUserDB = async (name) => {
    if(name){
        const userByName = await user.findOne({
            where: { name },
        });
        return userByName;
    }
    const allUsers = await user.findAll();
    return allUsers;
};

module.exports = {
    createUserDB,
    getUserDB,
};