const ServiceError = require("../global/errorHandling/serviceError/ServiceError");

const jwt = require('jsonwebtoken');

const usersService = (userRepository, passWordService) => {
    return {
        getAllUsers: () => {
            try {
                return userRepository.findAll();
            } catch (error) {
                throw new ServiceError(error.message, 404, "usersService.getAll");
            }
        },
        getUserById: async (id) => {
            try {
                return await userRepository.findById(id);
            } catch (error) {
                throw new ServiceError(error.message, 404, "usersService.findUserById");
            }
        },
        createUser: async ({ email, password }) => {
            try {

                const user = await userRepository.findByEmail(email);

                if (user) {
                    throw new ServiceError("User already exist", 400, "usersService.createUser");
                }

                const hashedPassword = await passWordService.encryptPassword(password);


                return await userRepository.create({ email, password: hashedPassword });
            } catch (error) {
                throw new ServiceError(error.message, 404, "usersService.createUser");
            }
        },
        getUser: async (email, password) => {
            try {
                const user = await userRepository.findByEmail(email);

                if (!user) {
                    return false
                }

                const isMatch = await passWordService.decryptPassword(password, user.password);;

                console.log(isMatch);
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    userId: '123456'
                }, 'mySecret', { algorithm: 'HS256' })

                return token;
            } catch (error) {
                throw new ServiceError(error.message, 404, "usersService.getUser");
            }
        },

    }


};

module.exports = usersService;