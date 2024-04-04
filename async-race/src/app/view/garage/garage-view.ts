import "./garage-view.scss";
import WinnersView from "../winners/winners-view";
import { fetchCars } from "../../api/api";
import Car from "../../types/interfaces";
import carData from "../../data/data";
import carSvg from "/images/car.svg";

export default class GarageView {
  private winnersView: WinnersView | null = null;

  private totalCars: number = 0;

  private currentPage: number = 1;

  private carsPerPage: number = 7;

  setWinnersView(winnersView: WinnersView): void {
    this.winnersView = winnersView;
  }

  async displayGarage(): Promise<void> {
    const garageContainer = document.createElement("div");
    garageContainer.classList.add("garage-container");
    document.body.innerHTML = "";
    document.body.append(garageContainer);

    const header = document.createElement("div");
    header.classList.add("header");
    garageContainer.append(header);

    header.innerHTML = `
    <h2>Garage (${this.totalCars})</h2>
    <p>Page #${this.currentPage}</p>
  `;

    const buttonWinners = document.createElement("button");
    buttonWinners.id = "button-winners";
    buttonWinners.textContent = "TO WINNERS";
    buttonWinners.addEventListener("click", () => {
      this.winnersView?.displayWinners();
    });

    const buttonGenerate = document.createElement("button");
    buttonGenerate.id = "button-generate";
    buttonGenerate.textContent = "GENERATE CARS";
    buttonGenerate.addEventListener("click", () => {
      this.generateRandomCars(100);
    });

    const main = document.createElement("div");
    main.classList.add("main");
    garageContainer.append(main);

    header.append(buttonGenerate, buttonWinners);

    await this.displayCars();
  }

  private async displayCars(): Promise<void> {
    const cars = await fetchCars();
    this.totalCars = cars.length;

    const main = document.querySelector(".main") as HTMLElement;
    this.displayPaginationButtons();

    for (const car of cars) {
      const carContainer = this.renderCar(car);
      main.append(carContainer);
    }

    this.updateTotalCarsCount();
    this.updatePageNumber();
    this.updateVisibilityOfCars();
  }

  private displayPaginationButtons(): void {
    const main = document.querySelector(".main") as HTMLElement;

    const buttonsPagination = document.createElement("div");
    buttonsPagination.classList.add("buttons-pagination");
    main.append(buttonsPagination);

    const prevButton = document.createElement("button");
    prevButton.textContent = "<< Previous Page";
    prevButton.addEventListener("click", () => {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.updateVisibilityOfCars();
        this.updatePageNumber();
      }
    });

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next Page >>";
    nextButton.addEventListener("click", () => {
      const maxPage = Math.ceil(this.totalCars / this.carsPerPage);
      if (this.currentPage < maxPage) {
        this.currentPage += 1;
        this.updateVisibilityOfCars();
        this.updatePageNumber();
      }
    });

    buttonsPagination.append(prevButton, nextButton);
  }

  private updateVisibilityOfCars(): void {
    const garageContainer = document.querySelector(
      ".garage-container",
    ) as HTMLElement;

    const allCarContainers = garageContainer.querySelectorAll(".car-container");

    allCarContainers.forEach((carContainer, index) => {
      const container = carContainer as HTMLElement;
      container.style.display = "none";

      if (
        index >= (this.currentPage - 1) * this.carsPerPage &&
        index < this.currentPage * this.carsPerPage
      ) {
        container.style.display = "flex";
      }
    });
  }

  private updatePageNumber(): void {
    const pageText = document.querySelector(".garage-container p");
    if (pageText) {
      pageText.textContent = `Page #${this.currentPage}`;
    }
  }

  private updateTotalCarsCount(): void {
    const garageTitle = document.querySelector(".garage-container h2");
    if (garageTitle) {
      garageTitle.textContent = `Garage (${this.totalCars})`;
    }
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

  private async generateRandomCars(count: number): Promise<void> {
    const randomCars = Array.from({ length: count }, () =>
      this.generateRandomCar(),
    );

    const main = document.querySelector(".main") as HTMLElement;
    const carContainers = randomCars.map((car) => this.renderCar(car));
    main.append(...carContainers);

    this.totalCars += count;
    this.updateTotalCarsCount();

    const maxPage = Math.ceil(this.totalCars / this.carsPerPage);
    if (this.currentPage > maxPage) {
      this.currentPage = maxPage;
    }

    this.updatePageNumber();
    this.updateVisibilityOfCars();
  }

  private generateRandomCar(): Car {
    const make =
      carData.makes[Math.floor(Math.random() * carData.makes.length)];
    const model =
      carData.models[Math.floor(Math.random() * carData.models.length)];
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return {
      name: `${make} ${model}`,
      color,
    };
  }
}
