//Define UL Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const cleanBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();
 //Load all event Listeners
 function loadEventListeners() {
     //Add all tasks
     form.addEventListener('submit', addTask);
     // remove task event
     taskList.addEventListener('click', removeTask);
 }

 //add Task
  function addTask(e) {

    if(taskInput.value === ''){
        alert('Add a task');
    }
    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html 
    link.innerHtml = '<i class="fa fa-remove"></li>';
    // Apend the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // clear input
    taskInput.value = '';

    console.log(li);

      e.preventDefault();
  }

  // remove task
  function removeTask(e) {
      console.log(e.target);
  }