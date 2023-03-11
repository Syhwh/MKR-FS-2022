const bcrypt = require('bcrypt');

const encryptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

const decryptPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = { encryptPassword, decryptPassword };