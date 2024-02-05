const createHtmlTemplate = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.classList.add("container");

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerText = "Great! You have solved the nonogram!";

  const buttonClose = document.createElement("button");
  buttonClose.classList.add("button", "close", "crossed");

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const buttonReset = document.createElement("button");
  buttonReset.classList.add("button", "reset");
  buttonReset.innerText = "Random Game";

  const buttonTheme = document.createElement("button");
  buttonTheme.classList.add("button", "theme");

  const buttonSound = document.createElement("button");
  buttonSound.classList.add("button", "sound");

  body.append(container);
  container.append(overlay, modal, gridContainer, buttonsContainer);
  modal.append(buttonClose);
  buttonsContainer.append(buttonTheme, buttonReset, buttonSound);

  return gridContainer;
};

export default createHtmlTemplate;
