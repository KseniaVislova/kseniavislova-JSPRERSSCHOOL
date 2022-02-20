const board = document.querySelector('.board');
let squares = [];
let squaresPrev = [];
const width = 4;
let scoreContainer = document.querySelector('.score');
let movesContainer = document.querySelector('.moves');
let score = 0;
let moves = 0;
let isWinning = false;
let isFault = false;
const resultContainer = document.querySelector('.result');
const btnPrev = document.querySelector('.before')

const createClasses = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add(`n-${arr[i].innerHTML}`);
  }
}

const removeClasses = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove(`n-${parseInt(arr[i].innerHTML)}`)
  }
}

const startNumbers = () => {
  let random = Math.floor(Math.random() * squares.length);
  let count = 0;
  squares.forEach(item => {
    if(item.innerHTML == 0) count++;
  })
  if (count > 0) {
    if (squares[random].innerHTML == 0) {
      squares[random].innerHTML = 2;
    } else {
      startNumbers()
    }
  }
}

const createBoard = () => {
  for (let i = 0; i < width * width; i++) {
    const item = `<div class="square n-0">0</div>`;
    board.insertAdjacentHTML('beforeend', item);
  }
  squares = document.querySelectorAll('.square');
  startNumbers();
  startNumbers();
  createClasses(squares);
}

createBoard();

const getRow = (arr, start, end) => {
  for (let i = start; i <= end; i ++) {
    if (parseInt(squares[i].innerHTML) > 0) arr.push(parseInt(squares[i].innerHTML));
  }
}

const getColumn = (arr, start) => {
  for (let i = start; i <= 15; i += 4) {
    if (parseInt(squares[i].innerHTML) > 0) arr.push(parseInt(squares[i].innerHTML))
  }
}

const sumRowRight = () => {
  for(let i = 0; i < 15; i++) {
    if(squares[i].innerHTML === squares[i + 1].innerHTML) {
      let sum = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
      squares[i].innerHTML = sum;
      score += sum;
      scoreContainer.innerHTML = score;
      squares[i + 1].innerHTML = 0;
    }
  }
}

const sumRowLeft = () => {
  for(let i = 15; i > 0; i--) {
    if(squares[i].innerHTML === squares[i - 1].innerHTML) {
      let sum = parseInt(squares[i].innerHTML) + parseInt(squares[i - 1].innerHTML);
      squares[i].innerHTML = sum;
      score += sum;
      scoreContainer.innerHTML = score;
      squares[i - 1].innerHTML = 0;
    }
  }
}

const sumColumnUp = () => {
  for(let i = 0; i < 12; i++) {
    if(squares[i].innerHTML === squares[i + 4].innerHTML) {
      let sum = parseInt(squares[i].innerHTML) + parseInt(squares[i + 4].innerHTML);
      squares[i].innerHTML = sum;
      score += sum;
      scoreContainer.innerHTML = score;
      squares[i + 4].innerHTML = 0;
    }
  }
}

const sumColumnDown = () => {
  for(let i = 15; i > 3; i--) {
    if(squares[i].innerHTML === squares[i - 4].innerHTML) {
      let sum = parseInt(squares[i].innerHTML) + parseInt(squares[i - 4].innerHTML);
      squares[i].innerHTML = sum;
      score += sum;
      scoreContainer.innerHTML = score;
      squares[i - 4].innerHTML = 0;
    }
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

const moveUp = () => {
  for (let i = 0; i < 4; i += 1) {
    let column = [];
    getColumn(column, i);
    let missing = 4 - column.length;
    for (let j = 0; j < missing; j++) {
      column.push(0);
    }
    let h = 0;
    for (let j = 0; j < 16; j += 4) {
      squares[i + j].innerHTML = column[h];
      h += 1;
    }
  }
}

const moveDown = () => {
  for (let i = 0; i < 4; i += 1) {
    let column = [];
    getColumn(column, i);
    let missing = 4 - column.length;
    for (let j = 0; j < missing; j++) {
      column.unshift(0);
    }
    let h = 0;
    for (let j = 0; j < 16; j += 4) {
      squares[i + j].innerHTML = column[h];
      h += 1;
    }
  }
}

const savePrev = () => {
  squaresPrev = [];
  squares.forEach(item => {
    squaresPrev.push(item.innerHTML);
  })
  console.log(squaresPrev);
}

const checkFault = () => {
  count = 0;
  for (let i = 0; i < squares.length - 1; i++) {
    if (squares[i].innerHTML == squares[i + 1].innerHTML ) {
      count += 1;
    }
  }
  for (let i = 0; i < 12 - 1; i++) {
    if (squares[i].innerHTML == squares[i + 4].innerHTML ) {
      count += 1;
    }
  }
  return count === 0;
}

const goTo = (func, funcDirection) => {
  savePrev();
  removeClasses(squares);
  func();
  funcDirection();
  func();
  startNumbers();
  createClasses(squares);
  moves += 1;
  movesContainer.innerHTML = moves;
  if(checkFault() === true) {
    resultContainer.innerHTML = "Вы проиграли!"
    return isFault = true;
  }
  if (score >= 2048) {
    isWinning = true;
    resultContainer.innerHTML = "Вы победили!"
  }
}

const goBack = () => {
  removeClasses(squares);
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = squaresPrev[i];
  }
  createClasses(squares);
  moves += 1;
  movesContainer.innerHTML = moves;
}

const getKey = (e) => {
  if(e.key === 'ArrowDown') goTo(moveDown, sumColumnDown);
  if(e.key === 'ArrowUp') goTo(moveUp, sumColumnUp);
  if(e.key === 'ArrowLeft') goTo(moveLeft, sumRowRight);
  if(e.key === 'ArrowRight') goTo(moveRight, sumRowLeft);
}

document.addEventListener('keyup', getKey);
btnPrev.addEventListener('click', goBack);