let score = 'Вёрстка соответствует макету. Ширина экрана 768px: 48 \nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: 15 \nНа ширине экрана 768рх и меньше реализовано адаптивное меню: 22 \nИтого: 85';
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
