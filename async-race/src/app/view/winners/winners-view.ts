import "./winners-view.scss";
import Navigation from "../navigation-interface";
import { CLASS_NAME, ELEMENT_ID, BUTTON_TEXT } from "../../consts/consts";

export default class WinnersView {
  private navigateToGarage: Navigation;

  constructor(navigateToGarage: Navigation) {
    this.navigateToGarage = navigateToGarage;
  }

  public displayWinners(): void {
    const winnersContainer = document.createElement("div");
    winnersContainer.classList.add(CLASS_NAME.WINNERS_CONTAINER);
    document.body.innerHTML = "";
    document.body.append(winnersContainer);

    winnersContainer.innerHTML = `
      <h2>Winners (0)</h2>
      <p>Page #1</p>
    `;

    const buttonGarage = document.createElement("button");
    buttonGarage.id = ELEMENT_ID.BUTTON_GARAGE;
    buttonGarage.textContent = BUTTON_TEXT.TO_GARAGE;
    buttonGarage.addEventListener("click", () => {
      this.navigateToGarage.navigate();
    });

    winnersContainer.append(buttonGarage);
  }
}
