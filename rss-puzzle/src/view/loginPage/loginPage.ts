import "./loginPage.scss";
import ElementCreator from "../element-creator";

export default class LoginView extends ElementCreator {
  constructor() {
    super({
      tag: "div",
      classNames: ["login-container"],
      textContent: "",
    });

    this.createLoginView();
    this.updateButtonState();
  }

  updateButtonState(): void {
    const loginButton = this.getElement()?.querySelector(
      "button",
    ) as HTMLButtonElement;

    if (loginButton) {
      loginButton.disabled = true;

      const allInputs = Array.from(
        this.getElement()?.querySelectorAll("input") || [],
      ) as HTMLInputElement[];

      allInputs.forEach((innerInput) => {
        innerInput.addEventListener("input", () => {
          const allInputsFilled = allInputs.every(
            (input) => input.value.trim() !== "",
          );

          loginButton.disabled = !allInputsFilled;
        });
      });
    }
  }

  addElement(
    tag: string,
    text: string,
    id: string,
    classNames: string[] = [],
  ): void {
    const elementParams = {
      tag,
      textContent: text,
      id,
      classNames,
    };

    const element = new ElementCreator(elementParams);

    if (tag === "input") {
      element.getElement()?.setAttribute("required", "true");
    }

    const currentElement = this.getElement();
    if (currentElement) {
      currentElement.append(element.getElement() as Node);
    }
  }

  createLoginView(): void {
    this.addElement("label", "Name:", "name", ["input-label"]);
    this.addElement("input", "", "name", ["name", "input-field"]);
    this.addElement("label", "Surname:", "surname", ["input-label"]);
    this.addElement("input", "", "surname", ["surname", "input-field"]);
    this.addElement("button", "Login", "", ["button"]);
  }
}
