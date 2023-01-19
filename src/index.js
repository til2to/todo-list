import 'lodash';
import './style.css';
import sync from './assets/icons/sync.png';
import downLeft from './assets/icons/down_left.png';
import menuIcon from './assets/icons/menuIcon.png';

const todoContaiter = document.querySelector('.todoContaiter');
const titleContainer = document.querySelector('.title-list');
const descriptionContainer = document.querySelector('.description-list');

const tasksArray = [
  {
    index: '3',
    description: 'first task',
    completed: false,
  },
  {
    index: '1',
    description: 'second task',
    completed: false,
  },
  {
    index: '2',
    description: 'third task',
    completed: false,
  },
];

// sort by index
tasksArray.sort((a, b) => a.index - b.index);

// render page
const mainPage = () => {
  tasksArray.forEach((task) => {
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

  const titleHtml = `
    <li class="title-list-item">
      <span>Today's To Do</span>
    </li>
    <li class="title-list-item">
      <img class="icon" src=${sync} alt="">
    </li>
  `;
  titleContainer.innerHTML = titleHtml;

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
};

mainPage();
