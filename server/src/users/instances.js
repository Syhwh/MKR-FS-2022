const usersService = require('./users.service');
const usersRepository = require('./users.repository');
const passWordService = require('../global/hashPassword');
const jwtService = require('../global/jwt');

const userService = usersService(usersRepository, passWordService, jwtService);

module.exports = userService;
