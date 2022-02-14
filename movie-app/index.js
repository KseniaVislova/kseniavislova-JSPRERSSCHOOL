const key = 'b17c44228beb2d9ced34a96df9fccd68';
const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b17c44228beb2d9ced34a96df9fccd68';
const urlImg = 'https://image.tmdb.org/t/p/w1280'
main = document.querySelector('.main');

//Получение данных

const showData = (data) => {
  data.results.forEach(el => {
  const item = `<div class="item">
    <img src=${urlImg + el.poster_path}>
    <h3>${el.original_title}</h3>
    <span>${el.vote_average}</span>
    <div>${el.overview}</div>
  </div>`;
  main.insertAdjacentHTML('beforeend', item);
  })
}

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data)
}
getData();

//Поиск

const form = document.querySelector('#form');
const search = document.querySelector('#search');
let valueInput = '';

const clearHTML = () => {
  main.innerHTML = ''
}


form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    searchData(search.value)
  }
})

async function searchData(value) {
  console.log(value)
  valueInput = value
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=b17c44228beb2d9ced34a96df9fccd68`)
  const data = await res.json();
  console.log(data);
  clearHTML()
  showData(data)
}

//Focus 
function setFocus(){
  search.focus();
}

setFocus()

//Удаление поискового запроса из строки поиска

const btn = document.querySelector('.btn-close');

const clearValue = (e) => {
  search.value = '';
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  clearValue();
})



