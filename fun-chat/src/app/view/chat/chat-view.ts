import "./chat-view.scss";
import ElementCreator from "../element-creator";
import SessionStorageHandler from "../../storage/sessionStorage-handler";
import InfoView from "../info/info-view";
import LoginUser from "../../websocket/ws-login";
import SendMessage from "../../websocket/ws-msg_send";

import {
  INFO_BUTTON_TEXT,
  LOGOUT_BUTTON_TEXT,
  CLASS_NAME,
  TAG,
  HASH_VALUE,
} from "../../consts/consts";

export default class ChatView extends ElementCreator {
  constructor() {
    super({
      tag: TAG.DIV,
      classNames: [CLASS_NAME.CHAT_CONTAINER],
      textContent: "",
    });

    this.addButtonsContainer();
    this.addContent();
  }

  private addContent(): void {
    const chatField = document.createElement("div");
    chatField.classList.add("chat");

    const header = document.createElement("div");
    header.classList.add("header");

    const messengerDot = document.createElement("div");
    messengerDot.classList.add("dot", "dot--red");
    const messengerUser = document.createElement("div");
    messengerUser.classList.add("user-current");
    header.append(messengerDot, messengerUser);

    const messengerMessages = document.createElement("div");
    messengerMessages.classList.add("chat-field");

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("form");

    const textarea = document.createElement("textarea");
    textarea.classList.add("chat-input");

    const sendButton = document.createElement("button");
    sendButton.classList.add("button-send");
    sendButton.textContent = "=>";

    inputContainer.append(textarea, sendButton);
    chatField.append(header, messengerMessages, inputContainer);

    document.body.innerHTML = "";
    document.body.append(this.getElement() as HTMLElement);
    document.querySelector(".chat-container")?.append(chatField);

    new SendMessage();
    new LoginUser();
  }

  private addButtonsContainer(): void {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    this.addInfoButton(buttonsContainer);
    this.addFunChatText(buttonsContainer);
    this.addLogoutButton(buttonsContainer);
    this.getElement()?.append(buttonsContainer);
  }

  private addFunChatText(container: HTMLDivElement): void {
    const funChatText = document.createTextNode("Fun Chat");
    container.append(funChatText);
  }

  private addInfoButton(container: HTMLDivElement): void {
    const infoButton = document.createElement(TAG.BTN);
    infoButton.textContent = INFO_BUTTON_TEXT;
    infoButton.classList.add(CLASS_NAME.BUTTON_INFO);

    infoButton.addEventListener("click", () => {
      window.location.hash = HASH_VALUE.INFO;
      const infoView = new InfoView();
      document.body.innerHTML = "";
      document.body.append(infoView.getElement() as Node);
    });

    container.append(infoButton);
  }

  private addLogoutButton(container: HTMLDivElement): void {
    const logoutButton = document.createElement(TAG.BTN);
    logoutButton.textContent = LOGOUT_BUTTON_TEXT;
    logoutButton.classList.add(CLASS_NAME.BUTTON_LOGOUT);

    logoutButton.addEventListener("click", () => {
      SessionStorageHandler.removeUserData();
      const pathArray = window.location.pathname.split("/");
      const basePath = pathArray.slice(0, -1).join("/");
      window.location.href = `${window.location.origin}${basePath}/`;
    });

    container.append(logoutButton);
  }
}
