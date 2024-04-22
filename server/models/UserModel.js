const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { saltRounds } = require('../config/env.js');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [4, 'Username must have at least 4 characters!'],
        maxLength: [13, 'Username must\'t have above 13 charactes!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email address.'],
        unique: [true, 'This email is already existing.'] 
    },
    password: {
        type: String,
        match: [/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/, 'Password must have at least 8 characters. 1 Uppercase letter, 1 number and 1 symbol.']
    },
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }]
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