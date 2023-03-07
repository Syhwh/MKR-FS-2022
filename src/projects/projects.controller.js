const projectService = require('./projects.services');
const logger = require('../global/logger');

const createProject = async (req, res, next) => {
  const { title2, description2 } = req.body;
  try {
    const { message, savedProject } = await projectService.createProject({ title, description });
    logger.info('New project created');
    res.status(200).json({ message, savedProject });
  } catch (error) {
    logger.error(error.message, { label: 'Create Project controller' });
    next(error);
  }
};
const getProjects = async (req, res) => {
  try {
    const projects = await projectService.find({});
    res.status(200).json(projects);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: err.message });
  }
};
const getProjectById = async (req, res, next) => {
  try {
    // const project = await Project.findById(req.params.id)
    const id = mongoose.Types.ObjectId(req.params.id);
    const project = await projectService.aggregate([
      {
        $match: { _id: id },
      },
      {
        $lookup: {
          from: 'tasks',
          localField: '_id',
          foreignField: 'project',
          as: 'tasks',
        },
      },
    ]);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
const deleteProject = async (req, res) => {};
const updateProject = async (req, res) => {};

module.exports = { createProject, getProjects, getProjectById, deleteProject, updateProject };
