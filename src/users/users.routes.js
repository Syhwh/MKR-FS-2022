const express = require('express');
const router = express.Router();

const { createProject, getProjects, getProjectById, deleteProject, updateProject } = require('./users.controller');


router.post('/projects', createProject);
router.get('/projects', getProjects);
router.get('/projects/:id', getProjectById);
router.delete('/projects/:id', deleteProject);
router.put('/projects/:id', updateProject);


module.exports = router;