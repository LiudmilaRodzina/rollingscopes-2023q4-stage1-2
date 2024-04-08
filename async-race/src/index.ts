import "./index.scss";
import GarageView from "./app/view/garage/garage-view";
import WinnersView from "./app/view/winners/winners-view";

class App {
  constructor() {
    let garageView: GarageView;
    let winnersView: WinnersView;

    const navigateToWinners = () => {
      winnersView.displayWinners();
    };

    const navigateToGarage = () => {
      garageView.displayGarage();
    };

    garageView = new GarageView({ navigate: navigateToWinners });
    winnersView = new WinnersView({ navigate: navigateToGarage });

    garageView.displayGarage();
  }
}

const newApp = new App();
export default newApp;
