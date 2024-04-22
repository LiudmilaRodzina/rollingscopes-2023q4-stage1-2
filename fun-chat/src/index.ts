import AppController from "./app/app-controller";

class App {
  constructor() {
    AppController.createView();
  }
}

const newApp = new App();
export default newApp;

console.log(`
Hi! I'm sorry for the inconvenience, but the project is still in progress.
I would be very grateful if you could return to the review later`);
