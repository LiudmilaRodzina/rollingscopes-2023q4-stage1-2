const createHtmlTemplate=()=> {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.classList.add("container");

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = "Random Game";

  body.append(container);
  container.append(gridContainer, button);

  return gridContainer;
}

export default createHtmlTemplate;
