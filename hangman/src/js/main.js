import { createHtmlTemplate } from "./htmlTemplate.js";
import data from "./data.js";

createHtmlTemplate();

const keyboard = document.querySelector(".keyboard");
let winCount = 0;
let count = 0;
let hint = "";
let secretWord = "";

const generateQuiz = (obj) => {
  const objArray = Object.keys(obj);
  const objIndex = [Math.floor(Math.random() * objArray.length)];
  hint = obj[objArray[objIndex]];
  secretWord = objArray[objIndex].toUpperCase();
  let secretWordDisplay = secretWord.replace(
    /./g,
    '<span class="dashes">_ </span>'
  );
  document.querySelector(".section-right__word").innerHTML = secretWordDisplay;
  document.querySelector(".section-right").append(hint);
};
generateQuiz(data);

const init = () => {
  count = 0;

  for (let i = 65; i < 91; i++) {
    let key = document.createElement("button");
    key.classList.add("key");
    key.innerText = String.fromCharCode(i);
    keyboard.append(key);

    key.addEventListener("click", () => {
      let secretWordArr = secretWord.split("");
      let dashes = document.getElementsByClassName("dashes");

      if (secretWordArr.includes(key.innerText)) {
        secretWordArr.forEach((char, index) => {
          if (char === key.innerText) {
            dashes[index].innerText = char;
            winCount += 1;
            if (winCount == secretWordArr.length) {
              console.log("YOU WIN!");
            }
          }
        });
      } else {
        count += 1;
        if (count == 6) {
          console.log("YOU LOSE!");
        }
      }
    });
    keyboard.append(key);
  }
};
console.log(secretWord);
window.onload = init;

console.log(`Total: 60:
+ Body in the index.html is empty: +20
+ The game starts with the correct default view and a random question: +5
+ The user can play the game by using the virtual keyboard: +20
+ When the letter is correct, it appears instead of the corresponding underscore. If the letter repeats in the word, all corresponding underscores must be replaced by it: +15
`);
