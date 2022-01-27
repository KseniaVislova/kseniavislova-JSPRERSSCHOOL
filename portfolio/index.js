import i18Obj from './translate.js';

let score = 'Вёрстка соответствует макету. Ширина экрана 768px: 48 \nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: 15 \nНа ширине экрана 768рх и меньше реализовано адаптивное меню: 22 \nИтого: 85';
console.log(score);

let menuBurger = document.querySelector('.menu-burger');
let navigation = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
let modal = document.querySelector('.modal');
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const dataI18 = document.querySelectorAll('[data-i18]');
let language = document.querySelector('.language-active');
const languageBtns = document.querySelectorAll('.language');
const themeBtn = document.querySelector('.theme');
const body = document.querySelector('body');

let lang = 'en';
let theme = 'light';

//Menu

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
  menuBurger.classList.toggle('close');
});

navigation.addEventListener('click', closeMenu);

//Portfolio Images

function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
  }
}

portfolioBtns .forEach(btn => {
  btn.addEventListener('click', changeImage);
  btn.addEventListener('click', changeClassActive);
})

//Cash

function preloadImages() {
  seasons.forEach(item => {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${item}/${i}.jpg`;
    }
  })
}

preloadImages()

//Switcher of active button

function changeClassActive(event) {
  portfolioBtns.forEach(btn => {
    btn.classList.remove('active')
  })
  event.target.classList.add('active')
}


//Translate 

function changeThemeClass(event) {
  languageBtns.forEach(btn => {
    btn.classList.remove('active')
  })
  event.target.classList.add('active')
}

languageBtns.forEach(btn => {
  btn.addEventListener('click', getLang)
  btn.addEventListener('click', changeThemeClass)
})

function getLang (event) {
  lang = event.target.innerHTML;
  getTranslate(lang)
}

function getTranslate(lang) {
  dataI18.forEach(item => {
    if (lang === 'en') {
      for (let i in i18Obj.en) {
        if (i === item.dataset.i18) {
          item.textContent = `${i18Obj.en[i]}`
        }
      }
    } 
    if (lang === 'ru') {
      for (let i in i18Obj.ru) {
        if (i === item.dataset.i18) {
          item.textContent = `${i18Obj.ru[i]}`
        }
      }
    } 
  })
}

//Theme 

themeBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    theme = 'light';
    document.documentElement.style.setProperty('--color-body', '#fff');
    document.documentElement.style.setProperty('--color-text', '#1c1c1c');
    document.documentElement.style.setProperty('--color-hover', '#000');
  } else {
    theme = 'dark';
    document.documentElement.style.setProperty('--color-body', '#000');
    document.documentElement.style.setProperty('--color-text', '#fff');
    document.documentElement.style.setProperty('--color-hover', '#fff');
  }
})


//Local Storage 

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
  }
}
window.addEventListener('load', getLocalStorage)

