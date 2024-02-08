const puzzles = [
  {
    matrix: [
      [0, 1, 1, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ],
    title: "space invader",
    size: "5x5",
  },
  {
    matrix: [
      [0, 1, 0, 0, 0],
      [1, 1, 1, 0, 1],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 0, 0],
      [1, 0, 1, 0, 0],
    ],
    title: "camel",
    size: "5x5",
  },
  {
    matrix: [
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0],
    ],
    title: "umbrella",
    size: "5x5",
  },
  {
    matrix: [
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
    title: "heart",
    size: "5x5",
  },
  {
    matrix: [
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
    ],
    title: "hourglass",
    size: "5x5",
  },
  {
    matrix: [
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    ],
    title: "bird",
    size: "10x10",
  },
  {
    matrix: [
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    ],
    title: "car",
    size: "10x10",
  },
  {
    matrix: [
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 1, 0],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
      [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    title: "mushroom",
    size: "10x10",
  },
  {
    matrix: [
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    ],
    title: "crab",
    size: "10x10",
  },
  {
    matrix: [
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
    ],
    title: "cat",
    size: "10x10",
  },
  {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    ],
    title: "duck",
    size: "15x15",
  },

  {
    matrix: [
      [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    title: "clover leaf",
    size: "15x15",
  },
  {
    matrix: [
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    title: "bow",
    size: "15x15",
  },
  {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ],
    title: "paw",
    size: "15x15",
  },
  {
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    title: "sun",
    size: "15x15",
  },
];

export default puzzles;

// const buttonEasy = document.querySelector(".easy");
// buttonEasy.addEventListener("click", () => {
//   playSound("reset");
//   gridSize = 5;
//   generateGrid();
// });

// const buttonMedium = document.querySelector(".medium");
// buttonMedium.addEventListener("click", () => {
//   playSound("reset");
//   gridSize = 10;
//   generateGrid();
// });

// const buttonHard = document.querySelector(".hard");
// buttonHard.addEventListener("click", () => {
//   playSound("reset");
//   gridSize = 15;
//   generateGrid();
// });
