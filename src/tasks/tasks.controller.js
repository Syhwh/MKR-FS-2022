
const tasks = [];

const Task = require('./models');


const createTask = async (req, res) => {
    // validate request body
    if (!req.body) {
        return res.status(400).send({
            message: "Task content can not be empty",
        });
    }
    //
    // create a new task
    const task = {

        description: req.body.description,
    };
    // save task to the database
    try {

        const taskSaved = await Task.create(task);
        res.status(201).json(taskSaved);
    } catch (err) {
        res.status(500).json({ message: err.message });

    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    } catch (error) {
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