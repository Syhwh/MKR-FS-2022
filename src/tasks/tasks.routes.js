import { Router } from 'express';
import { createTaskValidator } from './validators/task.createValidator';
import controller from './instances';

const router = Router();

router.post('/tasks', createTaskValidator, controller.createTask);
router.get('/tasks', controller.getTasks);
router.get('/tasks/:id', controller.getTask);
router.delete('/tasks/:id', controller.deleteTask);
router.put('/tasks/:id', controller.updateTask);

export default router;
