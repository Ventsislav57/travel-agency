const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { saltRounds } = require('../config/env.js');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [3, 'Name must have at least 3 charactes!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [4, 'Username must have at least 4 characters!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email address.'],
        unique: [true, 'This email is already existing.'] 
    },
    password: {
        type: String,
        match: [/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/, 'Please enter a valid password.']
    },
})

UserSchema.pre('save', function (next) {

    if (!this.isModified('password')) return next();

    bcrypt.hash(this.password, saltRounds)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;