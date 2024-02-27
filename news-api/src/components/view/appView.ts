import News from './news/news';
import Sources from './sources/sources';
import { SourceResponse, ArticleResponse } from '../../types/types';

export class AppView {
    news;
    sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticleResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourceResponse) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
