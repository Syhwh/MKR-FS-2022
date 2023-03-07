import { createServer } from 'http';
import connectDatabase from './config';
import app from './app';

const startServer = async () => {
  // Get port from environment and store in Express.
  await connectDatabase(process.env.MONGO_URI);

  const port = process.env.PORT || '3000';

  // Create HTTP server.
  const server = createServer(app);

  server.listen(port);
  server.on('listening', () => {
    console.log(`Listening on port ${port}`);
  });
};

startServer();
