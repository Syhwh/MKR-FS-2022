const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Title is required'],
    },
    description:{
        type: String,
    },
    status:{
        type: Boolean,
        default: false,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    updatedAt:{
        type: Date,
        default: Date.now(),
    },
    // projectRef:{
    //     type: mongoose.Schema.Types.ObjectId,
    // },
});

const TaskModel= mongoose.model('Task', taskSchema);

module.exports = TaskModel;