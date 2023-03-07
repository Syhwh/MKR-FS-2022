const mongoose = require('mongoose');
const userService  = require('./instances');


const createUser = async (req, res) => {

    const user = {
        email: req.body.email,
        password: req.body.password,
    }
    console.log(user);
    try {
        const newUser = await userService.createUser(user);
        console.log(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        throw new Error(error.message);
    }
}
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();

        res.status(200).json(users)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: err.message });
    }
}
const getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { createUser, getAllUsers, getUserById }