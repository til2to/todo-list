import "lodash";
import "./style.css";
import sync from "./assets/icons/sync.png";
import downLeft from "./assets/icons/down_left.png";
import menuIcon from "./assets/icons/menuIcon.png";

const todoContaiter = document.querySelector(".todoContaiter");
const titleContainer = document.querySelector(".title-list");
const descriptionContainer = document.querySelector(".description-list");

const tasksArray = [
  {
    index: '',
    description: 'first task',
    completed: false,
  },
];

tasksArray.forEach((task, index) => {
  // task.index = index+1;
  // console.log(task.index)

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

const taskElement = document.querySelector("#description");
const titleIcon = document.querySelector("#add-task")
console.log(titleIcon)

let id = 1;

const updateTask = () => {
  taskElement.addEventListener("change", (e) => {
    taskElement.textContent = e.target.value;

    window.localStorage.setItem(
      "tasks",
      JSON.stringify([
        ...tasksArray,
        { index: id++, description: e.target.value, completed: false },
      ])
    );

    let getTasks = JSON.parse(window.localStorage.getItem("tasks"));
    console.log(getTasks);
  });
};


titleIcon.addEventListener('click', ()=>{
  // updateTask()
  console.log('hi')
})
