const Joi = require("joi");
// Joi.objectId = require('joi-objectid')(Joi)

const schema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(30)
        .required(),
    description: Joi.string().required(),
    // project: Joi.objectId().required(),
});

const createProjectValidator = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return next(error);
    }
    next();
};

module.exports = { createProjectValidator }