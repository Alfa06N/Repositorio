class HeadManager {
  static setTitle(newSelected) {
    const title = document.querySelector('.headTitle');
    title.textContent = newSelected.textContent;
  }
}

export default HeadManager;