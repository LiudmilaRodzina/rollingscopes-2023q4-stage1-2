const createHtmlTemplate = () => {
  const body = document.querySelector("body");
  let template = "";
  template += `
  <div class="container">
    <div class="overlay"></div>
    <div class="modal">Great! You have solved the nonogram!
      <button class="button close crossed"></button>
    </div>
    <h1>Nonograms Game</h1>
    <div class="grid-container">
      <div class="grid"></div>
      <div class="clues-top"></div>
    </div>
    <div class="buttons-container">
      <button class="button theme"></button>
      <button class="button reset">Random Game (5x5)</button>
      <button class="button sound"></button>
    </div>
  </div>
`;
  body.innerHTML = template;

  const gridContainer = document.querySelector(".grid-container");
  return gridContainer;
};

export default createHtmlTemplate;
