const createHtmlTemplate = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.classList.add("container");

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  const buttonReset = document.createElement("button");
  buttonReset.classList.add("button", "reset");
  buttonReset.innerText = "Random Game";

  const buttonTheme = document.createElement("button");
  buttonTheme.classList.add("button", "theme");
  buttonTheme.innerText = "Dark Mode";

  body.append(container);
  container.append(buttonTheme, gridContainer, buttonReset);

  return gridContainer;
};

export default createHtmlTemplate;
