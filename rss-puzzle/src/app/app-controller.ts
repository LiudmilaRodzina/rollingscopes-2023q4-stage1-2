import LoginView from "./view/login/login-view";
import LoginHandler from "./verification/login-handler";
import { BUTTON_SELECTOR, INPUT_SELECTOR } from "./consts/consts";

export default class AppController {
  static createView(): void {
    const loginView = new LoginView();

    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.append(loginView.getElement() as Node);

      const formElement = loginView.getElement() as HTMLFormElement;

      const loginHandler = new LoginHandler(
        formElement,
        BUTTON_SELECTOR,
        INPUT_SELECTOR,
      );
      loginHandler.setupValidation();
    }

    LoginHandler.stayLoggedInOnLoad();
  }
}
