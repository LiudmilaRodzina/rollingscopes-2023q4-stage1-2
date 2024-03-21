import "./login-view.scss";
import ElementCreator from "../element-creator";
import LoginValidator from "../../components/login/login-validator";
import LoggedInView from "../start/start-view";

export default class LoginView extends ElementCreator {
  constructor() {
    super({
      tag: "form",
      classNames: ["login-container"],
      textContent: "",
    });

    this.createLoginView();

    const formElement = this.getElement() as HTMLFormElement;
    const loginValidator = new LoginValidator(formElement, "button", "input");
    loginValidator.setupValidation();
  }

  private addElement(
    tag: string,
    text: string,
    attr: string,
    classNames: string[],
    autocomplete: string = ""
  ): void {
    const elementParams = {
      tag,
      textContent: text,
      attr,
      classNames,
      autocomplete,
    };

    const element = new ElementCreator(elementParams);

    const currentElement = this.getElement();
    if (currentElement) {
      currentElement.append(element.getElement() as Node);

      if (tag === "input") {
        const inputElement = element.getElement() as HTMLInputElement;
        inputElement.name = attr;

        if (autocomplete) {
          inputElement.setAttribute("autocomplete", autocomplete);
        }
      }
    }
  }

  private createLoginView(): void {
    this.addElement("label", "Name:", "name", ["input-label"]);
    this.addElement("input", "", "name", ["input-field", "name"], "off");
    this.addElement("label", "Surname:", "", ["input-label"]);
    this.addElement("input", "", "surname", ["input-field", "surname"], "off");
    this.addElement("button", "Login", "", ["button", "button-login"]);
  }

  static handleDOMContentLoaded() {
    document.addEventListener("DOMContentLoaded", () => {
      const { hash } = window.location;

      if (hash === "#start") {
        const loggedInView = new LoggedInView();
        const loggedInElement = loggedInView.getElement();

        if (loggedInElement) {
          document.body.innerHTML = "";
          document.body.append(loggedInElement);
        }
      }
    });
  }
}
