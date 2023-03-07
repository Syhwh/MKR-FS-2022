/**
 * @param {function} taskRepository
 * @param {function} logger
 * @param {Error} ServiceError
 * @returns {Object} taskService
 */
const taskService = (taskRepository, logger, ServiceError) => {
  return {
    /**
     * Task object.
     * @typedef {Object} Task
     * @property {string} title - The title of the task.
     * @property {string | undefined} description - The task description.
     * @property {ObjectId} project - The project id of the task.
     */

    /**
     * @param {Task} task
     * @returns {Promise<Task>}
     */
    createTask: async (task) => {
      try {
        logger.info('Creating a new task', 200, 'taskService.createTask');
        return taskRepository.createTask(task);
      } catch (error) {
        logger.error('Error creating a new task', 500, 'taskService.createTask');
        throw new ServiceError(error.message);
      }
    },
    /**
     *
     * @returns {Promise<Task[]>}
     */
    getAllTasks: async () => {
      return taskRepository.getTasks();
    },
    /**
     * @param {string} id task id
     * @returns {Promise<Task> | null}
     */
    getTaskById: async (id) => {
      return taskRepository.getTaskById(id);
    },
    /**
     * @param {string} id
     * @returns {Promise<Task> | null}
     */
    deleteTask: async (id) => {
      return taskRepository.deleteTask(id);
    },
    /**
     * @param {string} id id of the task to update
     * @param {Task} task task object
     * @returns {Promise<Task> | null}
     */
    updateTask: async (id, task) => {
      return taskRepository.updateTask(id, task);
    },
  };
};

export default taskService;
