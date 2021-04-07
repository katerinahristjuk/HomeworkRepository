const express = require('express');
const api = express();
const router = require('./router');
const jwt = require('express-jwt')
require('../../config/db');

api.use(express.json());

api.use(jwt({secret: 'secret_key', algorithms: ['HS256']}));

api.use(jwt({
    secret: 'secret_key',
    algorithms: ['HS256']
}).unless({ path: '/api/v1/users' }));

api.use('/api/v1/users', router)

api.listen(3001, err => {
    if(err) {
        return console.log('Error happend while starting the users service: ', err);
    } 
    console.log('Users service succesfully started at port 3001')
})