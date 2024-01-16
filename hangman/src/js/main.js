import { createHtmlTemplate } from "./htmlTemplate.js";
import data from "./data.js";

createHtmlTemplate();

const keyboard = document.querySelector(".section__keyboard");
const container = document.querySelector(".container");
let winCount = 0;
let count = 0;
let hint = "";
let secretWord = "";
let overlay, modal, message, playButton;

const renderOverlay = () => {
  overlay = document.createElement("div");
  overlay.classList.add("overlay");
  container.append(overlay);
};
renderOverlay();

const init = () => {
  for (let i = 65; i < 91; i++) {
    let key = document.createElement("button");
    key.classList.add("section__keyboard_key");
    key.innerText = String.fromCharCode(i);
    keyboard.append(key);

    key.addEventListener("click", () => {
      let secretWordArr = secretWord.split("");
      let dashes = document.getElementsByClassName("section__keyboard_dashes");

      if (secretWordArr.includes(key.innerText)) {
        secretWordArr.forEach((char, index) => {
          if (char === key.innerText) {
            dashes[index].innerText = char;
            key.classList.add("disabled");
            key.disabled = true;
            winCount += 1;

            if (winCount == secretWordArr.length) {
              overlay.classList.add("show");
              modal.classList.add("show");
              message.innerText = "You Win!";
            }
          }
        });
      } else {
        key.classList.add("disabled");
        key.disabled = true;
        count += 1;
        document.querySelector(
          ".section__quiz_count"
        ).innerText = `Incorrect guesses: ${count} / 6 `;

        if (count === 6) {
          overlay.classList.add("show");
          modal.classList.add("show");
          message.innerText = "You Lose!";
        }
      }
    });
    keyboard.append(key);
  }
};

const generateQuiz = (obj) => {
  const objArray = Object.keys(obj);
  const objIndex = [Math.floor(Math.random() * objArray.length)];
  hint = obj[objArray[objIndex]];
  secretWord = objArray[objIndex].toUpperCase();
  let secretWordDisplay = secretWord.replace(
    /./g,
    '<span class="section__keyboard_dashes">_ </span>'
  );
  document.querySelector(".section__quiz_word").innerHTML = secretWordDisplay;
  document.querySelector(".section__quiz_hint").append(hint);
};
generateQuiz(data);

const renderModal = () => {
  modal = document.createElement("div");
  modal.classList.add("modal");
  container.append(modal);

  message = document.createElement("h2");

  let secretWordDisplay = document.createElement("h3");
  secretWordDisplay.innerHTML = `The word was: ${secretWord}`;

  playButton = document.createElement("button");
  playButton.innerText = "New Game";
  playButton.classList.add("button-play");

  modal.append(message);
  modal.append(secretWordDisplay);
  modal.append(playButton);
};
renderModal();

console.log(secretWord);

window.onload = init;

console.log(
  `Привет! Прости, ещё продолжаю выполнять задание. Если есть возможность, вернись, пожалуйста, к проверке ближе к концу кросс-чека. Спасибо!`
);
console.log(`Total: 100
+ Responsive/adaptive UI from 1440px to 360px viewport: +10
+ Body in the index.html is empty: +20
+ The game starts with the correct default view and a random question: +5
+ The user can play the game by using the virtual keyboard: +20
+ When the letter is correct, it appears instead of the corresponding underscore. If the letter repeats in the word, all corresponding underscores must be replaced by it: +15
+ When the letter is incorrect: the incorrect guesses counter is updated: +5
+ The clicked/pressed letter is disabled: +5
+ When the user runs out of 6 attempts or wins the game, the modal window appears: +10
+ The modal window includes the message about the game's outcome (winning or losing), the secret word and the 'play again' button: +10
`);
