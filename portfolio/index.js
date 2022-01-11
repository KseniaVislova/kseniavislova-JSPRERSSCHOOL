let score = 'Вёрстка валидная: 10 \nВёрстка семантическая: 20 \nВёрстка соответствует макету: 48 \nТребования к css: 12 \nИнтерактивность, реализуемая через css: 20';
console.log(score);

let menuBurger = document.querySelector('.menu-burger');
let close = document.querySelector('.close');
let navigation = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

const closeMenu = (event) => {
  if (event.target.classList.contains('nav-link')) {
    navigation.classList.remove('open');
  }
}

menuBurger.addEventListener('click', () => navigation.classList.toggle('open'));
close.addEventListener('click', () => navigation.classList.toggle('open'));
navigation.addEventListener('click', closeMenu);
