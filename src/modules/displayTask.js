import menuIcon from '../assets/icons/menuIcon.png';

const todoContaiter = document.querySelector('.todoContaiter')

export const tasksArray = [
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

export const tasks = () => {
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
  </ul>`;
  todoContaiter.innerHTML += taskHtml
 })
}