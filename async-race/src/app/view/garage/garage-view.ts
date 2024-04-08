import "./garage-view.scss";
import Navigation from "../navigation-interface";
import fetchCars from "../../api/fetch-cars";
import Car from "../../types/interfaces";
import carData from "../../data/data";
import carSvg from "../../../../public/images/car.svg";
import {
  PAGE_SIZE,
  RANDOM_CARS_COUNT,
  BUTTON_TEXT,
  CLASS_NAME,
  ELEMENT_ID,
  SVG_FILL_COLOR_REGEX,
} from "../../consts/consts";

export default class GarageView {
  private navigateToWinners: Navigation;

  constructor(navigateToWinners: Navigation) {
    this.navigateToWinners = navigateToWinners;
  }

  private totalCars: number = 0;

  private currentPage: number = 1;

  public displayGarage(): void {
    this.currentPage = 1;

    const garageContainer = document.createElement("div");
    garageContainer.classList.add(CLASS_NAME.GARAGE_CONTAINER);
    document.body.innerHTML = "";
    document.body.append(garageContainer);

    const header = document.createElement("div");
    header.classList.add(CLASS_NAME.HEADER);
    garageContainer.append(header);

    header.innerHTML = `
    <h2>Garage (${this.totalCars})</h2>
    <p>Page #${this.currentPage}</p>
  `;

    const buttonWinners = document.createElement("button");
    buttonWinners.id = ELEMENT_ID.BUTTON_WINNERS;
    buttonWinners.textContent = BUTTON_TEXT.TO_WINNERS;
    buttonWinners.addEventListener("click", () => {
      this.navigateToWinners.navigate();
    });

    const buttonGenerate = document.createElement("button");
    buttonGenerate.id = ELEMENT_ID.BUTTON_GENERATE;
    buttonGenerate.textContent = BUTTON_TEXT.GENERATE_CARS;
    buttonGenerate.addEventListener("click", () => {
      this.generateRandomCars(RANDOM_CARS_COUNT);
    });

    const main = document.createElement("div");
    main.classList.add("main");
    garageContainer.append(main);

    header.append(buttonGenerate, buttonWinners);

    this.displayCars();
  }

  private async displayCars(): Promise<void> {
    try {
      const cars = await fetchCars();
      this.totalCars = cars.length;

      const main = document.querySelector(`.${CLASS_NAME.MAIN}`) as HTMLElement;
      this.displayPaginationButtons();

      const carContainers = cars.map((car: Car) => GarageView.renderCar(car));
      main.append(...carContainers);

      this.updateTotalCarsCount();
      this.updatePageNumber();
      this.updateVisibilityOfCars();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  private displayPaginationButtons(): void {
    const main = document.querySelector(`.${CLASS_NAME.MAIN}`) as HTMLElement;

    const buttonsPagination = document.createElement("div");
    buttonsPagination.classList.add(CLASS_NAME.BUTTONS_PAGINATION);
    main.append(buttonsPagination);

    const prevButton = document.createElement("button");
    prevButton.textContent = BUTTON_TEXT.PREV_PAGE;
    prevButton.addEventListener("click", () => {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.updateVisibilityOfCars();
        this.updatePageNumber();
      }
    });

    const nextButton = document.createElement("button");
    nextButton.textContent = BUTTON_TEXT.NEXT_PAGE;
    nextButton.addEventListener("click", () => {
      const maxPage = Math.ceil(this.totalCars / PAGE_SIZE);
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
      `.${CLASS_NAME.GARAGE_CONTAINER}`,
    ) as HTMLElement;

    const allCarContainers = garageContainer.querySelectorAll(
      `.${CLASS_NAME.CAR_CONTAINER}`,
    );

    allCarContainers.forEach((carContainer, index) => {
      const container = carContainer as HTMLElement;
      container.style.display = "none";

      if (
        index >= (this.currentPage - 1) * PAGE_SIZE &&
        index < this.currentPage * PAGE_SIZE
      ) {
        container.style.display = "flex";
      }
    });
  }

  private updatePageNumber(): void {
    const pageText = document.querySelector(
      `.${CLASS_NAME.GARAGE_CONTAINER} p`,
    );
    if (pageText) {
      pageText.textContent = `Page #${this.currentPage}`;
    }
  }

  private updateTotalCarsCount(): void {
    const garageTitle = document.querySelector(
      `.${CLASS_NAME.GARAGE_CONTAINER} h2`,
    );
    if (garageTitle) {
      garageTitle.textContent = `Garage (${this.totalCars})`;
    }
  }

  static renderCar(car: Car): HTMLDivElement {
    const carContainer = document.createElement("div");
    carContainer.classList.add(CLASS_NAME.CAR_CONTAINER);

    GarageView.renderCarName(car.name, carContainer);
    GarageView.renderCarImage(car, carContainer);

    return carContainer;
  }

  static renderCarName(name: string, container: HTMLElement): void {
    const carNameElement = document.createElement("span");
    carNameElement.textContent = name;
    carNameElement.classList.add(CLASS_NAME.CAR_NAME);
    container.append(carNameElement);
  }

  static async renderCarImage(
    car: Car,
    container: HTMLDivElement,
  ): Promise<void> {
    try {
      const response = await fetch(carSvg);
      const svgText = await response.text();
      const updatedSvgText = GarageView.updateSvgFillColor(svgText, car.color);

      const parser = new DOMParser();
      const svgElement = parser.parseFromString(
        updatedSvgText,
        "image/svg+xml",
      ).documentElement;

      container.append(svgElement);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  static updateSvgFillColor(svgText: string, color: string): string {
    return svgText.replace(SVG_FILL_COLOR_REGEX, `fill="${color}"`);
  }

  private generateRandomCars(count: number): void {
    const randomCars = Array.from({ length: count }, () =>
      GarageView.generateRandomCar(),
    );

    const main = document.querySelector(`.${CLASS_NAME.MAIN}`) as HTMLElement;
    const carContainers = randomCars.map((car: Car) =>
      GarageView.renderCar(car),
    );
    main.append(...carContainers);

    this.totalCars += count;
    this.updateTotalCarsCount();

    const maxPage = Math.ceil(this.totalCars / PAGE_SIZE);
    if (this.currentPage > maxPage) {
      this.currentPage = maxPage;
    }

    this.updatePageNumber();
    this.updateVisibilityOfCars();
  }

  static generateRandomCar(): Car {
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
