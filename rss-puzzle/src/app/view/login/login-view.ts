import "./login-view.scss";
import ElementCreator from "../element-creator";

const CLASS_NAME = {
  LOGIN_CONTAINER: "login-container",
  INPUT_FIELD: "input-field",
  INPUT_LABEL: "input-label",
  BUTTON_LOGIN: "button-login",
};

const TAG = {
  FORM: "form",
  INPUT: "input",
  LABEL: "label",
  BUTTON: "button",
};

const TEXT_CONTENT = {
  NAME: "Name:",
  SURNAME: "Surname:",
  LOGIN: "Login",
  BLANK: "",
};

const INPUT_ATTRIBUTE_NAME = {
  NAME: "first-name",
  SURNAME: "surname",
  BLANK: "",
};

const AUTOCOMPLETE_OFF = "off";

export default class LoginView extends ElementCreator {
  constructor() {
    super({
      tag: TAG.FORM,
      classNames: [CLASS_NAME.LOGIN_CONTAINER],
      textContent: "",
    });
    this.createLoginView();
  }

  private addElement(
    tag: string,
    text: string,
    attr: string,
    classNames: string[],
    autocomplete: string = "",
  ): void {
    const elementParams = {
      tag,
      textContent: text,
      classNames,
    };

    const element = new ElementCreator(elementParams);

    const currentElement = this.getElement();
    if (currentElement) {
      currentElement.append(element.getElement() as Node);

      if (tag === TAG.INPUT) {
        const inputElement = element.getElement() as HTMLInputElement;
        inputElement.name = attr;

        if (autocomplete) {
          inputElement.setAttribute("autocomplete", autocomplete);
        }
      }
    }
  }

  private createLoginView(): void {
    this.addElement(TAG.LABEL, TEXT_CONTENT.NAME, INPUT_ATTRIBUTE_NAME.BLANK, [
      CLASS_NAME.INPUT_LABEL,
    ]);

    this.addElement(
      TAG.INPUT,
      TEXT_CONTENT.BLANK,
      INPUT_ATTRIBUTE_NAME.NAME,
      [CLASS_NAME.INPUT_FIELD],
      AUTOCOMPLETE_OFF,
    );

    this.addElement(
      TAG.LABEL,
      TEXT_CONTENT.SURNAME,
      INPUT_ATTRIBUTE_NAME.BLANK,
      [CLASS_NAME.INPUT_LABEL],
    );

    this.addElement(
      TAG.INPUT,
      TEXT_CONTENT.BLANK,
      INPUT_ATTRIBUTE_NAME.SURNAME,
      [CLASS_NAME.INPUT_FIELD],
      AUTOCOMPLETE_OFF,
    );

    const loginButton = new ElementCreator({
      tag: TAG.BUTTON,
      textContent: TEXT_CONTENT.LOGIN,
      classNames: [CLASS_NAME.BUTTON_LOGIN],
    });

    const buttonElement = loginButton.getElement() as HTMLButtonElement;
    buttonElement.disabled = true;

    this.getElement()?.append(buttonElement);
  }
}
