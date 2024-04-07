const navigation = (() => {
  const getSelected = () => {
    const selectedNav = document.querySelector('.selected');
    return selectedNav;
  }
  const navigationButtons = () => {
    return {
      principal: document.querySelector('.button.principal'),
      task: document.querySelector('.button.task'),
      project: document.querySelector('.button.project')
    }
  }

  const switchClassSelected = (newSelected) => {
    let actual = getSelected();
    actual.classList.remove('selected');
    newSelected.classList.add('selected');
    switchTitle(newSelected);
  }

  const switchTitle = (newSelected) => {
    const title = document.querySelector('.headTitle');
    title.textContent = newSelected.textContent;
  }

  return { navigationButtons, getSelected, switchClassSelected }
})();

export default navigation