const ServiceError = require('../global/errorHandling/serviceError/ServiceError');
const projectRepository = require('./projects.repository');

const createProject = async (project) => {
    try {
        const savedProject = await projectRepository.createProject(project);
        // send email
        // emailService.sendEmail('new project created');
        // send notification
        // notificationService.sendNotification('new project created');
        console.log(savedProject);
        return { message: 'Project created', savedProject };
    } catch (error) {
        throw new ServiceError( "project failed", 400, 'Create Project service');
    }
};

const getAllProjects = async () => {
    return await projectRepository.getAllProjects();
};

const getProjectById = async (id) => {
    return await projectRepository.getProjectById(id);
};

const deleteProject = async (id) => {
    return await projectRepository.deleteProject(id);
};

const updateProject = async (id, project) => {
    return await projectRepository.updateProject(id, project);
};

module.exports = { createProject, getAllProjects, getProjectById, deleteProject, updateProject };