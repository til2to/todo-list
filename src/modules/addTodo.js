const addTodo = (description, tasksArray, getTasks) => {
  const addTask = {};
  const lastIndex = getTasks.length;
  addTask.description = description;
  addTask.index = lastIndex + 1;
  addTask.completed = false;

  getTasks.sort((a, b) => a.index - b.index);
  tasksArray.push(addTask);
  window.localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

export default addTodo;