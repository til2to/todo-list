// update task when it is edited
const updateTask = (id, description) => {
  const getTasks = JSON.parse(window.localStorage.getItem('tasks')) || [];
  getTasks.forEach((object) => {
    if (object.index === id) {
      object.description = description;
    }
  });
  window.localStorage.setItem('tasks', JSON.stringify(getTasks));
};

export default updateTask;