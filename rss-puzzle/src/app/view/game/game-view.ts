import "./game-view.scss";
import ElementCreator from "../element-creator";
import LocalStorageHandler from "../../storage/localStorage-handler";
import {
  NOTIFICATION_MESSAGE,
  CLASS_NAME,
  TAG,
  LOGOUT_BUTTON_TEXT,
} from "../../consts/consts";

export default class GameView extends ElementCreator {
  constructor() {
    super({
      tag: TAG.CONTAINER,
      classNames: [CLASS_NAME.GAME_CONTAINER],
      textContent: "",
    });
    this.addContent();
    this.addLogoutButton();
  }

  private addContent(): void {
    const gameContent = document.createElement(TAG.PARAGRAPH);
    gameContent.textContent = NOTIFICATION_MESSAGE;
    this.getElement()?.append(gameContent);
  }

  private addLogoutButton(): void {
    const logoutButton = document.createElement(TAG.BUTTON);
    logoutButton.textContent = LOGOUT_BUTTON_TEXT;
    logoutButton.classList.add(CLASS_NAME.BUTTON_LOGOUT);

    logoutButton.addEventListener("click", () => {
      LocalStorageHandler.removeUserData();
      const pathArray = window.location.pathname.split("/");
      const basePath = pathArray.slice(0, -1).join("/");
      window.location.href = `${window.location.origin}${basePath}/`;
    });

    this.getElement()?.append(logoutButton);
  }
}
