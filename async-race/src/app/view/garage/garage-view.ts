import "./garage-view.scss";
import WinnersView from "../winners/winners-view";
import { fetchCars } from "../../api/api";
import Car from "../../types/interfaces";
import carSvg from "/images/car.svg";
import carData from "../../data/data";

export default class GarageView {
  private winnersView: WinnersView | null = null;

  setWinnersView(winnersView: WinnersView): void {
    this.winnersView = winnersView;
  }

  async displayGarage(): Promise<void> {
    const garageContainer = document.createElement("div");
    garageContainer.classList.add("garage-container");
    garageContainer.innerHTML = `
    <h2>Garage</h2>
    <p>Page #1</p>
    <p style="color: brown;">Garage under construction. Please come back later</p>
    <button id="button-generate">GENERATE CARS</button>
    <button id="button-winners">TO WINNERS</button>
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

    const buttonGenerate = document.getElementById(
      "button-generate",
    ) as HTMLButtonElement;
    buttonGenerate.addEventListener("click", () => {
      this.generateRandomCars(100);
    });

    fetchCars()
      .then((cars: Car[]) => {
        cars.forEach((car: Car) => {
          const carContainer = this.renderCar(car);
          garageContainer.append(carContainer);
        });
      })
      .catch(() => {
        const errorMessage = "Error fetching and displaying cars";
        console.error(errorMessage);
      });
  }

  private renderCar(car: Car): HTMLDivElement {
    const carContainer = document.createElement("div");
    carContainer.classList.add("car-container");

    this.renderCarName(car.name, carContainer);
    this.renderCarImage(car, carContainer);

    return carContainer;
  }

  private renderCarName(name: string, container: HTMLElement): void {
    const carNameElement = document.createElement("span");
    carNameElement.textContent = name;
    carNameElement.classList.add("car-name");
    container.append(carNameElement);
  }

  private renderCarImage(car: Car, container: HTMLDivElement): void {
    fetch(carSvg)
      .then((response) => response.text())
      .then((svgText) => {
        const updatedSvgText = svgText.replace(
          /fill="#323232"/g,
          `fill="${car.color}"`,
        );

        const parser = new DOMParser();
        const svgElement = parser.parseFromString(
          updatedSvgText,
          "image/svg+xml",
        ).documentElement;

        if (svgElement) {
          container.append(svgElement);
        }
      });
  }

  private generateRandomCars(count: number): void {
    const randomCars = Array.from({ length: count }, () =>
      this.generateRandomCar(),
    );
    const carContainers = randomCars.map((car) => this.renderCar(car));

    const garageContainer = document.querySelector(".garage-container");
    garageContainer?.append(...carContainers);
  }

  private generateRandomCar(): Car {
    const make =
      carData.makes[Math.floor(Math.random() * carData.makes.length)];
    const model =
      carData.models[Math.floor(Math.random() * carData.models.length)];
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const randomID = Date.now() * 1000 + Math.floor(Math.random() * 1000);
    const randomCar: Car = {
      name: `${make} ${model}`,
      color,
      id: randomID,
    };

    return randomCar;
  }
}
