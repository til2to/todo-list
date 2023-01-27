const getTasks = JSON.parse(window.localStorage.getItem('tasks')) || [];

export default getTasks;