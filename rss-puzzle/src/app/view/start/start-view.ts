import "./start-view.scss";
import ElementCreator from "../element-creator";
import LocalStorageHandler from "../../storage/localStorage-handler";
import GameView from "../game/game-view";

const APP_NAME = "ENGLISH PUZZLE";
const GREETING_MESSAGE = "Welcome, ";
const APP_DESCRIPTION =
  "Click on words, collect phrases. Words can be dragged and dropped. Select tooltips in the menu";
const START_BUTTON_TEXT = "Start Game";
const LOGOUT_BUTTON_TEXT = "Logout";

const CLASS_NAME = {
  USER_GREETING: "user-greeting",
  CONTENT_CONTAINER: "content-container",
  START_SCREEN_CONTAINER: "start-screen-container",
  BUTTON_START: "button-start",
  BUTTON_LOGOUT: "button-logout",
};

const TAG = {
  BUTTON: "button",
  CONTAINER: "div",
  PARAGRAPH: "p",
  SPAN: "span",
};

const HASH_VALUE = {
  LOGIN: "login",
  GAME: "game",
};

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
      window.location.href = `/#${HASH_VALUE.LOGIN}`;
    });

    this.getElement()?.append(logoutButton);
  }
}
