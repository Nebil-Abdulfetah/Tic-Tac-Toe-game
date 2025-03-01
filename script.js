const cancelBtn = document.querySelector(".cancel-btn");
const editPlayer1 = document.querySelector(".edit-player-1");
const editPlayer2 = document.querySelector(".edit-player-2");
const nameInput = document.querySelector("#name");
const confirmBtn = document.querySelector(".confirm-btn");
let editTurn;
// Adding event to listen when the user wants to edit name

//checking which player is getting edited
editPlayer1.addEventListener("click", () => {
  showOverlayForm();
  editTurn = "player1";
});
editPlayer2.addEventListener("click", () => {
  showOverlayForm();
  editTurn = "player12";
});

//changing name for the specific player that was chosen
confirmBtn.addEventListener("click", () => {
  if (editTurn === "player1") {
    document.querySelector(".player1-name").innerHTML = nameInput.value;
    nameInput.value = "";
    showOverlayForm();
  } else {
    document.querySelector(".player2-name").innerHTML = nameInput.value;
    nameInput.value = "";
    showOverlayForm();
  }
});

cancelBtn.addEventListener("click", showOverlayForm);

// showing the name changing form as overlay
function showOverlayForm() {
  document.body.classList.toggle("show-overlay");
}
