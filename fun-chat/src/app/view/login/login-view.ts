import "./login-view.scss";
import ElementCreator from "../element-creator";
import InfoView from "../info/info-view";

import {
  CLASS_NAME,
  TAG,
  TEXT_CONTENT,
  INPUT_ATTRIBUTE_NAME,
  AUTOCOMPLETE_OFF,
  INFO_BUTTON_TEXT,
} from "../../consts/consts";

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
    this.addElement(
      TAG.LABEL,
      TEXT_CONTENT.LOGIN_BTN,
      INPUT_ATTRIBUTE_NAME.BLANK,
      [CLASS_NAME.INPUT_LABEL],
    );

    this.addElement(
      TAG.INPUT,
      TEXT_CONTENT.BLANK,
      INPUT_ATTRIBUTE_NAME.LOGIN,
      [CLASS_NAME.INPUT_FIELD, "login"],
      AUTOCOMPLETE_OFF,
    );

    this.addElement(
      TAG.LABEL,
      TEXT_CONTENT.PASSWORD,
      INPUT_ATTRIBUTE_NAME.BLANK,
      [CLASS_NAME.INPUT_LABEL],
    );

    this.addElement(
      TAG.INPUT,
      TEXT_CONTENT.BLANK,
      INPUT_ATTRIBUTE_NAME.PASSWORD,
      [CLASS_NAME.INPUT_FIELD, "password"],
      AUTOCOMPLETE_OFF,
    );

    const loginButton = new ElementCreator({
      tag: TAG.BTN,
      textContent: TEXT_CONTENT.LOGIN_BTN,
      classNames: [CLASS_NAME.BUTTON_LOGIN],
    });
    const buttonElement = loginButton.getElement() as HTMLButtonElement;
    buttonElement.disabled = true;
    this.getElement()?.append(buttonElement);

    const infoButton = document.createElement(TAG.BTN);
    infoButton.textContent = INFO_BUTTON_TEXT;
    infoButton.classList.add(CLASS_NAME.BUTTON_INFO);
    infoButton.addEventListener("click", () => {
      const infoView = new InfoView();
      document.body.innerHTML = "";
      document.body.append(infoView.getElement() as Node);
    });
    this.getElement()?.append(infoButton);
  }
}
