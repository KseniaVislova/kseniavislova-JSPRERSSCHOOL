const board = document.querySelector('.board');
let squares = [];
const width = 4;

const createBoard = () => {
  for (let i = 0; i <= width * width; i++) {
    const item = `<div>0</div>`;
    board.insertAdjacentHTML('beforeend', item);
  }
}

createBoard()