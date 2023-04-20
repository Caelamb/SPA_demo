const getPostsHandler = (req,res) => {
    res.status(200).send("all posts")
};

module.exports = {
    getPostsHandler
};