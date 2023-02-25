const express = require('express');
const connectDB = require('./config/dbs');

const app = express();

connectDB();

app.use(express.json());

app.use('/api', require('./tasks/tasks.routes'));   

// app.get('/',    (req, res) => { res.send('Hello World!'); });


app.listen(3000, () => {
    console.log('Listening on port 3000');
});