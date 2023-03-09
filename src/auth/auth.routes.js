
const express = require('express');
const router = express.Router();
const userService = require('../users/instances');


router.post('/login', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const token =  await userService.getUser(email, password)

        res.status(200).json({ token: token ? token : 'Wrong credentials' });
    } catch (error) {
        console.log(error.message);
    }

});


router.post('/register', async (req, res) => {


});

module.exports = router;