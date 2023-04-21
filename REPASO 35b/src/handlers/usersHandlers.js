const { createUserDB, getUserDB } = require("../controllers/UsersControllers");

// query --> /?name=nicolas&apellido=burgueño
const getUserHandler = async (req,res) => {
    const { name } = req.query
    try {
        if(name){
            const response = await getUserDB(name)
            return res.status(200).json(response)
        }
        const response = await getUserDB()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

// params --> /:id 
const getUserIdHandler = (req,res) => {
    const { id } = req.params;
    res.status(200).send(`users witch id: ${id}`)
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

module.exports = {
    getUserHandler,
    getUserIdHandler,
    postUserHandler
};