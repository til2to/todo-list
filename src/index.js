import 'lodash';
import './style.css';
import addTodo from './modules/addTodo.js';
import removeTodo from './modules/removeTodo.js';
import { displayAllTasks, taskDescriptionView } from './modules/drawTask.js';
import { updateTask, completeTask } from './modules/updateTask.js';
// import getTasks from './modules/localStorage.js';

let getTasks = JSON.parse(window.localStorage.getItem('tasks')) || [];
export default getTasks;

const todoContainer = document.getElementById('todoContainer');
const descriptionContainer = document.querySelector('.description-list');
const form = document.querySelector('.form');
const clearTask = document.querySelector('.button-for-reset');

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
    addTodo(currentValue, getTasks);
    clearInput();
    displayAllTasks(getTasks, todoContainer);
  }
});

// enable "enter key" to add Task
const inputValue = document.getElementById('description');
inputValue.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && inputValue.value.length !== 0) {
    event.preventDefault();
    addTodo(inputValue.value, getTasks);
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
    console.log('hit selected box')
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
  getTasks = getTasks.filter(object => object.completed === false);
  let counter = 1;
  getTasks.forEach(element => {
    element.index = counter;
    counter += 1;
  });
  window.localStorage.setItem('tasks', JSON.stringify([getTasks]));
  displayAllTasks(getTasks, todoContainer);
};

clearTask.addEventListener('click', () => {
  clearCompleted();
});