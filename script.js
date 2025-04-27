let board = [null, null, null, null, null, null, null, null, null];
let currentPlayer = null;

const cells = document.querySelectorAll(".cell");

/* document.querySelectorAll(".cell").addEventListener("click", function () {
  if (currentPlayer === null) {
    alert("Please choose a character");
  } else if (currentPlayer === "X") {
    document.getElementsByClass("cell").innerText = "X";
  } else if (currentPlayer === "O") {
    document.getElementsByClass("cell").innerText = "O";
  }
}); */

/*
// assign data attributes to the cells
cells.forEach((cell, index) => {
  cell.setAttribute("data-cell-index", index);
});
*/
cells.forEach((cell, index) => {
  cell.addEventListener("click", function () {
    console.log(`Cell ${index} was clicked`);
    console.log(`Current value in board[${index}]:`, board[index]);

    //  const index = cell.getAttribute("data-cell-index");

    // Prevent clicks if no character is selected
    if (!currentPlayer) return;

    // Prevent overwriting a cell
    if (board[index]) return;

    // Update the cell visually and in board state
    cell.innerText = currentPlayer;
    board[index] = currentPlayer;

    checkWinning();

    // Toggle the current player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("chosenCharacter").innerHTML = currentPlayer;
  });
});

/* 
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (currentPlayer === null) {
      alert("Please choose a character");
    } else if (board[index] === null) {
      board[index] = currentPlayer;
      cell.innerText = currentPlayer;
    } else {
      alert("Cell already taken");
    }
  });
}); */

document.getElementById("x").addEventListener("click", function () {
  document.getElementById("chosenCharacter").innerHTML = "X";
  currentPlayer = "X";
});

document.getElementById("o").addEventListener("click", function () {
  document.getElementById("chosenCharacter").innerHTML = "O";
  currentPlayer = "O";
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("chosenCharacter").innerHTML = "";
  currentPlayer = null;
  board = [null, null, null, null, null, null, null, null, null];
  cells.forEach((cell) => {
    cell.innerText = ""; // Clear the cell visually
  });
  winningMessage.style.display = "none"; // Hide the winning message
  winningCharacter.innerHTML = ""; // Clear the winning character
});

let winningMessage = document.querySelector(".winningMessage");
let winningCharacter = document.getElementById("winningCharacter");

function checkWinning() {
  winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let combo of winningSequences) {
    // Check if all three cells in the combination are the same and not null, done by 'array destructuring'
    // const a = combo[0], b = combo[1], c = combo[2];
    const [a, b, c] = combo;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winningMessage.style.display = "block";
      winningCharacter.innerHTML = board[a];
      return;
    }
  }
}

/* board.forEach(function (index) {
  if ((typeof board[0] === board[3]) === board[6]) {
    document.getElementsByClassName("winningMessage").display = "block";
    document.getElementById("winningCharacter").innerHTML = board[0];
  }
});

document.querySelectorAll(".cell").addEventListener("click", function () {
  if (currentPlayer === null) {
    alert("Please choose a character");
  } else if (currentPlayer === "X") {
    document.getElementsByClass("cell").innerText = "X";
  } else if (currentPlayer === "O") {
    document.getElementsByClass("cell").innerText = "O";
  }
});
*/

/* document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", function () {
        if (playerCharacter === null) {
        alert("Please choose a character");
        } else {
        let cellIndex = parseInt(cell.getAttribute("data-cell-index"));
        if (board[cellIndex] === null) {
            board[cellIndex] = playerCharacter;
            cell.innerHTML = playerCharacter;
        } else {
            alert("Cell already taken");
        }
        }
    });
    });

function checkWin() {
  if (
    (board[0] === "X" || board[0] === "O") &&
    board[0] === board[1] &&
    board[1] === board[2]
  ) {
    winningMessage.style.display = "block";
    winningCharacter.innerHTML = board[0];
  } else if (
    (board[3] === "X" || board[3] === "O") &&
    board[3] === board[4] &&
    board[4] === board[5]
  ) {
    winningMessage.style.display = "block";
    winningCharacter.innerHTML = board[3];
  }
}

*/
