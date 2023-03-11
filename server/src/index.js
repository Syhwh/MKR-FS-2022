require('dotenv').config();

const app = require('./app');
const databaseConnection = require('./config/databaseConnection');
const http = require('http');

const startServer = async () => {
    await databaseConnection(process.env.MONGO_URI);

    const server = http.createServer(app);
    server.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
};

startServer();