import { tasksArray, getTasks } from "../index.js";

const removeTodo = (index) => {
  // const result = getTasks.filter((task, ind) => ind !== index);
  // getTasks.length = 0;
  getTasks.splice(index, 1);
  window.localStorage.setItem('tasks', JSON.stringify(getTasks))
  let counter = 1;
  getTasks.forEach((element) => {
    element.index = counter;
    window.localStorage.setItem('tasks', JSON.stringify(getTasks))
    counter += 1;
  });
};

export default removeTodo;