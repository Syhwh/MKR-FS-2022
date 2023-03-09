const Project = require('./models');
const mongoose = require('mongoose');


const createProject = async (project) => {
    try {
        const newProject = new Project(project);
        return await newProject.save();
    } catch (error) {
        return error;
    }
};

const getAllProjects = async () => {
    try {
        return await Project.find({});
    } catch (error) {
        return error;
    }
}

const getProjectById = async (id) => {
    try {
        console.log(id);
        const userId = mongoose.Types.ObjectId(id)
        const projects = await Project.findById(userId);
        console.log(projects);
        return projects;
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

module.exports = { createProject, getAllProjects, getProjectById, deleteProject, updateProject };