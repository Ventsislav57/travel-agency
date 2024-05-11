const router = require('express').Router();

const { register, login, getUserData, editUserData, deleteProfile } = require('../services/authService');


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

router.post('/user-data', async (req, res) => {

    try {
        const user = await getUserData(req.body.userId);

        const userData = user.toObject();
        delete userData.password;
        // delete userData._id;
        // delete userData.__v;

        return res.json({ user: userData });

    } catch (error) {

        return res.status(401).json( { message: error.message } );
    }
});

router.post('/edit-user-data', async (req, res) => {
    
    try {
        const user = await editUserData(req.body.userId, req.body.userData);


        return res.json('success!');

    } catch (error) {
        console.log(error);
        return res.status(401).json( { message: error.message } );
    }
})

router.post('/delete-profile', async (req, res) => {

    console.log(req.body.userId);
    try {
        const user = await deleteProfile(req.body.userId);

        return res.json('success!');

    } catch (error) {
        return res.status(401).json( { message: error.message } );
    }
})

module.exports = router;