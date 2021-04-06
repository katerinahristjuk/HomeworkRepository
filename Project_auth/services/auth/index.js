const express = require('express');
const api = express();
const router = require('./router');
require('../../config/db');

api.use(express.json());

api.post('/hehe', (req, res) => {
    res.send({message: "Post from /hehe"})
})

api.use('/api/v1/auth', router)

api.listen(3000, err => {
    if(err) {
        return console.log('Error happend while starting the auth service: ', err);
    } 
    console.log('Auth service succesfully started at port 3000')
})