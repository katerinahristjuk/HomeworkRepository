const User = require('../models/userModel');

module.exports = {
fetchAll: async (req, res) =>{
    try {
        const users = await User.find();
        res.status(200).send({
            error: false,
            message: 'All users:',
            users
        });
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        }) 
    }   
},
fetchOne: async (req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send({
            error: false,
            message: `User with Id: ${req.params.id}`,
            user
        });
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        }) 
    }   
},
}