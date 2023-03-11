
const tasks = [];

const Task = require('./models');
const tasksService = require('./task.services');


const createTask = async (req, res) => {

    const { title, description,project } = req.body;
    // create a new task
    const task = {
        title,
        description,
        project
    };
    try {
        const newTask = await tasksService.createTask(task);
        res.status(201).json(newTask);
    } catch (error) {
        throw new Error(error);
    }

};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('project')
        res.status(200).json(tasks)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: err.message });
    }

};

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

const deleteTask = async (req, res) => { };
const updateTask = async (req, res) => { };

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
};