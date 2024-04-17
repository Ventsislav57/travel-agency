const router = require('express').Router();

const authController = require('./controller/authController');




router.use('/auth', authController);





module.exports = router;