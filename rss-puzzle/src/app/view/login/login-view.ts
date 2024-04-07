import "./login-view.scss";
import ElementCreator from "../element-creator";
import {
  CLASS_NAME,
  TAG,
  TEXT_CONTENT,
  INPUT_ATTRIBUTE_NAME,
  AUTOCOMPLETE_OFF,
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
