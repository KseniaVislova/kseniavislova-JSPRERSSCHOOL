const board = document.querySelector('.board');
let squares = [];
const width = 4;

const startNumbers = () => {
  let random = Math.floor(Math.random() * squares.length);
  if (squares[random].innerHTML == 0) {
    squares[random].innerHTML = 2;
  } else {
    startNumbers()
  }
}

const createBoard = () => {
  for (let i = 0; i < width * width; i++) {
    const item = `<div class="square">0</div>`;
    board.insertAdjacentHTML('beforeend', item);
  }
  squares = document.querySelectorAll('.square');
  startNumbers();
  startNumbers();
}

createBoard();