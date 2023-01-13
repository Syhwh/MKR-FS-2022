/*localStorage.setItem('key', 'this is the value')
console.log(localStorage.getItem('demo'))


const getTasks = JSON.parse(localStorage.getItem('tasks'))
console.log(getTasks)
console.log(getTasks[0])
*/

// const tasksDemo = [{ title: 'task 1' }]

// localStorage.setItem('tasks', JSON.stringify(tasksDemo))


/**
// function updateUI() {
//   const taskListElement = document.getElementById('tasks');
//   taskListElement.innerHTML = '';
//   taskList.forEach((task) => {
//     const taskEl = document.createElement('li');
//     taskEl.textContent = task.title
//     taskListElement.appendChild(taskEl)
//   });
// }
 */

//functions

const updateUI = (tasksArray) => {
  const taskListElement = document.getElementById('tasks');
  taskListElement.innerHTML = '';
  tasksArray.forEach(({ id, title }) => {
    const taskEl = createTaskElement(id, title)
    taskListElement.appendChild(taskEl)
  });
}

const deleteTask = (array, index) => {
  return array.filter((element) => element.id != index)
}

const createIcon = (type, action) => {
  const icon = document.createElement('i');
  icon.classList = `fas ${type}`;
  // icon.classList = action;
  return icon;
};


const createTaskElement = (id, title) => {
  const task = document.createElement('li');
  task.id = id;
  const iconCircle = createIcon('fa-circle');
  const iconPen = createIcon('fa-pen', 'edit');
  const iconTrash = createIcon('fa-trash', 'delete');
  const actions = document.createElement('div');
  actions.classList = 'actions';
  actions.appendChild(iconPen);
  actions.appendChild(iconTrash);
  const text = document.createElement('p');
  text.classList = 'text';
  text.textContent = title;

  task.appendChild(iconCircle);
  task.appendChild(text);
  task.appendChild(text);
  task.appendChild(actions);
  return task
}

//Elements
const tasksList = document.getElementById('tasks');
const taskInput = document.getElementById('input');
const addTask = document.getElementById('addTask');

let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

// execute

function updateTasks() {
  taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  updateUI(taskList);
}

updateUI(taskList);

addTask.addEventListener('click', () => {
  taskList.push({ id: Date.now(), title: taskInput.value })
  taskInput.value = '';
  localStorage.setItem('tasks', JSON.stringify(taskList))
  updateUI(taskList);
});



tasksList.addEventListener('click', (e) => {
  const classList = e.target.classList
  const liElementFromActionIcon = e.target.parentElement.parentElement;

  if (classList.value === 'fas fa-trash') {
    const taskId = Number(liElementFromActionIcon.id);
    console.log(taskId)
    const newArray = deleteTask(taskList, taskId);
    console.log(newArray)
    localStorage.setItem('tasks', JSON.stringify(newArray))
    updateTasks()
  }

  if (classList.value === 'fas fa-circle') {
    const icon = e.target;
    const text = icon.nextElementSibling;
    text.classList.toggle('done')
  }
  console.log(classList)

})