const router = require('express').Router();

const authController = require('./controller/authController');
const commentController = require('./controller/commentController');



router.use('/auth', authController);
router.use('/comment', commentController);





module.exports = router;