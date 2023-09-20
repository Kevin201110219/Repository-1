let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winnerText = document.getElementById('winner-text');
const turnIndicator = document.getElementById('turn-indicator');

function checkWinner() {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      winnerText.textContent = `${currentPlayer === 'X' ? 'Player Red' : 'Player Blue'} wins!`;
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameActive = false;
    winnerText.textContent = "It's a draw!";
  }
}

function makeMove(cellIndex) {
  if (!gameActive || gameBoard[cellIndex] !== '') return;
  gameBoard[cellIndex] = currentPlayer;
  cells[cellIndex].setAttribute('data-value', currentPlayer);
  cells[cellIndex].classList.add(currentPlayer === 'X' ? 'player-red' : 'player-blue');
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  updateTurnIndicator();
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  cells.forEach(cell => {
    cell.setAttribute('data-value', '');
    cell.classList.remove('player-red', 'player-blue');
  });
  winnerText.textContent = '';
  updateTurnIndicator();
}

function updateTurnIndicator() {
  turnIndicator.textContent = `${currentPlayer === 'X' ? 'Player Red' : 'Player Blue'}'s Turn`;
}
