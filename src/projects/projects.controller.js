const mongoose = require('mongoose');
const Project = require("./models");


const createProject = async (req, res) => {
    const { title, description } = req.body;
    const project = {
        title,
        description,
    }
    try {
        const newProject =  new Project(project);
        const projectSaved = await newProject.save();
        res.status(201).json(projectSaved);
    } catch (error) {
        throw new Error(error);
    }
}
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({}).populate('tasks')

        res.status(200).json(projects)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: err.message });
    }
}
const getProjectById = async (req, res, next) => {
    try {
        // const project = await Project.findById(req.params.id)
        const id = mongoose.Types.ObjectId(req.params.id);
        const project = await Project.aggregate([
            {
                $match: {_id: id}
            },
            {
                $lookup: {
                    from: 'tasks',
                    localField: '_id',
                    foreignField: 'project',
                    as: 'tasks'
                }
            }
        ])
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { createProject, getProjects, getProjectById, }