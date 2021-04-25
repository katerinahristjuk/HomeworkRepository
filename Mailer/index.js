//requires
const express = require('express');
const config = require('./pkg/config');
const mailer = require('./handlers/mailer.js')

//consts
const api = express();

//middlewares
api.use(express.json());

//routes
api.post('/mailer', mailer.sendMail)

//start
api.listen(config.get('service').port, err => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Listening on ${config.get('service').port} :)`)
})