
const express = require('express');
const router = express.Router();

const axios = require('axios');




router.get('/google', async (req, res) => {
    const { code } = req.query;

    const googleParams = {
        client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
        client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.GOOGLE_OAUTH_URI_REDIRECT

    }
    const googleParamsString = Object.keys(googleParams)
        .map(key => `${key}=${googleParams[key]}`)
        .join('&');
    try {


        const { data } = await axios.post(`https://oauth2.googleapis.com/token`,
            googleParamsString,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }, {

        })

        const googleUSer = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${data.access_token}`, {
            headers: {
                // Authorization: `Bearer ${data?.access_token}`
            }
        }, {});

        console.log(googleUSer.data)
        // search for user in db
        // const token =  await userService.getUser(email, password)

        // res.status(200).json({ token:  : 'Wrong credentials' });
        res.redirect('http://localhost:3000/dashboard');
    } catch (error) {
        console.log(error.message);
    }

});


router.post('/register', async (req, res) => {


});

module.exports = router;