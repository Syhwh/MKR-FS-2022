
const jwt = require('jsonwebtoken');


const createAccessToken = (user) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        userId: user._id,
    }, process.env.TOKEN_SECRET, { algorithm: 'HS256' })
    return token;
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET, { algorithm: 'HS256' });
};

module.exports = { createAccessToken, verifyToken };
