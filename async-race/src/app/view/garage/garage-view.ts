import "./garage-view.scss";
import WinnersView from "../winners/winners-view";

export default class GarageView {
  private winnersView: WinnersView | null = null;

  setWinnersView(winnersView: WinnersView): void {
    this.winnersView = winnersView;
  }

  displayGarage(): void {
    const garageContainer = document.createElement("div");
    garageContainer.classList.add("garage-container");
    garageContainer.innerHTML = `
      <h2>Garage (0)</h2>
      <p>Page #1</p>
      <button id="button-winners">TO WINNERS</button>
      <p style="color: brown;">Garage page under development - Coming soon!</p>

    `;

    document.body.innerHTML = "";
    document.body.append(garageContainer);

    const buttonWinners = document.getElementById(
      "button-winners",
    ) as HTMLButtonElement;

    buttonWinners.addEventListener("click", () => {
      if (this.winnersView) {
        this.winnersView.displayWinners();
      }
    });
  }
}
