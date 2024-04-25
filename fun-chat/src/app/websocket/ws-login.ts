import ws from "./socket";
import SessionStorageHandler from "../storage/sessionStorage-handler";

export default class LoginUser {
  constructor() {
    const loginButton = document.querySelector(
      ".button-login",
    ) as HTMLButtonElement;
    const login = document.querySelector(".login") as HTMLInputElement;
    const password = document.querySelector(".password") as HTMLInputElement;
    const onlineDot = document.querySelector(".dot") as HTMLElement;

    const userLogin = SessionStorageHandler.getUserData();
    if (userLogin) {
      this.updateUser(userLogin.login);
    }

    const updateOnlineDot = (isOnline: boolean) => {
      if (onlineDot) {
        if (isOnline) {
          onlineDot.classList.remove("dot--red");
          onlineDot.classList.add("dot--green");
        } else {
          onlineDot.classList.remove("dot--green");
          onlineDot.classList.add("dot--red");
        }
      }
    };

    if (ws.readyState === WebSocket.OPEN) {
      updateOnlineDot(true);
    }

    ws.addEventListener("open", () => {
      updateOnlineDot(true);

      loginButton.addEventListener("click", (e) => {
        e.preventDefault();

        const requestId = this.generateRequestId();
        const data = JSON.stringify({
          id: requestId,
          type: "USER_LOGIN",
          payload: {
            user: {
              login: login.value,
              password: password.value,
            },
          },
        });
        ws.send(data);

        const userLogin = SessionStorageHandler.getUserData();
        this.updateUser(userLogin.login);

        updateOnlineDot(true);
      });
    });
  }

  updateUser(userName: string) {
    const user = document.querySelector(".user-current") as HTMLElement;
    user.innerText = userName;
  }

  generateRequestId() {
    return Math.random().toString(36).substr(2, 9);
  }
}
