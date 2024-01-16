export function createHtmlTemplate() {
  const body = document.querySelector("body");
  let template = "";
  template += `
    <div class="container">
      <div class="game">
        <div class="section">
          <div class="section__image">
          <h1>Hangman Game</h1>
          <img src="./images/hangman-0.svg" class="section__image_img" alt="gallows image" />
          </div>
          <div class="section__quiz">
           <div class="section__quiz_word"></div>
           <div class="section__quiz_hint"></div>
           <div class="section__quiz_count">Incorrect guesses: 0 / 6</div>
           </div>
          <div class="section__keyboard"></div>
        </div>
      </div>
    </div>
  `;
  body.innerHTML = template;
}
