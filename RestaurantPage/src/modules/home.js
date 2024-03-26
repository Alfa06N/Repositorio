export default function showHome() {
  const main = document.querySelector('.content');

  const title = document.createElement('h2');
  title.classList.add('mainTitle');
  title.textContent = "Joselin's Sweets";

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = '"Do you want something better in your life? Come with us. We can do it for you"';

  const owner = document.createElement('h3');
  owner.classList.add('owner');
  owner.textContent = 'Joselin Guzmán';

  main.appendChild(title);
  main.appendChild(description);
  main.appendChild(owner);
}