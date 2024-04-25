import SessionStorageHandler from "../storage/sessionStorage-handler";
import ws from "./socket";

export default class SendMessage {
  constructor() {
    const input = document.querySelector(".chat-input") as HTMLInputElement;
    const sendButton = document.querySelector(".button-send");
    if (sendButton) {
      sendButton.addEventListener("click", () => {
        this.sendMessage(input.value.trim());
      });
    }

    const userLogin = SessionStorageHandler.getUserData();
    if (userLogin) {
      this.updateUser(userLogin.login);
    }

    ws.onopen = () => {
      this.updateOnlineDot(true);

      ws.onmessage = ({ data }) => {
        const userLogin = SessionStorageHandler.getUserData();
        const { type, payload } = JSON.parse(data);

        if (type === "ERROR") {
          this.updateUser(userLogin.login);
          this.updateOnlineDot(true);
        }

        if (type === "NEW_MESSAGE") {
          this.showMessage(payload.message, payload.userId, false);
        }
      };
    };

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const message = input.value.trim();
        if (message && ws.readyState === WebSocket.OPEN) {
          const requestId = this.generateRequestId();

          const data = JSON.stringify({
            id: requestId,
            type: "MSG_SEND",
            payload: {
              message: {
                to: "recipientLogin",
                text: message,
              },
            },
          });
          ws.send(data);

          const userLogin = SessionStorageHandler.getUserData();
          this.showMessage(message, userLogin.login, true);
          input.value = "";
        }
      }
    });
  }

  sendMessage(message: string) {
    const userLogin = SessionStorageHandler.getUserData();
    if (message && ws.readyState === WebSocket.OPEN) {
      const requestId = this.generateRequestId();

      const data = JSON.stringify({
        id: requestId,
        type: "MSG_SEND",
        payload: {
          message: {
            to: "recipientLogin",
            text: message,
          },
        },
      });
      ws.send(data);

      this.showMessage(message, userLogin.login, true);
      const input = document.querySelector(".chat-input") as HTMLInputElement;
      input.value = "";
    }
  }

  updateUser(_userName: string) {
    const user = document.querySelector(".user-current") as HTMLElement;
    const userLogin = SessionStorageHandler.getUserData();
    user.innerText = userLogin.login;
  }

  generateRequestId() {
    return Math.random().toString(36).substr(2, 9);
  }

  showMessage(message: string, _userName: string, currentUser: boolean) {
    const userLogin = SessionStorageHandler.getUserData();
    const messages = document.querySelector(".chat-field");

    const messageContainer = document.createElement("div");
    messageContainer.className = `message message--${currentUser ? "right" : "left"}`;

    const messageUser = document.createElement("span");
    messageUser.className = "message-user";
    messageUser.innerText = userLogin.login;

    const messageText = document.createElement("span");
    messageText.innerText = message;

    messageContainer.append(messageUser, messageText);
    messages?.append(messageContainer);
    messages?.scrollTo(0, messages.scrollHeight);
  }

  updateOnlineDot(isOnline: boolean) {
    const onlineDot = document.querySelector(".dot") as HTMLElement;

    if (onlineDot) {
      if (isOnline) {
        onlineDot.classList.remove("dot--red");
        onlineDot.classList.add("dot--green");
      } else {
        onlineDot.classList.remove("dot--green");
        onlineDot.classList.add("dot--red");
      }
    }
  }
}
