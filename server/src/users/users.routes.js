const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getUserById } = require('./users.controller');


router.post('/users', createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
// router.delete('/users/:id', deleteProject);
// router.put('/users/:id', updateProject);


module.exports = router;