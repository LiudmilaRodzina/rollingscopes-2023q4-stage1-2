import "./start-view.scss";
import ElementCreator from "../element-creator";
import LocalStorageHandler from "../../storage/localStorage-handler";
import GameView from "../game/game-view";
import {
  APP_NAME,
  GREETING_MESSAGE,
  APP_DESCRIPTION,
  START_BUTTON_TEXT,
  LOGOUT_BUTTON_TEXT,
  CLASS_NAME,
  TAG,
  HASH_VALUE,
} from "../../consts/consts";

export default class StartScreenView extends ElementCreator {
  constructor() {
    super({
      tag: TAG.CONTAINER,
      classNames: [CLASS_NAME.START_SCREEN_CONTAINER],
      textContent: "",
    });
    this.addContent();
    this.addStartButton();
    this.addLogoutButton();
  }

  private addContent(): void {
    const appName = document.createElement(TAG.PARAGRAPH);
    appName.textContent = APP_NAME;

    const userGreeting = document.createElement(TAG.SPAN);
    const userData = LocalStorageHandler.getUserData();

    const fullName = `${userData.name} ${userData.surname}`;

    userGreeting.textContent = `${GREETING_MESSAGE} ${fullName}!`;
    userGreeting.classList.add(CLASS_NAME.USER_GREETING);

    const appDescription = document.createElement(TAG.SPAN);
    appDescription.textContent = APP_DESCRIPTION;

    const contentContainer = document.createElement(TAG.CONTAINER);
    contentContainer.classList.add(CLASS_NAME.CONTENT_CONTAINER);
    contentContainer.append(appName, userGreeting, appDescription);

    this.getElement()?.append(contentContainer);
  }

  private addStartButton(): void {
    const startButton = document.createElement(TAG.BUTTON);
    startButton.textContent = START_BUTTON_TEXT;
    startButton.classList.add(CLASS_NAME.BUTTON_START);

    startButton.addEventListener("click", () => {
      window.location.hash = HASH_VALUE.GAME;
      const gameView = new GameView();
      document.body.innerHTML = "";
      document.body.append(gameView.getElement() as Node);
    });
    this.getElement()?.append(startButton);
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
