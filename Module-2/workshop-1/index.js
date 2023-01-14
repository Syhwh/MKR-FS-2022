
import { updateUI } from './js/updateUI.js';
import { deleteTask } from './js/deleteTask.js';

//Elements
const tasksList = document.getElementById('tasks');
const taskInput = document.getElementById('input');
const addTask = document.getElementById('addTask');
let taskList = JSON.parse(localStorage.getItem('tasks')) || [];


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
  if (classList.value === 'fas fa-pen') {
    // your code goes here
    const text = e.target.parentElement.previousSibling;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = text.textContent;
    e.target.parentElement.parentElement.replaceChild(input, text)
    console.log(text)
  }
  if (classList.value === 'fas fa-trash') {
    const taskId = Number(liElementFromActionIcon.id);
    const newArray = deleteTask(taskList, taskId);
    localStorage.setItem('tasks', JSON.stringify(newArray))
    updateTasks();
  }

  if (classList.value === 'fas fa-circle') {
    const icon = e.target;
    const text = icon.nextElementSibling;
    text.classList.toggle('done')
  }
  console.log(classList)

})