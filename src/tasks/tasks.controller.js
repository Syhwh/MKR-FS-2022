import { find, findById } from './models';
/**
 * @typedef {Object} TaskService
 * @property {Function} createTask
 * @property {Function} getTasks
 * @property {Function} getTask
 * @property {Function} deleteTask
 * @property {Function} updateTask
 */
/**
 *
 * @param {TaskService} taskService
 * @returns
 */
const taskController = (taskService) => {
  return {
    createTask: async (req, res) => {
      const { title, description, project } = req.body;
      // create a new task
      const task = {
        title,
        description,
        project,
      };
      try {
        const newTask = await taskService.createTask(task);
        res.status(201).json(newTask);
      } catch (error) {
        throw new Error(error);
      }
    },
    getTasks: async (req, res) => {
      try {
        const tasks = await find().populate('project');
        res.status(200).json(tasks);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: err.message });
      }
    },
    getTask: async (req, res) => {
      try {
        const task = await findById(req.params.id);
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    deleteTask: async (req, res) => { },
    updateTask: async (req, res) => { },
  };
};

export default taskController;
