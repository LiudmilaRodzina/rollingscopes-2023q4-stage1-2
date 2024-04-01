import "./winners-view.scss";
import GarageView from "../garage/garage-view";

export default class WinnersView {
  private garageView: GarageView;

  constructor(garageView: GarageView) {
    this.garageView = garageView;
  }

  displayWinners(): void {
    const winnersContainer = document.createElement("div");
    winnersContainer.classList.add("winners-container");
    winnersContainer.innerHTML = `
      <h2>Winners (0)</h2>
      <p>Page #1</p>
      <button id="button-garage">TO GARAGE</button>
      <p style="color: brown;">Winners page under development - Coming soon!</p>
    `;

    document.body.innerHTML = "";
    document.body.append(winnersContainer);

    const buttonGarage = document.getElementById(
      "button-garage",
    ) as HTMLButtonElement;

    buttonGarage.addEventListener("click", () => {
      this.garageView.displayGarage();
    });
  }
}
