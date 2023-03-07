import express, { json } from 'express';

import tasksRoutes from './tasks/tasks.routes';
import projectsRoutes from './projects/projects.routes';
import usersRoutes from './users/users.routes';
import authRoutes from './auth/auth.routes';

const app = express();

app.use(json());

app.use('/api', tasksRoutes);
// app.use('/api', projectsRoutes);
// app.use('/api', usersRoutes);
// app.use('/', authRoutes);

// app.use('*', (req, res, next) => {
//   res.status(404).json({ message: 'Not found' });
// });
// console.log(process.env.MY_HOST);



export default app;
