import networks from "./networks";

export default function showAbout() {
  const main = document.querySelector('.content');

  const about = document.createElement('h2');
  about.classList.add('mainTitle');
  about.textContent = 'Can you follow me here!';

  const networksList = document.createElement('ul');
  networksList.classList.add('networks');

  for (const network of Object.values(networks)) {
    const list = document.createElement('li');
    list.classList.add('list');

    const icon = document.createElement('i');
    icon.classList.add('icon');
    icon.setAttribute('class', network.icon);

    const networkName = document.createElement('a');
    networkName.classList.add('networkName');
    networkName.setAttribute('href', network.link);
    networkName.textContent = network.userName;

    list.appendChild(icon);
    list.appendChild(networkName);
    networksList.appendChild(list);
  }

  main.appendChild(about);
  main.appendChild(networksList);
}