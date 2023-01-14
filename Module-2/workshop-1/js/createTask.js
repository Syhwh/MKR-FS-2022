import { createIcon } from './createIcon.js';

export const createTaskElement = (id, title) => {
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
};
