let score = 'Вёрстка валидная: 10 \nВёрстка семантическая: 20 \nВёрстка соответствует макету: 48 \nТребования к css: 12 \nИнтерактивность, реализуемая через css: 20';
console.log(score);

let menuBurger = document.querySelector('.menu-burger');
let navigation = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
let modal = document.querySelector('.modal');

const closeMenu = (event) => {
  if (event.target.classList.contains('nav-link')) {
    navigation.classList.remove('open');
    modal.classList.remove('modal-open');
    menuBurger.classList.remove('close')
  }
}

menuBurger.addEventListener('click', () => {
  navigation.classList.toggle('open');
  modal.classList.toggle('modal-open');
  menuBurger.classList.toggle('close')
});

navigation.addEventListener('click', closeMenu);
