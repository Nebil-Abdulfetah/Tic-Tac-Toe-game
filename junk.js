class Player {
    constructor(name, symbol, num) {
        this.name = name;
        this.symbol = symbol;
        this.num = num;
      }
  }
  let player1 = new Player("player name", "X", 1);
  let player2 = new Player("player name", "O", 2);
  const playerOne = document.querySelector(".player-1");
  const playerTwo = document.querySelector(".player-2");
  
  playerOne.innerHTML = `<p class="player-num">Player ${player1.num}</p>
  <p class="player-name">${player1.name}</p>
  <p class="player-symbol">${player1.symbol}</p><button class="btn edit-btn edit-player-1">Edit</button>`;
  
  playerTwo.innerHTML = `<p class="player-num">Player ${player2.num}</p>
  <p class="player-name">${player2.name}</p>
  <p class="player-symbol">${player2.symbol}</p><button class="btn edit-btn edit-player-2">Edit</button>`;
  
  
  const cancelBtn = document.querySelector(".cancel-btn");
  const editPlayer1 = document.querySelector(".edit-player-1");
  const editPlayer2 = document.querySelector(".edit-player-2");
  const nameInput = document.querySelector("#name");
  // Adding event to listen when the user wants to edit name
  editPlayer1.addEventListener("click", ()=> {
      showOverlayForm();
      const confirmBtn = document.querySelector('.confirm-btn')
      const playerOneName = document.querySelector(".player-1 .player-name")
      confirmBtn.addEventListener("click", ()=> {
          playerOneName.innerHTML = nameInput.value;
          
          
      })
  
  
  });
  editPlayer2.addEventListener("click", ()=> {
      showOverlayForm();
      const confirmBtn = document.querySelector('.confirm-btn')
      const playerTwoName = document.querySelector(".player-2 .player-name")
      confirmBtn.addEventListener("click", ()=> {
          playerTwoName.innerHTML = nameInput.value;
          
      })
  });
  
  cancelBtn.addEventListener("click", showOverlayForm);
  
  // showing the name changing form as overlay
  function showOverlayForm() {
      document.body.classList.toggle("show-overlay");
  }
  