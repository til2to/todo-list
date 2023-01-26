// function to strike task
const strikeTask = (element, check) => {
  if(check === true){
    return element.style.setProperty('text-decoration', 'line-through')
  }
  if(check === false){
    return element.style.setProperty('text-decoration', '');
  }
}