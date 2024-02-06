import createHtmlTemplate from "./htmlTemplate";
import { onload } from "./themes";
import { playSound, toggleSound, loadSoundState } from "./sound";
import { displayModal, closeModal } from "./modal";
import puzzles from "./data";
import "../scss/style.scss";

const gridSize = 5;

const generatePuzzle = () => {
  const randomPuzzle = Math.floor(Math.random() * puzzles.length);
  return puzzles[randomPuzzle];
};

const gridContainer = createHtmlTemplate();
let cells;

const getTopClues = (matrix) => {
  const topClues = [];
  for (let j = 0; j < gridSize; j++) {
    let count = 0;
    const clues = [];

    for (let i = 0; i < gridSize; i++) {
      if (matrix[i][j] === 1) {
        count++;
      } else if (count !== 0) {
        clues.push(count);
        count = 0;
      }
    }

    if (count !== 0) {
      clues.push(count);
    }

    topClues.push(clues);
  }
  return topClues;
};

const getLeftClues = (matrix) => {
  const leftClues = [];
  for (let i = 0; i < gridSize; i++) {
    let count = 0;
    const clues = [];

    for (let j = 0; j < gridSize; j++) {
      if (matrix[i][j] === 1) {
        count++;
      } else if (count !== 0) {
        clues.push(count);
        count = 0;
      }
    }

    if (count !== 0) {
      clues.push(count);
    }

    leftClues.push(clues);
  }

  return leftClues;
};

const generateGrid = () => {
  gridContainer.innerHTML = "";

  const puzzle = generatePuzzle();
  const topClues = getTopClues(puzzle);
  const leftClues = getLeftClues(puzzle);

  const grid = document.createElement("div");
  grid.classList.add("grid");
  gridContainer.append(grid);

  // Generate top clues
  const topCluesRow = document.createElement("div");
  topCluesRow.classList.add("clues-top");

  for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("clue-cell");

    const clues = topClues[i];
    for (const value of clues) {
      const clueText = document.createElement("span");
      clueText.className = "clue-text";
      clueText.innerText = value;
      cell.append(clueText);
    }
    topCluesRow.append(cell);
  }
  gridContainer.append(topCluesRow);

  // Generate rows and left clues
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    const leftClueCell = document.createElement("div");
    leftClueCell.classList.add("clue-cell");

    const clues = leftClues[i];
    for (const value of clues) {
      const clueText = document.createElement("span");
      clueText.className = "clue-text";
      clueText.innerText = value;
      leftClueCell.append(clueText);
    }
    row.append(leftClueCell);

    // generate grid cells
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (puzzle[i][j] === 1) {
        cell.classList.add("solid");
      }
      row.append(cell);
    }
    grid.append(row);
  }

  cells = Array.from(grid.querySelectorAll(".cell")); // Convert NodeList of cells to an array
  attachEventListeners();
};

const handleLeftClick = (event) => {
  const cell = event.target;

  if (cell.classList.contains("filled")) {
    cell.classList.remove("filled");
  } else if (cell.classList.contains("crossed")) {
    cell.classList.remove("crossed");
  } else {
    cell.classList.add("filled");
  }

  playSound("left-click");
  checkForWin();
};

const handleRightClick = (event) => {
  event.preventDefault(); // Prevent context menu display
  const cell = event.target;

  if (cell.classList.contains("filled")) {
    cell.classList.remove("filled");
    cell.classList.add("crossed");
  } else if (cell.classList.contains("crossed")) {
    cell.classList.remove("crossed");
  } else {
    cell.classList.add("crossed");
  }

  playSound("right-click");
  checkForWin();
};

const checkForWin = () => {
  const filledCells = Array.from(
    gridContainer.querySelectorAll(".cell.filled")
  );
  const solidCells = Array.from(gridContainer.querySelectorAll(".cell.solid"));

  if (
    filledCells.length === solidCells.length &&
    solidCells.every((cell) => cell.classList.contains("filled"))
  ) {
    playSound("win");
    document.querySelector(".grid").classList.add("lock");
    const buttonClose = document.querySelector(".close");
    displayModal();
  }
};

const attachEventListeners = () => {
  cells.forEach((cell) => {
    cell.addEventListener("click", handleLeftClick);
    cell.addEventListener("contextmenu", handleRightClick);
  });
};

generateGrid();
loadSoundState();

const buttonReset = document.querySelector(".reset");
buttonReset.addEventListener("click", () => {
  generateGrid();
  playSound("reset");
});

const buttonSound = document.querySelector(".sound");
buttonSound.addEventListener("click", () => {
  loadSoundState();
  toggleSound();
  playSound("switch");
});

const buttonClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
buttonClose.addEventListener("click", () => {
  closeModal();
});
overlay.addEventListener("click", () => {
  closeModal();
});

console.log(
  `Привет! Ещё работаю над заданием. Если есть возможность, вернись, пожалуйста, к проверке ближе к концу кросс-чека. Спасибо!`
);
