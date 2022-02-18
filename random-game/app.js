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

const getRow = (arr, start, end) => {
  for (let i = start; i <= end; i ++) {
    if (parseInt(squares[i].innerHTML) > 0) arr.push(parseInt(squares[i].innerHTML))
  }
}

const moveLeft = () => {
  for (let i = 0; i < 16; i += 4) {
    let row = [];
    getRow(row, i, i + 3);
    let missing = 4 - row.length;
    for (let j = 0; j < missing; j++) {
      row.push(0);
    }
    for (let j = 0; j < 4; j++) {
      squares[i + j].innerHTML = row[j];
    }
  }
}

const moveRight = () => {
  for (let i = 0; i < 16; i += 4) {
    let row = [];
    getRow(row, i, i + 3);
    let missing = 4 - row.length;
    for (let j = 0; j < missing; j++) {
      row.unshift(0);
    }
    for (let j = 0; j < 4; j++) {
      squares[i + j].innerHTML = row[j];
    }
  }
}