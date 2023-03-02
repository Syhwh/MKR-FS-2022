const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi)

const schema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(30)
        .required(),
    description: Joi.string().required(),
    project: Joi.objectId().required(),
});

const createTaskValidator = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        console.log(error);
        return res.status(400).json({
            message: error.details[0].message,
        });
    }
    next();
};

module.exports = { createTaskValidator }