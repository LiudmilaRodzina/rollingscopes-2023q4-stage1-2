export function createHtmlTemplate() {
  const body = document.querySelector("body");
  let template = "";
  template += `
    <div class="container">
      <div class="game">
        <div class="section">
          <div class="section__image">
          <img src="./images/gallows.png" class="section__image_img" alt="gallows image" />
          </div>
          <div class="section__quiz">
           <div class="section__quiz_word"></div>
          </div>
          <div class="section__keyboard"></div>
        </div>
      </div>
    </div>
  `;
  body.innerHTML = template;
}
