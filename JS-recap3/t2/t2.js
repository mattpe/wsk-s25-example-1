// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];
// <ul>
//  <li>
//    <input type="checkbox" id="todo-3" checked >
//    <label for="todo-3">Buy bread</label>
//  </li>
// </ul>

// add your code here
const ul = document.querySelector('ul');

todoList.forEach((item) => {
  let li = document.createElement('li');

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${item.id}`;
  checkbox.checked = item.completed ? true : false;

  let label = document.createElement('label');
  label.innerText = item.task;
  label.htmlFor = `todo-${item.id}`;
  // console.dir(label);

  label.addEventListener('click', () => {
    alert('Klikkasit minua!!!');
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  ul.appendChild(li);
});
