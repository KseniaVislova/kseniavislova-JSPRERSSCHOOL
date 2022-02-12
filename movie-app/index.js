const key = 'b17c44228beb2d9ced34a96df9fccd68';
const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b17c44228beb2d9ced34a96df9fccd68';
const urlImg = 'https://image.tmdb.org/t/p/w1280'
main = document.querySelector('.main');

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
  console.log(data);
  showData(data)
}
getData();

