export { switchClassSelected, getInputs, getGrandpa, getCurrentItem, setCurrentItem };

function switchClassSelected(father, newSelected) {
  let actual = father.querySelector('.selected');
  actual.classList.remove('selected');
  newSelected.classList.add('selected');
}

function getInputs() {
  const form = document.querySelector('.dialog');
  
  let title = form.querySelector('.title')
  let description = form.querySelector('.description')
  let date = form.querySelector('.dueDate')
  let priority = form.querySelector('.selected');

  if (form.classList.contains('Task')) {
    return { title, description, date, priority }
  } else {
    let notes = form.querySelector('.notes')
    return { title, description, date, priority, notes }
  }
  
}

function getGrandpa(child) {
  return child.parentNode.parentNode;
}

let currentItem = null;

function getCurrentItem() {
  return currentItem
}

function setCurrentItem(item) {
  currentItem = item
}