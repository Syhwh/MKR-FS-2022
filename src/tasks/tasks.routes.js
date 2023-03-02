const express = require('express');
const router = express.Router();

const { createTask, getTasks, getTask, deleteTask, updateTask } = require('./tasks.controller');
const { createTaskValidator } = require('./validators/task.createValidator');

router.post('/tasks', createTaskValidator, createTask);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);


module.exports = router;