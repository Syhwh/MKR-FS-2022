const usersService = require('../users/users.service');
const usersRepository = require('../users/users.repository');
const passWordService = require('../global/hashPassword');
const jwtService = require('../global/jwt');

const userService = usersService(usersRepository, passWordService, jwtService);

module.exports = userService;
