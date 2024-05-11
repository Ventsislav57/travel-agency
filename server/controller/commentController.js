const router = require('express').Router();

const { getUserData } = require('../services/authService');
const { create } = require('../services/commentService');

router.post('/create', async (req, res) => {

    try {
        
        const comment = await create(req.body);
        const user = await getUserData(req.body.owner);

        user.comments.push(comment);
        user.save();
        
        return res.json({ comment });

    } catch (error) {
        return res.status(300).json( { message: error.message } );
        
    }
})

module.exports = router;