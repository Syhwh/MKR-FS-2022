
const express = require('express');
const errorHandler = require('../global/errorHandling/middleware/errorHandler');
const app = express();

// Global middlewares
app.use(express.json());


// Routes
app.use('/api', require('../tasks/tasks.routes'));
app.use('/api', require('../projects/projects.routes'));
app.use('/api', require('../users/users.routes'));
app.use('/', require('../auth/auth.routes'))

app.use('*', (req, res, next) => {
    res.status(404).json({ message: 'Not found' });
});

app.use(errorHandler);

module.exports = app;