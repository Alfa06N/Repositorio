import './styles.css';

function toggleMenu(button) {
  button.classList.toggle('activate');
  return button;
}

const menuTogglerList = document.querySelectorAll('.menuToggler');

menuTogglerList.forEach(button => {
  button.addEventListener('click', (event) => {
    toggleMenu(button);
  })
});