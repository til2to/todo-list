import "lodash";
import "./style.css";
import addTodo from "./modules/addTodo";
import removeTodo from "./modules/removeTodo";
import { displayAllTasks, taskElement, } from "./modules/drawTask";
import { updateTask, completeTask } from "./modules/updateTask";

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

// remove todo and update todo
const ulItems = todoContainer.getElementsByTagName("li");
for (let i = 0; i < ulItems.length; i++) {
  let show = false
  ulItems[i].addEventListener("click", (e) => {
    const buttonDel = ulItems[i].children[2]
    const buttonEdit = ulItems[i].children[3]
    const editField = ulItems[i].children[1]
    
    !show && (buttonDel.style.display = "inline-block")
    !show && (buttonEdit.style.display = "none");
    show = false;

    // delete task
    buttonDel.addEventListener('click', ()=>{
      removeTodo(i)
      show = true
      buttonEdit.style.display = "inline-block";
      buttonDel.style.display = "none"
      displayAllTasks();
    })
  })

  // update task description
  let updateFiled = ulItems[i].children[1]
  updateFiled.addEventListener('input', () => {
    const updateValue = updateFiled.textContent.trim();
    updateTask(i, updateValue);
  })

  // update checkbox
  const selectedCheckbox = ulItems[i].children[0];
  selectedCheckbox.addEventListener('change', e => {
    let check = e.target.checked
    if(check) {
      updateFiled.innerHTML = updateFiled.innerHTML.strike();
      completeTask(i, check)
    }
    if(!check){
      completeTask(i, check)
    }
  })
}
