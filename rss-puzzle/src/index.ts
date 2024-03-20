import "./index.scss";
import LoginView from "./view/login/login-view";

class App {
  constructor() {
    App.createView();
  }

  static createView(): void {
    const loginView = new LoginView();

    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.append(loginView.getElement() as Node);
    }
  }
}
const myApp = new App();
export default myApp;

console.log(`Completed tasks: 01, 02, 03 (so far)
Total: 25 points`);
