const UserModel = require('./models');
const usersRepository = (UserModel) => {

    return {
        create: async (user) => {
            const newUser = new UserModel(user);
            return await newUser.save();
        },
        findAll: async () => {
            return await UserModel.find();
        },
        findById: async (id) => {
            return await UserModel.findById(id);
        },
        delete: async (id) => {
            return await UserModel.findByIdAndDelete(id);
        },
        findByEmail: async (email) => {
            return await UserModel.findOne({ email });
        },
    }
}

module.exports = usersRepository(UserModel);