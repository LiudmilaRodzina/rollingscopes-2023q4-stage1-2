import ErrorMessage from "../../types/enums";
import "./login-validator.scss";

export default class LoginValidator {
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
      this.loginButton.disabled = true;

      this.allInputs.forEach((input: HTMLInputElement) => {
        input.addEventListener("input", () => {
          this.validateEmptyInputs();
          LoginValidator.validateUppercaseFirstLetter(input);
          this.validateCharacterRestriction(input);
          LoginValidator.validateMinimumLength(input);
        });

        if (input.tagName === "input") {
          input.setAttribute("required", "true");
        }
      });
    }
  }

  private validateEmptyInputs(): void {
    const allInputsFilled = this.allInputs.every(
      (input: HTMLInputElement) =>
        input.value.trim() !== "" &&
        LoginValidator.validateUppercaseFirstLetter(input) &&
        this.validateCharacterRestriction(input) &&
        LoginValidator.validateMinimumLength(input),
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
    if (!LoginValidator.isFirstLetterUppercase(input)) {
      const errorMessage = ErrorMessage.Capitalization;
      LoginValidator.showErrorMessage(input, errorMessage);
      return false;
    }
    return true;
  }

  private validateCharacterRestriction(input: HTMLInputElement): boolean {
    const regex = /^[a-zA-Z-]*$/;

    if (!regex.test(input.value)) {
      const errorMessage = ErrorMessage.CharacterRestriction;

      this.hideAllErrorMessages(input);
      LoginValidator.showErrorMessage(input, errorMessage);
      return false;
    }
    LoginValidator.hideErrorMessage(input);
    return true;
  }

  static validateMinimumLength(input: HTMLInputElement): boolean {
    const fieldName = input.getAttribute("name");
    const lengthName = 3;
    const lengthSurname = 4;
    const minLength = fieldName === "name" ? lengthName : lengthSurname;
    const currentErrorMessage = input.nextElementSibling as HTMLElement;

    if (
      currentErrorMessage &&
      currentErrorMessage.className === "error-message"
    ) {
      return true;
    }

    if (!LoginValidator.isFirstLetterUppercase(input)) {
      const errorMessage = ErrorMessage.Capitalization;

      LoginValidator.hideErrorMessage(input);
      LoginValidator.showErrorMessage(input, errorMessage);
      return false;
    }
    if (input.value.length < minLength) {
      const errorMessage =
        fieldName === "name"
          ? ErrorMessage.LengthRestrictionName
          : ErrorMessage.LengthRestrictionSurname;

      LoginValidator.showErrorMessage(input, errorMessage);
      return false;
    }
    LoginValidator.hideErrorMessage(input);
    return true;
  }

  static showErrorMessage(input: HTMLInputElement, message: string): void {
    const errorElement = input.nextElementSibling as HTMLElement;
    if (!errorElement || errorElement.className !== "error-message") {
      const errorMessage = document.createElement("span");
      errorMessage.className = "error-message";
      errorMessage.textContent = message;
      input.insertAdjacentElement("afterend", errorMessage);
    }
  }

  static hideErrorMessage(input: HTMLInputElement): void {
    const errorElement = input.nextElementSibling as HTMLElement;
    if (errorElement && errorElement.className === "error-message") {
      errorElement.remove();
    }
  }

  private hideAllErrorMessages(currentInput: HTMLInputElement): void {
    this.allInputs.forEach((input: HTMLInputElement) => {
      if (!LoginValidator.skipErrorHiding(currentInput, input)) {
        LoginValidator.hideErrorMessage(input);
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
      currentInput.getAttribute("name") !== inputToCheck.getAttribute("name")
    ) {
      return true;
    }
    return false;
  }
}
