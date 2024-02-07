const createHtmlTemplate = () => {
  const body = document.querySelector("body");
  let template = "";
  template += `
  <div class="container">
    <div class="overlay"></div>
    <div class="modal">Great! You have solved the nonogram!
      <button class="button close crossed"></button>
    </div>
    <h3>Nonograms Game</h3>
    <div class="grid-container">
    </div>
    <div class="buttons-container">
      <button class="button theme"></button>
      <button class="button reset">Random Game</button>
      <button class="button solution">Solution</button>
      <button class="button sound"></button>
    </div>
  </div>
`;
  body.innerHTML = template;

  const gridContainer = document.querySelector(".grid-container");
  return gridContainer;
};

export default createHtmlTemplate;
