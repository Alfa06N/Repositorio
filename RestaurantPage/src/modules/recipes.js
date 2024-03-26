import burgerImage from '../images/Hamburguesa-Sencilla.jpeg';
import hotdogImage from '../images/Perro-Caliente-Sencillo.jpeg';
import pizzaImage from '../images/Pizza-Básica.jpeg';
import sandwichImage from '../images/Sandwich-Sencillo.jpeg';

const recipes = {
  burger: { title: 'Simple Burger', image: burgerImage, review: 'The simple burger with cheese, meat, lettuce, tomato and salsa' },

  hotdog: { title: 'Simple Hot Dog', image: hotdogImage, review: 'A simple Hot Dog with Palermo sausage, salsa, chips, onion and cheese' },

  pizza: { title: 'Simple Pizza', image: pizzaImage, review: 'Simple Family Pizza with Cheese, Pepperoni, Meat, and Peas' },
  
  sandwich: { title: 'Simple Sandwich', image: sandwichImage, review: 'A simple sandwich with lettuce, tomato, cheese and ham' }
};

export default recipes;