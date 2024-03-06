import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ISourceResponse, IArticlesResponse } from '../../typeDeclarations/interfaces';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources = document.querySelector('.sources') as HTMLElement;

        sources.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: IArticlesResponse) => this.view.drawNews(data))
        );
        this.controller.getSources((data: ISourceResponse) => this.view.drawSources(data));
    }
}

export default App;
