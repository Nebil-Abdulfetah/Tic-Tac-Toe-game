const start = document.querySelector(".start-game");
const gameBox = document.querySelector(".game-box-container");
const box = document.querySelectorAll(".box-item");
const turnTeller = document.querySelector(".turn-teller");

start.addEventListener("click", () => {
    const player1Name = document.querySelector(".player1-name").textContent;
    const player2Name = document.querySelector(".player2-name").textContent;
    box.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("selected-box");
  });
  gameBox.style.display = "grid";
  turn = player1Name;
  turnTeller.innerHTML = `it's ${turn}'s turn`;
  box.forEach((box) => {
    box.addEventListener("click", () => {
      if (turn === player1Name) {
        box.innerHTML = "X";
        turn = player2Name;
        turnTeller.innerHTML = `it's ${turn}'s turn`;
      } else {
        box.innerHTML = "O";
        turn = player1Name;
        turnTeller.innerHTML = `it's ${turn}'s turn`;
      }
      box.classList.add("selected-box");
    });
  });
});

