
import { updateUI } from './js/updateUI.js';
import { deleteTask } from './js/deleteTask.js';
import { updateTask } from './js/updateTask.js';

function saveTask(tasksArray, input,) {
  tasksArray.push({ id: Date.now(), title: input.value })
  localStorage.setItem('tasks', JSON.stringify(tasksArray))
}

function updateTasks(newTasksArray) {
  localStorage.setItem('tasks', JSON.stringify(newTasksArray));
  return [...newTasksArray]
}
//Elements
const tasksList = document.getElementById('tasks');
const taskInput = document.getElementById('input');
const addTask = document.getElementById('addTask');

function loadTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function createTask() {
  saveTask(taskList, taskInput);
  taskInput.value = '';
  updateUI(taskList);
}


let taskList = loadTasks();

updateUI(taskList);

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (!validateInput(taskInput)) return;
    createTask();
  }
});

addTask.addEventListener('click', () => {
  if (!validateInput(taskInput)) return;
  createTask();
});


function validateInput(input) {
  if (input.value === '') {
    alert('Please enter a task');
    return false;
  }
  return true;
}

tasksList.addEventListener('click', (e) => {
  const classList = e.target.classList
  const liElementFromActionIcon = e.target.parentElement.parentElement;
  if (classList.value === 'fas fa-pen') {
    const text = e.target.parentElement.previousSibling;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = text.textContent;
    e.target.parentElement.parentElement.replaceChild(input, text);

    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const text = document.createElement("p");
        text.classList.add("text");
        text.innerHTML = input.value;
        e.target.parentNode.parentNode.replaceChild(text, input);
        const updatedTasks = updateTask(taskList, Number(liElementFromActionIcon.id), text.textContent);
        taskList = updateTasks(updatedTasks);
        updateUI(taskList);
      }
    });
  }
  if (classList.value === 'fas fa-trash') {
    const taskId = Number(liElementFromActionIcon.id);
    const newTasks = deleteTask(taskList, taskId);
    taskList = updateTasks(newTasks);
    updateUI(taskList);
  }

  if (classList.value === 'fas fa-circle') {
    const icon = e.target;
    const text = icon.nextElementSibling;
    text.classList.toggle('done')
  };

})

// function to edit tasks