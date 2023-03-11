const AppError = require("../errorHandling/AppError.js/AppError");
const { verifyToken } = require("../jwt");

const tokenValidator = (req, res, next) => {
    const isBearer = req.headers.authorization.split(' ')[0] === 'Bearer';
    if (!isBearer) {
        throw new AppError('Invalid token', 401);
    }

    const token = req.headers.authorization.split(' ')[1];
    try {
        if (!token) {
            throw new AppError('No token provided', 401, 'tokenValidator');
        } else {
            const validToken = verifyToken(token, process.env.TOKEN_SECRET);
            if (!validToken.userId) {
                throw new AppError('Invalid token', 401, 'tokenValidator');
            }
            req.locals={...req.locals, userId: validToken.userId};
            next();
        }
    } catch (error) {
        throw new AppError('Invalid token', 401);
    }
};

module.exports = tokenValidator;