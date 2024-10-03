// main.js
import { addTodoItem } from './dom.js';
import { clearInput } from './utils.js';

document.getElementById('todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('todo-input');
  const task = input.value;
  if (task) {
    addTodoItem(task);
    clearInput(input);
  }
});
