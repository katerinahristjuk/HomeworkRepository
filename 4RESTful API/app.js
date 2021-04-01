const express = require('express');
const app = express();
const router = require('./router.js')
const mongoose = require('mongoose');

app.use(express.json());

app.use('/', router);

mongoose.connect('mongodb://localhost:27017/puppies',
{useNewUrlParser:true, useUnifiedTopology:true })

module.exports = app;