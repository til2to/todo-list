import _ from 'lodash';
import './style.css';
import menuIcon from './icon.png';


const todoContaiter = document.querySelector('.todoContaiter')
const form = document.querySelectorAll('.form')
const descriptionList = document.querySelector('.description-list')
const titleContainer = document.querySelector('.title-list')
const descriptionContainer = document.querySelector('.description-list')

// function component() {
//   const element = document.createElement('div');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');
//   // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);
//   return element;
// }

// document.body.appendChild(component());

const tasksArray = [
  {
    id: 1,
    description: 'first task',
    complete: false,
    index: 1
  },
  { 
    id: 2,
    description: 'second task',
    complete: false,
  },
  { 
    index: 3,
    description: 'third task',
    complete: false
  }
]

const titleHtml = `
  <li class="title-list-item">
    <span>Today's To Do</span>
  </li>
  <li class="title-list-item">
    <img class="icon" src=${menuIcon} alt="">
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
    <img class="icon" src=${menuIcon} />
  </li>
`;
descriptionContainer.innerHTML = descriptionHtml;

tasksArray.forEach((task) => {
  let taskHtml = `<ul class="task-list">
    <li class="task-list-item">
      <input type="checkbox" name="check-task" id="check"/>
    </li>
    <li class="task-list-item">${task.description}</li>
    </li>
    <li class="task-list-item">
      <img class="icon" src=${menuIcon} />
    </li>
  </ul>`

  todoContaiter.innerHTML += taskHtml
})

