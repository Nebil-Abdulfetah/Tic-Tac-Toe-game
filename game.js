const start = document.querySelector(".start-game");
const gameBox = document.querySelector(".game-box-container");
const box = document.querySelectorAll(".box-item");
const turnTeller = document.querySelector(".turn-teller");
const winner = document.querySelector(".winner")
let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

start.addEventListener("click", () => {
  const player1Name = document.querySelector(".player1-name").textContent;
  const player2Name = document.querySelector(".player2-name").textContent;
  gameBox.style.display = "grid";
  winner.style.display = "none";
  turn = player1Name;
  turnTeller.innerHTML = `it's ${turn}'s turn`;
  // restarting the game
  box.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("selected-box");
  });

  box.forEach((box) => {
    box.addEventListener("click", (event) => {
      selectedFiled = event.target;
      if (turn === player1Name && box.innerHTML === "") {
        box.innerHTML = "X";
        turn = player2Name;
        turnTeller.innerHTML = `it's ${turn}'s turn`;
        const selectedRow = selectedFiled.dataset.row;
        const selectedCol = selectedFiled.dataset.col;
        gameData[selectedRow][selectedCol] = 1;
      } else if (turn === player2Name && box.innerHTML === "") {
        box.innerHTML = "O";
        turn = player1Name;
        turnTeller.innerHTML = `it's ${turn}'s turn`;
        const selectedRow = selectedFiled.dataset.row;
        const selectedCol = selectedFiled.dataset.col;
        gameData[selectedRow][selectedCol] = 2;
      }
      //   console.log(gameData);
      box.classList.add("selected-box");
      let winnerId = checkForWinner();
      if (winnerId > 0) {
        gameBox.style.display = "none";
        turnTeller.style.display = "none";
        winner.style.display = "block";
        gameData = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ];
        if(winnerId === 1) {
          winner.innerHTML = `<h2>${player1Name} is the winner🎉</h2>`;

        } else if (winnerId === 2){
          winner.innerHTML = `<h2>${player2Name} is the winner🎉</h2>`;
        }
      }
    });
  });
});

function checkForWinner() {
  for (i = 0; i < 3; i++) {
    // checking for winner in rows
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
    // checking for col winner
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // checking from top left to bottom right
  if ( gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]) {
      return gameData[0][0]; 
    }
    // checking from bottom left to top right
  if ( gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]) {
      return gameData[2][0]; 
    }

    return 0;
}
