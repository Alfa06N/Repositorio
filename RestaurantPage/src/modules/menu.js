import recipes from "./recipes";

export default function showMenu() {
  const main = document.querySelector('.content');

  for (const recipe of Object.values(recipes)) {
    const card = document.createElement('div');
    card.classList.add('card');

    // Crea el título e imagen de la comida
    const presentation = document.createElement('div');
    presentation.classList.add('presentation');

    const title = document.createElement('h2');
    title.classList.add('titleCard');
    title.textContent = recipe.title;

    const image = document.createElement('img');
    image.classList.add('imgCard');
    image.src = recipe.image;
    image.setAttribute('loading', 'lazy');

    presentation.appendChild(title);
    presentation.appendChild(image);

    // Crea la reseña de la comida
    const review = document.createElement('p');
    review.classList.add('review');
    review.textContent = recipe.review;

    card.appendChild(presentation)
    card.appendChild(review);
    main.appendChild(card);
  }
}