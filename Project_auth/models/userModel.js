const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: 'Name is required'
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    confirm_pass: {
        type: String,
        required: 'Confirm your password is required'
    }
})

module.exports = mongoose.model('User', userSchema);