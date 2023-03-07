
const express = require('express');
const router = express.Router();
const userService = require('../users/instances');



router.post('/login', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const user =  await userService.getUser(email, password)

        res.status(200).json({ message: user ? user : 'Wrong credentials' });
    } catch (error) {
        console.log(error.message);
    }



});

module.exports = router;