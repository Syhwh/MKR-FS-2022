require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbs');
const AppError = require('./global/errorHandling/AppError.js/AppError');
const errorHandler = require('./global/errorHandling/middleware/errorHandler');

const app = express();

connectDB();

app.use(express.json());

app.use('/api', require('./tasks/tasks.routes'));
app.use('/api', require('./projects/projects.routes'));
app.use('/api', require('./users/users.routes'));
// app.get('/',    (req, res) => { res.send('Hello World!'); });
app.use('/', require('./auth/auth.routes'));

app.use('*', (req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});
console.log(process.env.MY_HOST);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
