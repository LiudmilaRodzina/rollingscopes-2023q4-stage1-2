import createHtmlTemplate from "./htmlTemplate";
import { onload } from "./themes";
import { playSound, toggleSound, loadSoundState } from "./sound";
import { displayModal, closeModal } from "./modal";
import puzzles from "./data";
import "../scss/style.scss";

const gridContainer = createHtmlTemplate();
let gridSize = 0;
let randomPuzzle;
let cells;

const generateRandomPuzzle = () => {
  randomPuzzle = Math.floor(Math.random() * puzzles.length);
  console.log(puzzles[randomPuzzle]);
  return puzzles[randomPuzzle].matrix;
};

const generateGridCells = (puzzle, grid) => {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

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
};

const generateClues = (topClues, leftClues, gridContainer) => {
  const topCluesContainer = document.createElement("div");
  topCluesContainer.classList.add("clues-top");
  gridContainer.append(topCluesContainer);

  for (let i = 0; i < gridSize; i++) {
    const topClueCell = document.createElement("div");
    topClueCell.classList.add("clues-top-cell");

    const values = topClues[i];
    for (const value of values) {
      const clueText = document.createElement("span");
      clueText.className = "clue-text";
      clueText.innerText = value;
      topClueCell.append(clueText);
    }
    topCluesContainer.append(topClueCell);
  }

  const leftCluesContainer = document.createElement("div");
  leftCluesContainer.classList.add("clues-left");
  gridContainer.prepend(leftCluesContainer);

  for (let i = 0; i < gridSize; i++) {
    const leftClueCell = document.createElement("div");
    leftClueCell.classList.add("clues-left-cell");

    const values = leftClues[i];
    for (const value of values) {
      const clueText = document.createElement("span");
      clueText.className = "clue-text";
      clueText.innerText = value;
      leftClueCell.append(clueText);
    }
    leftCluesContainer.append(leftClueCell);
  }
};

const generateGrid = () => {
  gridContainer.innerHTML = "";
  const grid = document.createElement("div");
  grid.classList.add("grid");
  gridContainer.append(grid);

  const randomPuzzle = generateRandomPuzzle();
  gridSize = randomPuzzle.length;
  const topClues = getClues(randomPuzzle, "top");
  const leftClues = getClues(randomPuzzle, "left");

  generateGridCells(randomPuzzle, grid);
  generateClues(topClues, leftClues, gridContainer);

  cells = Array.from(grid.querySelectorAll(".cell"));
  attachEventListeners();
};

const getClues = (matrix, orientation) => {
  const clues = [];
  for (let i = 0; i < gridSize; i++) {
    let count = 0;
    const values = [];

    for (let j = 0; j < gridSize; j++) {
      const cellValue = orientation === "top" ? matrix[j][i] : matrix[i][j];

      if (cellValue === 1) {
        count++;
      } else if (count !== 0) {
        values.push(count);
        count = 0;
      }
    }
    if (count !== 0) {
      values.push(count);
    }
    clues.push(values);
  }
  return clues;
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
  checkForWin(gridContainer);
};

const handleRightClick = (event) => {
  event.preventDefault();
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
    displayModal();
  }
};

const attachEventListeners = () => {
  cells.forEach((cell) => {
    cell.addEventListener("click", handleLeftClick);
    cell.addEventListener("contextmenu", handleRightClick);
  });
};

loadSoundState();

const buttonRandom = document.querySelector(".random");
buttonRandom.addEventListener("click", () => {
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

const buttonSolution = document.querySelector(".solution");
buttonSolution.addEventListener("click", () => {
  cells.forEach((cell) => {
    if (cell.classList.contains("crossed")) {
      cell.classList.remove("crossed");
    }
    if (cell.classList.contains("solid")) {
      cell.classList.add("filled");
    }
    if (
      cell.classList.contains("filled") &&
      !cell.classList.contains("solid")
    ) {
      cell.classList.remove("filled");
    }
  });
  document.querySelector(".grid").classList.add("lock");
  playSound("reset");
});

const buttonRestart = document.querySelector(".restart");
buttonRestart.addEventListener("click", () => {
  playSound("reset");

  cells.forEach((cell) => {
    if (
      cell.classList.contains("crossed") ||
      cell.classList.contains("filled")
    ) {
      cell.classList.remove("crossed");
      cell.classList.remove("filled");
    }
  });
  document.querySelector(".grid").classList.remove("lock");
});

const handleGridSizeGeneration = (size) => {
  playSound("reset");

  const sizePuzzles = puzzles.filter((puzzle) => puzzle.size === size);
  const randomIndex = Math.floor(Math.random() * sizePuzzles.length);
  const randomPuzzle = sizePuzzles[randomIndex].matrix;
  console.log(sizePuzzles[randomIndex]);

  const grid = document.querySelector(".grid");
  grid.innerHTML = "";
  gridSize = size === "5x5" ? 5 : size === "10x10" ? 10 : 15;
  generateGridCells(randomPuzzle, grid);
  gridContainer.querySelector(".clues-top").remove();
  gridContainer.querySelector(".clues-left").remove();
  const topClues = getClues(randomPuzzle, "top");
  const leftClues = getClues(randomPuzzle, "left");
  generateClues(topClues, leftClues, gridContainer);

  cells = Array.from(grid.querySelectorAll(".cell"));
  attachEventListeners();
};

const buttonEasy = document.querySelector(".easy");
buttonEasy.addEventListener("click", () => {
  handleGridSizeGeneration("5x5");
});

const buttonMedium = document.querySelector(".medium");
buttonMedium.addEventListener("click", () => {
  handleGridSizeGeneration("10x10");
});

const buttonHard = document.querySelector(".hard");
buttonHard.addEventListener("click", () => {
  handleGridSizeGeneration("15x15");
});

document.addEventListener("DOMContentLoaded", () => {
  generateGrid();
});
