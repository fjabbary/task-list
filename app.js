const form = document.querySelector('form');
list = document.querySelector('ul'),
  addTaskBtn = document.querySelector('.btn-primary'),
  taskInput = document.getElementById('new-task'),
  body = document.body,
  btnClear = document.querySelector('.btn-dark'),
  filterInput = document.querySelector('#filter-task');

//Event Listeners
form.addEventListener('submit', addTask);
body.addEventListener('click', removeTask);
btnClear.addEventListener('click', clearTasks);
filterInput.addEventListener('keyup', filterTask);

//Add task to the list
function addTask(e) {
  //Create li
  const li = document.createElement('li');
  //Add class to li
  li.className = 'list-group-item';
  //Add text to li
  li.appendChild(document.createTextNode(taskInput.value))
  //Create Link and append it to li
  const a = document.createElement('a');
  a.innerHTML = '<i class="far fa-trash-alt"></i>';
  li.appendChild(a);
  list.appendChild(li);
  taskInput.value = '';

  e.preventDefault();
}

//Remove the task from the list
function removeTask(e) {
  if (e.target.classList.contains('far')) {
    e.target.parentElement.parentElement.remove();
  }
}

// Clear Task from UI
function clearTasks() {
  list.innerHTML = '';
}


//Filter task in the list
function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('li').forEach(task => {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().includes(text)) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
}