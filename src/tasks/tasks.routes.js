const express = require('express');
const router = express.Router();

const { createTask, getTasks, getTask, deleteTask, updateTask } = require('./tasks.controller');

router.post('/tasks', createTask);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);


module.exports = router;