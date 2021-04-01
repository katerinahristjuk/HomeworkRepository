const express = require('express');
const router = express.Router();
const puppyController = require('./controller/puppyController');

router
    .get('/lala', puppyController.test)
    .get('/puppies', puppyController.fetch)
    .post('/puppies', puppyController.create)
    .put('/puppies/:_id', puppyController.overwrite)
    .patch('/puppies/:_id', puppyController.update)
    .delete('/puppies/:_id', puppyController.delete)

module.exports = router;