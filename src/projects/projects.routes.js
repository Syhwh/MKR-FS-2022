const express = require('express');
const router = express.Router();

const { createProject, getProjects, getProjectById } = require('./projects.controller');


router.post('/projects',  createProject);
router.get('/projects', getProjects);
router.get('/projects/:id', getProjectById);
// router.delete('/projects/:id', deleteTask);
// router.put('/projects/:id', updateTask);


module.exports = router;