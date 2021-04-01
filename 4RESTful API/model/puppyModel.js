const mongoose = require('mongoose');

const puppySchema = mongoose.Schema({
    breed: {type: String, required: ['Breed is required...']},
    name: {type: String, required: ['Name is required...']},
    age: {type: Number, required: ['Age is required...']},
})

module.exports = mongoose.model('Puppy', puppySchema);