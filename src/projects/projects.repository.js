const  Project  = require('./models');


const createProject = async (project) => {
    try {
        const newProject = new Project(project);
        return await newProject.save();
    } catch (error) {
        return error;
    }
};

const getProjects = async () => {
    try {
        return await Project.find({});
    } catch (error) {
        return error;
    }
}

const getProjectById = async (id) => {
    try {
        return await Project.findById(id);
    } catch (error) {
        return error;
    }
}

const deleteProject = async (id) => {
    try {
        return await Project.findByIdAndDelete(id);
    } catch (error) {
        return error;
    }
};

const updateProject = async (id, Project) => {

    try {
        return await Project.findByIdAndUpdate(id, Project, { new: true })
    } catch (error) {
        
    }

};

module.exports = { createProject, getProjects, getProjectById, deleteProject, updateProject };