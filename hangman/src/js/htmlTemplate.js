export function createHtmlTemplate() {
  const body = document.querySelector("body");
  let template = "";
  template += `
    <div class="container">
      <p class="request"><-- Привет! Прости, не успела закончить задание. Если есть возможность, вернись, пожалуйста, к проверке ближе к концу кросс-чека. Спасибо! --> </p>
      <div class="game">
        <div class="section">
          <div class="section-left">
          <img src="./public/images/gallows.png" class="image" alt="gallows image" />
          </div>
          <div class="section-right">
          <div class="section-right__word"></div>
          </div>
        </div>
        <div class="keyboard"></div>
      </div>
    </div>
  `;
  body.innerHTML = template;
}
