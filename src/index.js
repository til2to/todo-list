import "lodash";
import "./style.css";
import addTodo from "./modules/addTodo";
import removeTodo from "./modules/removeTodo";
import { displayAllTasks, taskElement, } from "./modules/drawTask";

const todoContainer = document.getElementById("todoContainer");
const form = document.querySelector(".form");
const clearTask = document.querySelector(".button-for-reset");
export const getTasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
export const tasksArray = getTasks;

// functions to display UI
displayAllTasks();

// function to compare before adding task
const compareTasks = (localTask, currentTask) => {
  return JSON.stringify(localTask) === JSON.stringify(currentTask);
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// addTodo
const titleIcon = document.querySelector("#add-task");
let currentValue = "",
  exist = false;

taskElement.addEventListener("change", (e) => {
  taskElement.textContent = e.target.value;
  currentValue = e.target.value;
});

titleIcon.addEventListener("click", () => {
  getTasks.forEach((task) => {
    if (compareTasks(task.description, currentValue)) {
      exist = true;
    }
  });

  const clearInput = () => (currentValue = "");

  if (exist === false && currentValue.length !== 0) {
    addTodo(currentValue);
    clearInput();
    displayAllTasks();
  }
});

// enable "enter key" to add Task
const inputValue = document.getElementById('description')
inputValue.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && inputValue.value) {
    event.preventDefault();
    addTodo(inputValue.value)
    displayAllTasks()
    inputValue.value = '';
  }
});

// remove todo
const updateValue = JSON.parse(window.localStorage.getItem('editValue'))
const ulItems = todoContainer.getElementsByTagName("li");
for (let i = 0; i < ulItems.length; i+=1) {
let show = false
ulItems[i].addEventListener("click", (e) => {
  const buttonDel = ulItems[i].children[2]
  const buttonEdit = ulItems[i].children[3]
  const editField = ulItems[i].children[1].innerHTML.trim()

  window.localStorage.setItem('editValue', JSON.stringify(editField))
  
  !show && (buttonDel.style.display = "inline-block")
  !show && (buttonEdit.style.display = "none");
  show = false;

  buttonDel.addEventListener('click', ()=>{
    removeTodo(i)
    show = true
    buttonEdit.style.display = "inline-block";
    buttonDel.style.display = "none"
    displayAllTasks();
  })}
)}

// updateTodo
