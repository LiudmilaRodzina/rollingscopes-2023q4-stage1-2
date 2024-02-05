const createHtmlTemplate = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.classList.add("container");

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const buttonReset = document.createElement("button");
  buttonReset.classList.add("button", "reset");
  buttonReset.innerText = "Random Game";

  const buttonTheme = document.createElement("button");
  buttonTheme.classList.add("button", "theme");
  buttonTheme.innerText = "⚫";

  const buttonSound = document.createElement("button");
  buttonSound.classList.add("button", "sound");

  body.append(container);

  container.append(gridContainer, buttonsContainer);
  buttonsContainer.append(buttonTheme, buttonReset, buttonSound);

  return gridContainer;
};

export default createHtmlTemplate;
