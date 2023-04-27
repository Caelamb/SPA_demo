const { createUserDB, getAllUsers, getUserById, userDelete } = require("../controllers/usersControllers");

// query --> /?name=nicolas&apellido=burgueño
const getUserHandler = async (req,res) => {
    const { name } = req.query
    try {
        if(name){
            const response = await getAllUsers(name)
            return res.status(200).json(response)
        }
        const response = await getAllUsers()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

// params --> /:id 
const getUserIdHandler = async (req,res) => {
    const { id } = req.params;
    try {
        const response = await getUserById(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

// --> body
const postUserHandler = async (req,res) => {
    const { name, email, phone } = req.body;
    try {
     const response = await createUserDB(name, email, phone)
     res.status(200).json(response)   
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const deleteUserHandler = async (req, res) => {
    const { id } = req.params;
    try {
        await userDelete(id)
        res.status(200).send("Users elimited")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    getUserHandler,
    getUserIdHandler,
    postUserHandler,
    deleteUserHandler
};