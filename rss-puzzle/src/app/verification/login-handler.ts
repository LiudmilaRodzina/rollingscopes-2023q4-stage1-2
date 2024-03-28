import './login-handler.scss';
import ErrorMessage from '../types/enums';
import LocalStorageHandler from '../storage/localStorage-handler';
import StartScreenView from '../view/start/start-view';
import GameView from '../view/game/game-view';

const CLASS_NAME = { ERROR_MESSAGE_CLASS: 'error-message' };

const TAG = {
  INPUT: 'input',
  SPAN: 'span',
};

const HASH_VALUE = {
  START: 'start',
  GAME: 'game',
};

const INPUT_ATTRIBUTE = {
  NAME: 'name',
};
const INPUT_ATTRIBUTE_NAME = {
  FIRST_NAME: 'first-name',
  SURNAME: 'surname',
  BLANK: '',
};

const MIN_LENGTH_NAME = 3;
const MIN_LENGTH_SURNAME = 4;

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
      this.loginButton.addEventListener('click', () => {
        const userData = this.getUserDataFromInputs();
        if (userData) {
          LocalStorageHandler.saveUserData(userData);
        }
        LoginHandler.displayStartScreenView();
      });

      this.allInputs.forEach((input: HTMLInputElement) => {
        input.addEventListener('input', () => {
          this.validateEmptyInputs();
          LoginHandler.validateUppercaseFirstLetter(input);
          this.validateCharacterRestriction(input);
          LoginHandler.validateMinimumLength(input);
        });

        if (input.tagName === TAG.INPUT) {
          input.setAttribute('required', 'true');
        }
      });
    }
  }

  private validateEmptyInputs(): void {
    const allInputsFilled = this.allInputs.every(
      (input: HTMLInputElement) => input.value.trim() !== ''
        && LoginHandler.validateUppercaseFirstLetter(input)
        && this.validateCharacterRestriction(input)
        && LoginHandler.validateMinimumLength(input),
    );

    if (this.loginButton) {
      this.loginButton.disabled = !allInputsFilled;
    }
  }

  static isFirstLetterUppercase(input: HTMLInputElement): boolean {
    const firstChar = input.value.trim().charAt(0);
    return /^[A-Z]/.test(firstChar);
  }

  static validateUppercaseFirstLetter(input: HTMLInputElement): boolean {
    if (!LoginHandler.isFirstLetterUppercase(input)) {
      const errorMessage = ErrorMessage.Capitalization;
      LoginHandler.showErrorMessage(input, errorMessage);
      return false;
    }
    return true;
  }

  private validateCharacterRestriction(input: HTMLInputElement): boolean {
    const regex = /^[a-zA-Z-]*$/;

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
    const minLength = fieldName === INPUT_ATTRIBUTE_NAME.FIRST_NAME
      ? MIN_LENGTH_NAME
      : MIN_LENGTH_SURNAME;
    const currentErrorMessage = input.nextElementSibling as HTMLElement;

    if (
      currentErrorMessage
      && currentErrorMessage.className === CLASS_NAME.ERROR_MESSAGE_CLASS
    ) {
      return true;
    }

    if (!LoginHandler.isFirstLetterUppercase(input)) {
      const errorMessage = ErrorMessage.Capitalization;

      LoginHandler.hideErrorMessage(input);
      LoginHandler.showErrorMessage(input, errorMessage);
      return false;
    }
    if (input.value.length < minLength) {
      const errorMessage = fieldName === INPUT_ATTRIBUTE_NAME.FIRST_NAME
        ? ErrorMessage.LengthRestrictionName
        : ErrorMessage.LengthRestrictionSurname;

      LoginHandler.showErrorMessage(input, errorMessage);
      return false;
    }
    LoginHandler.hideErrorMessage(input);
    return true;
  }

  static showErrorMessage(input: HTMLInputElement, message: string): void {
    const errorElement = input.nextElementSibling as HTMLElement;
    if (
      !errorElement
      || errorElement.className !== CLASS_NAME.ERROR_MESSAGE_CLASS
    ) {
      const errorMessage = document.createElement(TAG.SPAN);
      errorMessage.className = CLASS_NAME.ERROR_MESSAGE_CLASS;
      errorMessage.textContent = message;
      input.insertAdjacentElement('afterend', errorMessage);
    }
  }

  static hideErrorMessage(input: HTMLInputElement): void {
    const errorElement = input.nextElementSibling as HTMLElement;
    if (
      errorElement
      && errorElement.className === CLASS_NAME.ERROR_MESSAGE_CLASS
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
      currentInput.getAttribute(INPUT_ATTRIBUTE.NAME)
      !== inputToCheck.getAttribute(INPUT_ATTRIBUTE.NAME)
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

  static displayStartScreenView(): void {
    const startScreenView = new StartScreenView();
    const startScreenElement = startScreenView.getElement();

    if (startScreenElement) {
      window.history.pushState(null, '', `#${HASH_VALUE.START}`);
      document.body.innerHTML = '';
      document.body.append(startScreenElement);
    }
  }

  static stayLoggedInOnLoad() {
    document.addEventListener('DOMContentLoaded', () => {
      const { hash } = window.location;

      if (hash === `#${HASH_VALUE.START}`) {
        const startScreenView = new StartScreenView();
        const startScreenElement = startScreenView.getElement();

        if (startScreenElement) {
          document.body.innerHTML = '';
          document.body.append(startScreenElement);
        }
      }

      if (hash === `#${HASH_VALUE.GAME}`) {
        const gameView = new GameView();
        const gameViewElement = gameView.getElement();

        if (gameViewElement) {
          document.body.innerHTML = '';
          document.body.append(gameViewElement);
        }
      }
    });
  }
}
