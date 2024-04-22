import "./chat-view.scss";
import ElementCreator from "../element-creator";
import LocalStorageHandler from "../../storage/localStorage-handler";
import InfoView from "../info/info-view";
import {
  APP_NAME,
  APP_DESCRIPTION,
  INFO_BUTTON_TEXT,
  LOGOUT_BUTTON_TEXT,
  CLASS_NAME,
  TAG,
  HASH_VALUE,
} from "../../consts/consts";

export default class ChatView extends ElementCreator {
  constructor() {
    super({
      tag: TAG.CONTAINER,
      classNames: [CLASS_NAME.CHAT_CONTAINER],
      textContent: "",
    });
    this.addContent();
    this.addInfoButton();
    this.addLogoutButton();
  }

  private addContent(): void {
    const appName = document.createElement(TAG.PARAGRAPH);
    appName.textContent = APP_NAME;

    const appDescription = document.createElement(TAG.SPAN);
    appDescription.textContent = APP_DESCRIPTION;

    const contentContainer = document.createElement(TAG.CONTAINER);
    contentContainer.classList.add(CLASS_NAME.CONTENT_CONTAINER);

    contentContainer.append(appName, appDescription);

    this.getElement()?.append(contentContainer);
  }

  private addInfoButton(): void {
    const infoButton = document.createElement(TAG.BUTTON);
    infoButton.textContent = INFO_BUTTON_TEXT;
    infoButton.classList.add(CLASS_NAME.BUTTON_INFO);

    infoButton.addEventListener("click", () => {
      window.location.hash = HASH_VALUE.INFO;
      const infoView = new InfoView();
      document.body.innerHTML = "";
      document.body.append(infoView.getElement() as Node);
    });
    this.getElement()?.append(infoButton);
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
