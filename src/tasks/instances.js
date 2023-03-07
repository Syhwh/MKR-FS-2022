import tasksRepository from './task.repository';
import taskService from './task.services';
import TaskModel from './models';
import taskController from './tasks.controller';
import logger from '../global/logger';
import ServiceError from '../global/errorHandling/serviceError';

const repository = tasksRepository(TaskModel);

const service = taskService(repository, logger, ServiceError);

const controller = taskController(service);

export default controller;
