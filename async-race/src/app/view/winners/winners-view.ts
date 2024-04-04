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
    document.body.innerHTML = "";
    document.body.append(winnersContainer);

    winnersContainer.innerHTML = `
      <h2>Winners (0)</h2>
      <p>Page #1</p>
    `;

    const buttonGarage = document.createElement("button");
    buttonGarage.classList.add("button-garage");
    buttonGarage.textContent = "TO GARAGE";
    buttonGarage.addEventListener("click", () => {
      this.garageView.displayGarage();
    });

    winnersContainer.append(buttonGarage);
  }
}
