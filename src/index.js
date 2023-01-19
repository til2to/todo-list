import "lodash";
import "./style.css";
import sync from "./assets/icons/sync.png";
import downLeft from "./assets/icons/down_left.png";
import menuIcon from "./assets/icons/menuIcon.png";

const todoContaiter = document.querySelector(".todoContaiter");
const titleContainer = document.querySelector(".title-list");
const descriptionContainer = document.querySelector(".description-list");
const getTasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
const clearTask = document.querySelector('.button-for-reset');

const tasksArray = getTasks;

const displayAllTasks = () => {
  getTasks.forEach((task, index) => {
    const taskHtml = `<ul class="task-list">
      <li class="task-list-item">
        <input type="checkbox" name="check-task" id="check"/>
      </li>
      <li class="task-list-item">${task.description}</li>
      </li>
      <li class="task-list-item">
        <img class="icon" src=${menuIcon} />
      </li>
    </ul>`;
    todoContaiter.innerHTML += taskHtml;
  });
};

displayAllTasks();

const descriptionHtml = `
  <li class="description-list-item first-child">
    <input
    type="text"
    name="task-description"
    id="description"
    placeholder="Add to your list..."
    />
  </li>
  <li class="description-list-item second-child">
    <img class="icon" src=${downLeft} />
  </li>
`;
descriptionContainer.innerHTML = descriptionHtml;

const titleHtml = `
  <li class="title-list-item">
    <span>Today's To Do</span>
  </li>
  <li class="title-list-item">
    <img class="icon" id="add-task" src=${sync} alt="">
  </li>
`;
titleContainer.innerHTML = titleHtml;

// addTodo
const taskElement = document.querySelector("#description");
const titleIcon = document.querySelector("#add-task");

let currentValue = "",
  exist = false;
  
taskElement.addEventListener("change", (e) => {
  taskElement.textContent = e.target.value;
  currentValue = e.target.value;
  console.log(currentValue);
});

const compareTasks = (localTask, currentTask) => {
  return JSON.stringify(localTask) === JSON.stringify(currentTask);
};

titleIcon.addEventListener("click", () => {
  getTasks.forEach((task, index) => {
    console.log(task.description);
    if (compareTasks(task.description, currentValue)) {
      exist = true;
    }
  });

  const clearInput = () => {
    currentValue = ''
  }

  if (exist === false && currentValue.length !== 0) {
    let id = 0
    let getId = JSON.parse(window.localStorage.getItem('index')) || 0
    // if (getId === null || getId.length === 0 || getId === undefined) {
    window.localStorage.setItem('index', JSON.stringify(id))
    // }
    id = getId + 1
    window.localStorage.setItem('index', JSON.stringify(id))
    console.log(id)
    let addTask = { index: getId, description: currentValue, completed: false };

    tasksArray.unshift(addTask)
    window.localStorage.setItem(
      "tasks",
      JSON.stringify(getTasks)
    );

    clearInput();

    const taskHtml = `<ul class="task-list">
      <li class="task-list-item">
        <input type="checkbox" name="check-task" id="check"/>
      </li>
      <li class="task-list-item">${addTask.description}</li>
      </li>
      <li class="task-list-item">
        <img class="icon" src=${menuIcon} />
      </li>
    </ul>`;
    todoContaiter.innerHTML += taskHtml;
  }
});
