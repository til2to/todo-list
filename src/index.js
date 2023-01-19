import 'lodash';
import './style.css';
import sync from './assets/icons/sync.png';
import downLeft from './assets/icons/down_left.png';
import { tasks } from './modules/displayTask.js';

const titleContainer = document.querySelector('.title-list');
const descriptionContainer = document.querySelector('.description-list');

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

tasks();
