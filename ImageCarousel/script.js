class Slides {
  static currentSlide = 0;

  static getSlides() {
    return document.querySelectorAll(".slide");
  }

  static getCurrentSlide() {
    return Slides.currentSlide;
  }

  static setCurrentSlide(value) {
    Slides.currentSlide = value;
  }
}

class Points {
  static getPoints() {
    return document.querySelectorAll('.point');
  }
}

class SwitchSlide {
  static removeSlide(currentSlide) {
    const slide = Slides.getSlides()[currentSlide];
    const point = Points.getPoints()[currentSlide];

    slide.classList.remove('active');
    point.classList.remove('active');
  }

  static activeSlide(newSlide) {
    const slide = Slides.getSlides()[newSlide];
    const point = Points.getPoints()[newSlide];

    slide.classList.add('active');
    point.classList.add('active');
  }
}

const navigationPointers = document.querySelector('.bottom');
let intervalId; // Variable para almacenar el ID del intérvalo

// Crear los puntos de navegación de diapositivas:

Points.getPoints().forEach((element, index) => {
  const point = element;
  point.addEventListener('click', () => {
    if (!point.classList.contains('active')) {
      showSlide(index);
    }
    resetInterval();
  })
});



function showSlide(index) {
  let currentSlide = Slides.getCurrentSlide();
  SwitchSlide.removeSlide(currentSlide);
  // Actualizamos el valor de currentSlide
  Slides.setCurrentSlide(index);
  currentSlide = Slides.getCurrentSlide();

  // Mostramos la nueva Slide
  SwitchSlide.activeSlide(currentSlide);
}

function nextSlide() {
  let currentSlide = Slides.getCurrentSlide();
  SwitchSlide.removeSlide(currentSlide);

  // Actualizamos el valor de currentSlide:
  Slides.setCurrentSlide(
    (Slides.getCurrentSlide() + 1) % Slides.getSlides().length
  ); 
  currentSlide = Slides.getCurrentSlide();

  // Mostramos la nueva Slide
  SwitchSlide.activeSlide(currentSlide);
}

function previousSlide() {
  let currentSlide = Slides.getCurrentSlide();
  SwitchSlide.removeSlide(currentSlide);

  // Actualizamos el valor de currentSlide:
  Slides.setCurrentSlide(
    (Slides.getCurrentSlide() - 1) % Slides.getSlides().length
  );
  currentSlide = Slides.getCurrentSlide();

  // Mostramos la nueva Slide
  SwitchSlide.activeSlide(currentSlide);
}

// Funciones para intervalos

function startInterval() {
  intervalId = setInterval(nextSlide, 5000);
}

function resetInterval() {
  clearInterval(intervalId); // Borra el intérvalo actual
  startInterval();
}

// Eventos para los botones

const buttons = document.querySelectorAll('button');

buttons.forEach(element => {
  element.addEventListener('click', (event) => {
    if (element.classList.contains('next')) {
      nextSlide();
    } else {
      previousSlide();
    }
    resetInterval();
  })
});

// Inicia el intervalo al cargar la página

Slides.getSlides()[Slides.getCurrentSlide()].classList.add("active");
Points.getPoints()[Slides.getCurrentSlide()].classList.add('active');

startInterval();