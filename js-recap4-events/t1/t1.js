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

const ul = document.querySelector('ul');

/**
 * Adds all todo tasks to DOM
 */
const renderList = () => {
  // reset ul always before rendering full liste
  ul.innerHTML = '';
  // add tasks
  todoList.forEach(item => {
    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed ? true : false;

    let label = document.createElement('label');
    label.innerText = item.task;
    label.htmlFor = `todo-${item.id}`;
    // console.dir(label);

    // event handling for item clicks (step 1)
    li.addEventListener('click', event => {
      // console.log('klikkasit:', event.target);
      item.completed = event.target.checked;
      //console.log('todo list', todoList);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);

    // step 4: add delete button
    const delButton = document.createElement('button');
    delButton.textContent = 'X';
    li.appendChild(delButton);
    delButton.addEventListener('click', () => {
      // etsittään poistettavan itemin indeksi vertaamalla eventin itemi
      // taulukon itemeihin
      const indexOfdeletedItem = todoList.findIndex(
        arrayItem => arrayItem == item
      );
      const deletedItem = todoList.splice(indexOfdeletedItem, 1);
      console.log('poistettu:', deletedItem, 'päivitetty lista', todoList);
      // päivitetään käyttöliittymä
      ul.removeChild(li);
    });
  });
};
renderList();

// Step 3: display add item dialog
const addItemDialog = document.querySelector('dialog');

const addTodoButton = document.querySelector('.add-btn');
addTodoButton.addEventListener('click', () => {
  console.log('add button clicked');
  addItemDialog.showModal();
});

const submitItemButton = addItemDialog.querySelector('button');
submitItemButton.addEventListener('click', event => {
  event.preventDefault();
  const newTaskText = addItemDialog.querySelector('input').value;
  const newTaskItem = {
    // tsekkaa vikan itemin id ja kasvata sitä yhdellä
    id: todoList[todoList.length - 1].id + 1,
    task: newTaskText,
    completed: false,
  };
  todoList.push(newTaskItem);
  addItemDialog.close();
  addItemDialog.querySelector('input').value = '';
  console.log('new task', newTaskItem);
  renderList();
});
