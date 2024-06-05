const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { secret } = require('../config/env.js');

const User = require('../models/UserModel');


exports.register = async (userData) => {

    const existing = await User.findOne({ email: userData['email'] });

    if (existing) {
        throw new Error('Email already existing');
    }

    const user = await User.create(userData);
    

    return createToken(user);
}

exports.login = async (userData) => {

    const user = await User.findOne({ username: userData['username'] });

    if (!user) {
        throw new Error('Username or password is invalid.');
    }

    const isValid = bcrypt.compare(userData['password'], user.password);

    if (!isValid) {
        throw new Error('Username or password is invalid.');
    }

    return createToken(user);

}

exports.getUserData = async (userId) => {

    const user = await User.findOne({ _id: userId }).populate('comments');

    if (!user) {
        throw new Error('User not found.');
    }

    return user;

}

exports.editUserData = async (userId, userData) => {

    const user = await User.findByIdAndUpdate(userId, userData, { runValidators: true });


    if (!user) {
        throw new Error('User not found.');
    }

    return user;
}

exports.deleteProfile = async (userId) => {

    console.log(userId);

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
        throw new Error('User not found.');
    }

    return user;
}

const createToken = (user) => {
    const payload = {
        _id:        user._id,
        name:       user.name,
        username:   user.username,
        email:      user.email,
    }

    const options = { expiresIn: '1d' };

    const token = jwt.sign(payload, secret, options);

    return {
        _id:            user._id,
        name:           user.name,
        username:       user.username,
        email:          user.email,
        accessTonken:   token
    }
}