import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { SourceResponse, ArticleResponse } from '../../types/types';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sources = document.querySelector('.sources') as HTMLElement;

        sources.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: ArticleResponse) => this.view.drawNews(data))
        );
        this.controller.getSources((data: SourceResponse) => this.view.drawSources(data));
    }
}

export default App;
