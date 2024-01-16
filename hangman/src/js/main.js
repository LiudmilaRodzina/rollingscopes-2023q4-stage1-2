import { createHtmlTemplate } from "./htmlTemplate.js";
import data from "./data.js";

createHtmlTemplate();

const container = document.querySelector(".container");
const keyboard = document.querySelector(".section__keyboard");
const image = document.querySelector(".section__image_img");

let winCount = 0;
let count = 0;
let maxGuess = 6;
let hint = "";
let secretWord = "";
let overlay, modal, message, playButton;

const renderOverlay = () => {
  overlay = document.createElement("div");
  overlay.classList.add("overlay");
  container.append(overlay);
};
renderOverlay();

const gameOver = (win) => {
  setTimeout(() => {
    overlay.classList.add("show");
    modal.classList.add("show");
    message.innerText = win ? "You Win!" : "You Lose!";
  }, 400);
};

const startGame = (key, text) => {
  let secretWordArr = secretWord.split("");
  let dashes = document.getElementsByClassName("section__keyboard_dashes");
  if (secretWordArr.includes(text)) {
    secretWordArr.forEach((char, index) => {
      if (char === key.innerText) {
        dashes[index].innerText = char;
        winCount += 1;
      }
    });
  } else {
    count += 1;
    image.src = `./images/hangman-${count}.svg`;
    document.querySelector(
      ".section__quiz_count"
    ).innerText = `Incorrect guesses: ${count} / ${maxGuess} `;
  }
  key.disabled = true;

  if (count === maxGuess) return gameOver(false);
  if (winCount == secretWordArr.length) return gameOver(true);
};

let key;
for (let i = 65; i < 91; i++) {
  key = document.createElement("button");
  key.classList.add("section__keyboard_key");
  key.innerText = String.fromCharCode(i);
  keyboard.append(key);

  key.addEventListener("click", (e) =>
    startGame(e.target, String.fromCharCode(i))
  );
}

const generateQuiz = (obj) => {
  const objKeysArr = Object.keys(obj);
  const randomIndex = [Math.floor(Math.random() * objKeysArr.length)];
  hint = obj[objKeysArr[randomIndex]];
  secretWord = objKeysArr[randomIndex].toUpperCase();
  let secretWordHidden = secretWord.replace(
    /./g,
    '<span class="section__keyboard_dashes">_ </span>'
  );
  document.querySelector(".section__quiz_word").innerHTML = secretWordHidden;
  document.querySelector(".section__quiz_hint").append(hint);
};

const renderModal = () => {
  modal = document.createElement("div");
  modal.classList.add("modal");
  container.append(modal);

  message = document.createElement("h2");

  let secretWordModal = document.createElement("h3");
  secretWordModal.innerHTML = `The word was: ${secretWord}`;

  playButton = document.createElement("button");
  playButton.innerText = "New Game";
  playButton.classList.add("button-play");

  modal.append(message);
  modal.append(secretWordModal);
  modal.append(playButton);
};

generateQuiz(data);
renderModal();
console.log(secretWord);

console.log(
  `Привет! Ещё продолжаю выполнять задание.

  Пока total 115 баллов (150 - 35). Не выполнено:
  - The user can play the game by using the physical keyboard: -20
  - When the user clicks the 'play again' button, the game starts over: -15.

  Если есть возможность, вернись, пожалуйста, к проверке ближе к концу кросс-чека. Спасибо!`
);
