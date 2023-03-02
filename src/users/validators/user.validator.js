const createUSerValidator = (req, res, next) => {
    console.log(req.body);
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.passwordConfirmation) {
        return res.status(400).json({
            message: "Name, email and password are required",
        });
    }
    else if(!req.body.name) {
        return res.status(400).json({
            message: "Name is required",
        });
    }
    else if(!req.body.email) {
        return res.status(400).json({
            message: "Email is required",
        });
    }
    else if(!req.body.password) {
        return res.status(400).json({
            message: "Password is required",
        });
    }

     next();
};