import ElementCreator from "../element-creator";
import LocalStorageManager from "../../storage/localStorage";
import LoginView from "../login/login-view";
import "./start-view.scss";

export default class LoggedInView extends ElementCreator {
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
    const welcomeText = document.createElement("p");
    welcomeText.textContent = "Welcome, you are logged in!";

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");
    contentContainer.append(welcomeText);

    this.getElement()?.append(contentContainer);
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
