

const mockTask = {
  _id: '609a1aa385dfdf4a50ad42b1',
  title: 'Write unit tests',
  description: 'Write comprehensive unit tests for tasksRepository functions',
  dueDate: new Date('2023-03-10T00:00:00.000Z'),
};

const mockTaskModel = jest.fn();

const mockTasksRepository = {
  createTask: jest.fn(),
  getTasks: jest.fn(),
};

jest.mock('./task.repository', () => {
  return (TaskModel) => {
    mockTaskModel.mockReturnValue(TaskModel);
    return mockTasksRepository;
  };
});

describe('tasksRepository', () => {
  let taskModel;
  let tasksRepo;

  beforeAll(() => {
    // taskModel = {
    //   create: jest.fn(),
    //   find: jest.fn(),
    //   findById: jest.fn(),
    //   findByIdAndDelete: jest.fn(),
    //   findByIdAndUpdate: jest.fn(),
    //   save: jest.fn().mockResolvedValue(mockTask),
    //   TaskModel: jest.fn().mockReturnValue({
    //     save: jest.fn().mockResolvedValue(mockTask),
    //   }),
    // };
    // tasksRepo = tasksRepository(taskModel);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('createTask', () => {
    it.only('should create a new task', async () => {
      // taskModel.save.mockResolvedValue(mockTask);

      const result = await mockTasksRepository.createTask(mockTask);

      expect(mockTasksRepository.save).toHaveBeenCalledWith(mockTask);
      expect(result).toEqual(mockTask);
    });

    it.only('should handle errors during creation', async () => {
      const errorMsg = 'Some error occurred while creating task';
      // taskModel.create.mockRejectedValue(new Error(errorMsg));

      const result = await mockTasksRepository.createTask(mockTask);

      expect(mockTasksRepository.save).toHaveBeenCalledWith(mockTask);
      expect(result).toEqual(new Error(errorMsg));
    });
  });

  // describe('getTasks', () => {
  //   it('should get all tasks', async () => {
  //     taskModel.find.mockResolvedValue([mockTask]);

  //     const result = await tasksRepo.getTasks();

  //     expect(taskModel.find).toHaveBeenCalledWith({});
  //     expect(result).toEqual([mockTask]);
  //   });

  //   it('should get filtered tasks', async () => {
  //     const filter = { title: 'Write unit tests' };
  //     taskModel.find.mockResolvedValue([mockTask]);

  //     const result = await tasksRepo.getTasks(filter);

  //     expect(taskModel.find).toHaveBeenCalledWith(filter);
  //     expect(result).toEqual([mockTask]);
  //   });

  //   it('should handle errors during retrieval', async () => {
  //     const errorMsg = 'Some error occurred while retrieving tasks';
  //     taskModel.find.mockRejectedValue(new Error(errorMsg));

  //     const result = await tasksRepo.getTasks();

  //     expect(taskModel.find).toHaveBeenCalledWith({});
  //     expect(result).toEqual(new Error(errorMsg));
  //   });
  // });

  // describe('getTaskById', () => {
  //   it('should get a task by id', async () => {
  //     taskModel.findById.mockResolvedValue(mockTask);

  //     const result = await tasksRepo.getTaskById(mockTask._id);

  //     expect(taskModel.findById).toHaveBeenCalledWith(mockTask._id);
  //     expect(result).toEqual(mockTask);
  //   });

  //   it('should handle errors during retrieval', async () => {
  //     const errorMsg = 'Some error occurred while retrieving task';
  //     taskModel.findById.mockRejectedValue(new Error(errorMsg));

  //     const result = await tasksRepo.getTaskById(mockTask._id);

  //     expect(taskModel.findById).toHaveBeenCalledWith(mockTask._id);
  //     expect(result).toEqual(new Error(errorMsg));
  //   });
  // });

  // describe('deleteTask', () => {
  //   it('should delete a task by id', async () => {
  //     taskModel.findByIdAndDelete.mockResolvedValue(mockTask);

  //     const result = await tasksRepo.deleteTask(mockTask._id);

  //     expect(taskModel.findByIdAndDelete).toHaveBeenCalledWith(mockTask._id);
  //     expect(result).toEqual(mockTask);
  //   });
  // });
});
