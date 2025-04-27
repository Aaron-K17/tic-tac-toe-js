let cells = document.querySelectorAll(".cell");
let currentPlayer = "";

document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const chosenCharacterSpan = document.getElementById("chosenCharacter");

  let currentPlayer = ""; // Store the chosen character

  // ✅ Function to update or clear the chosen character
  function chooseXOrO(player) {
    currentPlayer = player; // Update the player variable
    chosenCharacterSpan.textContent = player ? player.toUpperCase() : ""; // Clears text when empty
  }

  // ✅ Add event listeners to X and O buttons
  document.getElementById("x").addEventListener("click", () => chooseXOrO("X"));
  document.getElementById("o").addEventListener("click", () => chooseXOrO("O"));

  // ✅ Reset button clears the chosen character
  document.getElementById("reset").addEventListener("click", () => {
    chooseXOrO(""); // Clear chosen character
  });

  // ✅ Add event listeners to game board cells
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (!cell.textContent) {
        cell.textContent = currentPlayer; // Set cell to the current chosen character
      }
    });
  });
});

/*In the code above, we have a function  chooseXOrO  that updates the chosen character. We also have event listeners for the X and O buttons and the game board cells. 
  The game board cells are updated with the character "X" when clicked. You can modify this to follow the game logic. 
  5. Add Game Logic 
  Tic-tac-toe is a simple game that involves two players taking turns to place their character on the game board. The first player to get three of their characters in a row, column, or diagonal wins. 
  To implement the game logic, you can create a function that checks for a winner after each move. Here's an example of how you can implement the game logic in JavaScript:     */
