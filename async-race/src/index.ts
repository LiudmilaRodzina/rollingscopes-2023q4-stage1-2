import "./index.scss";
import GarageView from "./app/view/garage/garage-view";
import WinnersView from "./app/view/winners/winners-view";

class App {
  constructor() {
    const garageView = new GarageView();
    const winnersView = new WinnersView(garageView);

    garageView.setWinnersView(winnersView);

    garageView.displayGarage();
  }
}
const newApp = new App();
export default newApp;
