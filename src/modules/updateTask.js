import { getTasks } from "../index.js";

// update task description
const updateTask = (id, description) => {
  getTasks.forEach((object, index) => {
    index === id ? object.description = description : null;
    window.localStorage.setItem('tasks', JSON.stringify(getTasks))
  });
};

// update checkbox
const completeTask = (id, completed) => {
  getTasks.forEach((object, index) => {
    index === id ? object.completed = completed : null;
    window.localStorage.setItem('tasks', JSON.stringify(getTasks))
  });
};

export { updateTask, completeTask };