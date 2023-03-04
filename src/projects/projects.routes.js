const express = require('express');
const router = express.Router();

const { createProject, getProjects, getProjectById, deleteProject, updateProject } = require('./projects.controller');
const { createProjectValidator } = require('./validators/createProject.validator');


router.post('/projects', createProjectValidator, createProject);
router.get('/projects', getProjects);
router.get('/projects/:id', getProjectById);
router.delete('/projects/:id', deleteProject);
router.put('/projects/:id', updateProject);


// router.get('/projects/:id/tasks', (req, res, next) => {}, (req, res, next) => {});

module.exports = router;