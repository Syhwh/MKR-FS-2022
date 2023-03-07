const tasksRepository = (TaskModel) => {
  return {
    createTask: async (task) => {
      try {
        const newTask = new TaskModel(task);
        return await newTask.save();
      } catch (error) {
        return error;
      }
    },
    getTasks: async (filter = {}) => {
      try {
        return await TaskModel.find(filter);
      } catch (error) {
        return error;
      }
    },
    getTaskById: async (id) => {
      try {
        return await TaskModel.findById(id);
      } catch (error) {
        return error;
      }
    },
    deleteTask: async (id) => {
      try {
        return await TaskModel.findByIdAndDelete(id);
      } catch (error) {
        return error;
      }
    },
    updateTask: async (id, task) => { },
  };
};

export default tasksRepository;
