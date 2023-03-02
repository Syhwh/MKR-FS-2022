const taskRepository = require('./task.repository');

const createTask = async (task) => {
   return await taskRepository.createTask(task);
};

const getTasks = async () => {
    return await taskRepository.getTasks();
};

const getTaskById = async (id) => {
    return await taskRepository.getTaskById(id);
};

const deleteTask = async (id) => { 
    return await taskRepository.deleteTask(id);
};

const updateTask = async (id, task) => {
    return await taskRepository.updateTask(id, task);
};

module.exports = { createTask, getTasks, getTaskById, deleteTask, updateTask };