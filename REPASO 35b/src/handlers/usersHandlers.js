
// query --> /?name=nicolas&apellido=burgueño
const getUserHandler = (req,res) => {
    const { name, apellido } = req.query

    if(name || apellido) 
    return res
    .status(200)
    .send(
        `The user with name: ${name} and last name: ${apellido}`
        );

    res.status(200).send("alls users")
};

// params --> /:id 
const getUserIdHandler = (req,res) => {
    const { id } = req.params;
    res.status(200).send(`users witch id: ${id}`)
};

// --> body
const postUserHandler = (req,res) => {
    const { name, email, phone } = req.body 
    res
    .status(200)
    .send(`we create the users witch name: ${name}, email: ${email} and phone: ${phone}`)
};

module.exports = {
    getUserHandler,
    getUserIdHandler,
    postUserHandler
};