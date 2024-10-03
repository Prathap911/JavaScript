// dom.js
export function addTodoItem(task) {
    const li = document.createElement('li');
    li.textContent = task;
    document.getElementById('todo-list').appendChild(li);
  }
  