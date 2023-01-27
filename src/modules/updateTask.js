import getTasks from './localStorage.js';

// update task description
const updateTask = (id, description) => {
  getTasks.forEach((object, index) => {
    if (index === id) {
      object.description = description;
    }
    window.localStorage.setItem('tasks', JSON.stringify(getTasks));
  });
};

// update checkbox
const completeTask = (id, completed) => {
  getTasks.forEach((object, index) => {
    if (index === id) {
      object.completed = completed;
    }
    window.localStorage.setItem('tasks', JSON.stringify(getTasks));
  });
};

export { updateTask, completeTask };