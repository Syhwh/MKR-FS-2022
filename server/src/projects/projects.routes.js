const express = require('express');
const tokenValidator = require('../global/validators/tokenValidator');
const router = express.Router();

const { createProject, getProjects, getProjectById, deleteProject, updateProject } = require('./projects.controller');
const { createProjectValidator } = require('./validators/createProject.validator');


router.post('/projects', tokenValidator, createProjectValidator, createProject);
router.get('/projects', tokenValidator, getProjects);
router.get('/projects/:id', tokenValidator, getProjectById);
router.delete('/projects/:id', tokenValidator, deleteProject);
router.put('/projects/:id', tokenValidator, updateProject);


// router.get('/projects/:id/tasks', (req, res, next) => {}, (req, res, next) => {});

module.exports = router;