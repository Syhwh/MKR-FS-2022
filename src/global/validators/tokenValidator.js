const AppError = require("../errorHandling/AppError.js/AppError");
const { verifyToken } = require("../jwt");

const tokenValidator = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        if (!token) {
            throw new AppError('No token provided', 401, 'tokenValidator');
        } else {
            const validToken = verifyToken(token);
            if (!validToken) {
                throw new AppError('Invalid token', 401, 'tokenValidator');
            }
            next();
        }
    } catch (error) {
        throw new AppError('Invalid token', 401);
    }
};

module.exports = tokenValidator;