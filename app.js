const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

// CRUD - Create, Read, Update, Delete
// CRUD API - TASKS 
// GET /tasks
// GET /tasks/:id
// POST /tasks
// PUT /tasks/:id
// DELETE /tasks/:id
// REST API - Representational State Transfer
// 

// tasks object
// {
//   id: 1,
//   title: 'Task 1',
//   description: 'Task 1 description',
//   status: false
// }
let tasks = [];
app.get('/tasks', (request, response) => {
  response.status(200).json(tasks);
});

app.get('/tasks/:id', (request, response) => {
  // get id from request params
  const { id } = request.params;
  // find task by id -> db
  const task = tasks.filter(task => task.id === id);
  // validate task exists
  if (!task.length) {
    response.status(404).json({ message: 'Task not found' });
    return;
  }
  // send response
  response.status(200).json(task);
});

// POST /tasks -> create task
app.post('/tasks', (request, response) => {
  // get title and description from request body
  const { title, description } = request.body;
  // validate object
  if (!title || !description) {
    response.status(400).json({ message: 'Invalid request' });
    return;
  }
  // create task object
  const task = {
    id: uuidv4(),
    title,
    description,
    status: false
  };
  // add task object to tasks array
  tasks.push(task)
  // send response 
  response.status(201).json(tasks);
});


app.put('/tasks/:id', (request, response) => {
  // get id from request params
  const { id } = request.params;
  // get the elements from request body
  const { title, description, status } = request.body;

  // find task by id
  const task = tasks.filter(task => task.id === id)[0]; // []

  if (!task) {
    response.status(404).json({ message: 'Task not found' });
    return;
  }

  // update task object
  tasks.map(task => {
    if (task.id === id) {
      task.title = title ? title : task.title;
      task.description = description ? description : task.description;
      task.status = status ? status : task.status;
    }
    return task;
  });

  // send response
  response.status(200).json({ message: 'Task updated successfully', tasks: tasks.filter(task => task.id === id)[0] });

});




// DELETE /tasks/:id -> delete task
const deleteController = (request, response) => {
  const { id } = request.params;
  const task = tasks.filter(task => task.id === id)[0]; // []
  if (!task) {
    response.status(404).json({ message: 'Task not found' });
    return;
  }
  const filteredTasks = tasks.filter(task => task.id !== id);
  tasks = [...filteredTasks]
  response.status(200).json({ message: 'Task deleted successfully' });
};

app.delete('/tasks/:id', deleteController);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});