import ElementCreator from "../element-creator";
import LocalStorageManager from "../../storage/localStorage";
import LoginView from "../login/login-view";

export default class GameView extends ElementCreator {
  constructor() {
    super({
      tag: "div",
      classNames: ["logged-in-container"],
      textContent: "",
    });
    this.addContent();
    this.addLogoutButton();
  }

  private addContent(): void {
    const gameContent = document.createElement("p");
    gameContent.textContent =
      "Sorry, we are experiencing technical difficulties. Please try again later.";
    this.getElement()?.append(gameContent);
  }

  private addLogoutButton(): void {
    const logoutButton = document.createElement("button");
    logoutButton.textContent = "Logout";
    logoutButton.classList.add("button-logout");

    logoutButton.addEventListener("click", () => {
      LocalStorageManager.removeUserData();

      window.location.hash = "login";
      const loginView = new LoginView();
      document.body.innerHTML = "";
      document.body.append(loginView.getElement() as Node);
    });

    this.getElement()?.append(logoutButton);
  }
}
