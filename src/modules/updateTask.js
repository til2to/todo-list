// import getTasks from '../index.js';

const updateTask = (id, description) => {
  const getTasks = JSON.parse(window.localStorage.getItem('tasks')) || [];
  getTasks.forEach((object) => {
    if (object.index === id) {
      object.description = description;
    }
  });
  window.localStorage.setItem('tasks', JSON.stringify(getTasks));
};

// const completeTask = (id, completed) => {
//   const getTasks = JSON.parse(window.localStorage.getItem('tasks')) || [];
//   getTasks.forEach((object) => {
//     if (object.index === id) {
//       object.completed = completed;
//     }
//     return object;
//   });
//   window.localStorage.setItem('tasks', JSON.stringify(getTasks));
// };

const completeTask = (index, checked) => {
  const tasks = JSON.parse(window.localStorage.getItem('tasks')) || [];

  // Find task with specified index
  const taskToUpdate = tasks.find((task) => task.index === index);
  if (!taskToUpdate) {
    throw new Error(`Task with index ${index} not found`);
  }

  // Update task checkbox
  taskToUpdate.completed = checked;

  // Save updated tasks to local storage
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { updateTask, completeTask };