const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const { port, connectionString } = require('./config/env.js');
const routs = require('./routes.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(routs);


mongoose.connect(connectionString)
    .then(() => {
        app.listen(port, () => console.log(`App is listening on port ${port}`));
    })
    .catch((err) => {
        console.log('Cannot connect to db:', err)
    })