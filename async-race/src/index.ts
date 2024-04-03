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

console.log(`
Done so far:

Two Views (10 points):"Garage" and "Winners"
Garage View Content (5 points): name, the current page number, and the total number of cars
Pagination (10 points): 7 cars per page
Random Car Creation (10 points): create random cars (100 cars per click)

Total: 35
`);
