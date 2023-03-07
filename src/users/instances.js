const usersService = require('../users/users.service');
const usersRepository = require('../users/users.repository');
const passWordService = require('../global/hashPassword');

const userService = usersService(usersRepository, passWordService);

module.exports = userService;
