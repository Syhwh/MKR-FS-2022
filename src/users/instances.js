const usersService = require('./users.service');
const usersRepository = require('./users.repository');
const passWordService = require('../global/hashPassword');

const userService = usersService(usersRepository, passWordService);

module.exports = userService;
