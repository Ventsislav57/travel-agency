const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { saltRounds } = require('../config/env.js');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, 'Name must have at least 3 characters!'],
        maxLength: [20, 'Name must\'t have above 20 charactes!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [4, 'Username must have at least 4 characters!'],
        maxLength: [13, 'Username must\'t have above 13 charactes!']
    },
    phone: {
        type: Number,
        validate: {
            validator: function(v) {
                return /^d{10}$/.test(v);
            },
            message: 'Phone number must have 10 digits!'
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email address.'],
        unique: [true, 'This email is already existing.'] 
    },
    profession: {
        type: String,
        minLength: [3, 'Profession must have at least 3 characters!'],
        maxLength: [20, 'Profession must\'t have above 20 charactes!']
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