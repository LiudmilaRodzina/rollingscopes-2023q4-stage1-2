import SendMessage from "./ws-msg_send";
import LoginUser from "./ws-login";

export default class WebSocketMain {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      new SendMessage();
      new LoginUser();
    });
  }
}
