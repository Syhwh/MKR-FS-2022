import { createTaskElement } from './createTask.js';

export const updateUI = (tasksArray) => {
  const taskListElement = document.getElementById('tasks');
  taskListElement.innerHTML = '';
  tasksArray.forEach(({ id, title }) => {
    const taskEl = createTaskElement(id, title)
    taskListElement.appendChild(taskEl)
  });
};
