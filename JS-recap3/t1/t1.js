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

// add your code here
// https://www.w3schools.com/js/js_htmldom_collections.asp
const ul = document.querySelector('ul');

// ehto-operaattori / ternary
// ehto ? jostosi : josepätosi
// ehto && jostosi

// OK
// <input type="checkbox" checked>
// <input type="checkbox" checked="checked"></input>
//  <input type="checkbox" id="todo-${item.id}" ${item.completed && 'checked'}>

// EI OK
// <input type="checkbox" checked="true">
// ul.innerHTML = '';
todoList.forEach((item) => {
  const liElem = `
  <li>
    <input type="checkbox" id="todo-${item.id}" ${
    item.completed ? 'checked' : ''
  }>
    <label for="todo-${item.id}">${item.task}</label>
  </li>
  `;
  ul.insertAdjacentHTML('beforeend', liElem);
});
