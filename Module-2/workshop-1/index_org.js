'use strict'

/**
 * Get the input
 */
const taskInput = document.getElementById('input');
const addTask = document.getElementById('addTask');
const tasksList = document.getElementById('tasks');

addTask.addEventListener('click', () => {
  console.log(taskInput.innerText)
  console.log(taskInput.value)
  tasksList.appendChild(createTaskElement(taskInput.value));
  taskInput.value = '';
});



const createIcon = (type, action) => {
  const icon = document.createElement('i');
  icon.classList = `fas ${type}`;
  // icon.classList = action;
  return icon;
};


const createTaskElement = (title) => {
  const task = document.createElement('li');
  task.id = Date.now();
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


tasksList.addEventListener('click', (e) => {
  const classList = e.target.classList
  const liElementFromActionIcon = e.target.parentElement.parentElement;
  if (classList.value === 'fas fa-pen') {
    // const icon = e.target.parentElement
    // const li = e.target.parentElement.parentElement;
    // li.appendChild(editTask('demo'))
    // console.log('edit')
  }
  if (classList.value === 'fas fa-trash') {
    liElementFromActionIcon.remove()
  }
  if (classList.value === 'fas fa-circle') {
    const icon = e.target;
    const text = icon.nextElementSibling;
    text.classList.toggle('done')
  }
  console.log(classList)

})


const editTask = (currentText) => {
  const input = document.createElement('input');
  input.value = currentText;
}

// tasksList.appendChild(createTaskElement('Test task'));

