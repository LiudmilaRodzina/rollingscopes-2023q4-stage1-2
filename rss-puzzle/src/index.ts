import AppController from './app/app-controller';

class App {
  constructor() {
    AppController.createView();
  }
}

const newApp = new App();
export default newApp;
