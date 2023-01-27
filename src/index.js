import 'lodash';
import './style.css';
import addTodo from './modules/addTodo.js';
import removeTodo from './modules/removeTodo.js';
import { displayAllTasks, taskDescriptionView } from './modules/drawTask.js';
import { updateTask, completeTask } from './modules/updateTask.js';
import getTasks from './modules/localStorage.js';

const todoContainer = document.getElementById('todoContainer');
const descriptionContainer = document.querySelector('.description-list');
const form = document.querySelector('.form');
const clearTask = document.querySelector('.button-for-reset');
const tasksArray = getTasks;

// function to display UI
displayAllTasks(getTasks, todoContainer);
taskDescriptionView(descriptionContainer);

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// addTodo
const sendTask = document.querySelector('#sendTask');
let currentValue = '';
let exist = false;

// function to compare before adding task
const compareTasks = (getTasks, currentTask) => {
  getTasks.forEach((task) => JSON.stringify(task.decription) === JSON.stringify(currentTask));
};

const taskElement = document.querySelector('#description');
taskElement.addEventListener('change', (e) => {
  taskElement.textContent = e.target.value;
  currentValue = e.target.value;
});

sendTask.addEventListener('click', () => {
  /* eslint-disable */
  const clearInput = () => (currentValue = '');
  if (compareTasks(getTasks, currentValue)) {
    exist = true;
  }

  if (exist === false && currentValue.length !== 0) {
    addTodo(currentValue, tasksArray, getTasks);
    clearInput();
    displayAllTasks(getTasks, todoContainer);
  }
});

// enable "enter key" to add Task
const inputValue = document.getElementById('description');
inputValue.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && inputValue.value.length !== 0) {
    event.preventDefault();
    addTodo(inputValue.value, tasksArray, getTasks);
    displayAllTasks(getTasks, todoContainer);
    inputValue.value = '';
  }
});

// remove todo and update todo
const ulItems = todoContainer.getElementsByTagName('li');
for (let i = 0; i < ulItems.length; i += 1) {
  ulItems[i].addEventListener('click', () => {
    const buttonDel = ulItems[i].children[2];
    const buttonEdit = ulItems[i].children[3];

    buttonDel.style.display = 'inline-block';
    buttonEdit.style.display = 'none';

    // delete task
    buttonDel.addEventListener('click', () => {
      removeTodo(getTasks, i);
      buttonEdit.style.display = 'inline-block';
      buttonDel.style.display = 'none';
      displayAllTasks(getTasks, todoContainer);
    });
  });

  // update task description
  const updateFiled = ulItems[i].children[1];
  updateFiled.addEventListener('input', () => {
    const updateValue = updateFiled.textContent.trim();
    updateTask(i, updateValue);
  });

  // update checkbox
  const selectedCheckbox = ulItems[i].children[0];
  selectedCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      completeTask(i, e.target.checked);
      updateFiled.innerHTML = updateFiled.innerHTML.strike();
      updateTask(i, updateFiled.innerHTML);
    }
    if (e.target.checked === false) {
      completeTask(i, e.target.checked);
      updateFiled.innerHTML = updateFiled.innerHTML.replace('<strike>', '');
      updateTask(i, updateFiled.innerHTML);
    }
  });
}

// clear all completed tasks
const clearCompleted = () => {
  getTasks.forEach((object, index) => {
    /* eslint-disable */
    let counter = 0;
    if (object.completed === true) {
      removeTodo(getTasks, index);
      counter += 1;
    }
  });
};

clearTask.addEventListener('click', () => {
  clearCompleted();
  displayAllTasks(getTasks, todoContainer);
});
