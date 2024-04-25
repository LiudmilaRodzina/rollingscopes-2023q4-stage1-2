import "./login-handler.scss";
import ErrorMessage from "../types/enums";
import SessionStorageHandler from "../storage/sessionStorage-handler";
import ChatView from "../view/chat/chat-view";
import InfoView from "../view/info/info-view";
import {
  CLASS_NAME,
  TAG,
  HASH_VALUE,
  INPUT_ATTRIBUTE,
  INPUT_ATTRIBUTE_NAME,
  MIN_LENGTH_LOGIN,
  MIN_LENGTH_PASSWORD,
} from "../consts/consts";

export default class LoginHandler {
  formElement: HTMLFormElement;

  loginButton: HTMLButtonElement;

  allInputs: HTMLInputElement[];

  constructor(
    formElement: HTMLFormElement,
    loginButtonSelector: string,
    inputSelector: string,
  ) {
    this.formElement = formElement;
    this.loginButton = this.formElement.querySelector(
      loginButtonSelector,
    ) as HTMLButtonElement;
    this.allInputs = Array.from(
      this.formElement.querySelectorAll(inputSelector),
    ) as HTMLInputElement[];
  }

  public setupValidation(): void {
    if (this.loginButton) {
      this.loginButton.addEventListener("click", () => {
        const userData = this.getUserDataFromInputs();
        if (userData) {
          SessionStorageHandler.saveUserData(userData);
        }
        LoginHandler.displayChatView();
      });

      this.allInputs.forEach((input: HTMLInputElement) => {
        input.addEventListener("input", () => {
          this.validateEmptyInputs();
          this.validateCharacterRestriction(input);
          LoginHandler.validateMinimumLength(input);
        });

        if (input.tagName === TAG.INPUT) {
          input.setAttribute("required", "true");
        }
      });
    }
  }

  private validateEmptyInputs(): void {
    const allInputsFilled = this.allInputs.every(
      (input: HTMLInputElement) =>
        input.value.trim() !== "" &&
        this.validateCharacterRestriction(input) &&
        LoginHandler.validateMinimumLength(input),
    );

    if (this.loginButton) {
      this.loginButton.disabled = !allInputsFilled;
    }
  }

  private validateCharacterRestriction(input: HTMLInputElement): boolean {
    const regex = /^[a-zA-Z0-9]*$/;

    if (!regex.test(input.value)) {
      const errorMessage = ErrorMessage.CharacterRestriction;

      this.hideAllErrorMessages(input);
      LoginHandler.showErrorMessage(input, errorMessage);
      return false;
    }
    LoginHandler.hideErrorMessage(input);
    return true;
  }

  static validateMinimumLength(input: HTMLInputElement): boolean {
    const fieldName = input.getAttribute(INPUT_ATTRIBUTE.NAME);
    const minLength =
      fieldName === INPUT_ATTRIBUTE_NAME.LOGIN
        ? MIN_LENGTH_LOGIN
        : MIN_LENGTH_PASSWORD;
    const currentErrorMessage = input.nextElementSibling as HTMLElement;

    if (
      currentErrorMessage &&
      currentErrorMessage.className === CLASS_NAME.ERROR_MESSAGE_CLASS
    ) {
      return true;
    }

    if (input.value.length < minLength) {
      const errorMessage =
        fieldName === INPUT_ATTRIBUTE_NAME.LOGIN
          ? ErrorMessage.LengthRestrictionLogin
          : ErrorMessage.LengthRestrictionPassword;

      LoginHandler.showErrorMessage(input, errorMessage);
      return false;
    }
    LoginHandler.hideErrorMessage(input);
    return true;
  }

  static showErrorMessage(input: HTMLInputElement, message: string): void {
    const errorElement = input.nextElementSibling as HTMLElement;
    if (
      !errorElement ||
      errorElement.className !== CLASS_NAME.ERROR_MESSAGE_CLASS
    ) {
      const errorMessage = document.createElement(TAG.SPAN);
      errorMessage.className = CLASS_NAME.ERROR_MESSAGE_CLASS;
      errorMessage.textContent = message;
      input.insertAdjacentElement("afterend", errorMessage);
    }
  }

  static hideErrorMessage(input: HTMLInputElement): void {
    const errorElement = input.nextElementSibling as HTMLElement;
    if (
      errorElement &&
      errorElement.className === CLASS_NAME.ERROR_MESSAGE_CLASS
    ) {
      errorElement.remove();
    }
  }

  private hideAllErrorMessages(currentInput: HTMLInputElement): void {
    this.allInputs.forEach((input: HTMLInputElement) => {
      if (!LoginHandler.skipErrorHiding(currentInput, input)) {
        LoginHandler.hideErrorMessage(input);
      }
    });
  }

  static skipErrorHiding(
    currentInput: HTMLInputElement,
    inputToCheck: HTMLInputElement,
  ): boolean {
    if (inputToCheck === currentInput) {
      return false;
    }
    if (
      currentInput.getAttribute(INPUT_ATTRIBUTE.NAME) !==
      inputToCheck.getAttribute(INPUT_ATTRIBUTE.NAME)
    ) {
      return true;
    }
    return false;
  }

  private getUserDataFromInputs(): { [key: string]: string } | null {
    const userData: { [key: string]: string } = {};

    this.allInputs.forEach((input: HTMLInputElement) => {
      const fieldName = input.getAttribute(INPUT_ATTRIBUTE.NAME);
      const value = input.value.trim();

      if (fieldName && value) {
        userData[fieldName] = value;
      }
    });

    return Object.keys(userData).length > 0 ? userData : null;
  }

  static displayChatView(): void {
    const userLogin = SessionStorageHandler.getUserData();
    if (userLogin) {
      const chatView = new ChatView();
      const chatElement = chatView.getElement();

      if (chatElement) {
        const user = document.querySelector(".messenger__user") as HTMLElement;
        if (user) {
          user.innerText = userLogin.login;
        }

        window.history.pushState(null, "", `#${HASH_VALUE.CHAT}`);
        document.body.innerHTML = "";
        document.body.append(chatElement);
      }
    }
  }

  static stayLoggedInOnLoad() {
    document.addEventListener("DOMContentLoaded", () => {
      const { hash } = window.location;

      if (hash === `#${HASH_VALUE.CHAT}`) {
        const chatView = new ChatView();
        const chatElement = chatView.getElement();

        if (chatElement) {
          document.body.innerHTML = "";
          document.body.append(chatElement);
        }
      }

      if (hash === `#${HASH_VALUE.INFO}`) {
        const infoView = new InfoView();
        const infoViewElement = infoView.getElement();

        if (infoViewElement) {
          document.body.innerHTML = "";
          document.body.append(infoViewElement);
        }
      }
    });
  }
}
