const Task = require('./models');

const createTask = async (task) => {
    try {
        const newTask = new Task(task);
        return await newTask.save();
    } catch (error) {
        return error;
    }
};

const getTasks = async () => {
    try {
        return await Task.find({});
    } catch (error) {
        return error;
    }
}

const getTaskById = async (id) => {
    try {
        return await Task.findById(id);
    } catch (error) {
        return error;
    }
}

const deleteTask = async (id) => {
    try {
        return await Task.findByIdAndDelete(id);
    } catch (error) {
        return error;
    }
};

const updateTask = async (id, task) => {


};

module.exports = { createTask, getTasks, getTaskById, deleteTask, updateTask };