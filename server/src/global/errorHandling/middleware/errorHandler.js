const AppError = require("../AppError.js/AppError");
const ServiceError = require("../serviceError/ServiceError");

const errorHandler = (err, req, res, next) => {

    if (err.name === 'ValidationError') {
        return res.status(400).json({ status: 400, type: 'ValidationError', message: err.message, details: err.details });
    }

    if (err instanceof ServiceError) {
        return res.status(err.status).json({ status: err.status, type: err.scope, message: err.message });
    }

    if (err instanceof AppError) {
        return res.status(err.status).json({ status: err.status, type: err.type, message: err.message });
    }


    res.status(500).json({ message: err.message, err });
};

module.exports = errorHandler;