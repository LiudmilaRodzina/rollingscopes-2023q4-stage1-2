import "./info-view.scss";
import ElementCreator from "../element-creator";
import LocalStorageHandler from "../../storage/localStorage-handler";
import {
  NOTIFICATION_MESSAGE,
  NOTIFICATION_MESSAGE_AUTHOR,
  CLASS_NAME,
  TAG,
  LOGOUT_BUTTON_TEXT,
} from "../../consts/consts";

export default class InfoView extends ElementCreator {
  constructor() {
    super({
      tag: TAG.CONTAINER,
      classNames: [CLASS_NAME.INFO_CONTAINER],
      textContent: "",
    });
    this.addContent();
    this.addLogoutButton();
  }

  private addContent(): void {
    const infoContent = document.createElement(TAG.PARAGRAPH);
    infoContent.textContent = NOTIFICATION_MESSAGE;

    const infoContentSpan = document.createElement(TAG.SPAN);
    infoContentSpan.textContent = NOTIFICATION_MESSAGE_AUTHOR;

    this.getElement()?.append(infoContent, infoContentSpan);
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
