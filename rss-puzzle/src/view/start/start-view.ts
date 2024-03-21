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
    const appName = document.createElement("p");
    appName.textContent = "ENGLISH PUZZLE";

    const userGreeting = document.createElement("span");
    const userData = LocalStorageManager.getUserData();
    const fullName =
      userData && userData.name && userData.surname
        ? `${userData.name} ${userData.surname}`
        : "Friend";
    userGreeting.textContent = `Welcome, ${fullName}!`;
    userGreeting.classList.add("user-greeting");

    const appDescription = document.createElement("span");
    appDescription.textContent =
      "Click on words, collect phrases. Words can be dragged and dropped. Select tooltips in the menu";

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");
    contentContainer.append(appName, userGreeting, appDescription);

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
