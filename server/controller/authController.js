const router = require('express').Router();

const { register, login } = require('../services/authService');


router.post('/register', async (req, res) => {

    try {
        
        const user = await register(req.body);

        return res.json({ user });

    } catch (error) {
        
        return res.status(400).json( { message: error.message } );
    }
});

router.post('/login', async (req, res) => {

    try {
        const user = await login(req.body);

        return res.json({ user });

    } catch (error) {

        return res.status(401).json( { message: error.message } );
    }
});

module.exports = router;