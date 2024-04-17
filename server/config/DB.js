const mongoose = require('mongoose');

const { connectionString } = require('../config/env')

exports.initializeDatabase = () => mongoose.connect(connectionString);