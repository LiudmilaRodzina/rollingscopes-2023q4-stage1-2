import { INewsItem } from '../../../typeDeclarations/interfaces';
import './news.css';

class News {
    public draw(data: INewsItem[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        const selectElement = <T extends HTMLElement>(root: DocumentFragment, selector: string): T => {
            const element = root.querySelector<T>(selector);
            if (!element) {
                throw new TypeError('Element not found.');
            }
            return element;
        };

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            const newsItem = selectElement<HTMLElement>(newsClone, '.news__item');

            if (idx % 2) newsItem.classList.add('alt');

            const newsImage = selectElement<HTMLElement>(newsClone, '.news__meta-photo');
            const newsAuthor = selectElement<HTMLElement>(newsClone, '.news__meta-author');
            const newsDate = selectElement<HTMLElement>(newsClone, '.news__meta-date');
            const newsTitle = selectElement<HTMLElement>(newsClone, '.news__description-title');
            const newsSource = selectElement<HTMLElement>(newsClone, '.news__description-source');
            const newsContent = selectElement<HTMLElement>(newsClone, '.news__description-content');
            const newsReadMore = selectElement<HTMLElement>(newsClone, '.news__read-more a');

            newsImage.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsAuthor.textContent = item.author || item.source.name;
            newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            newsTitle.textContent = item.title;
            newsSource.textContent = item.source.name;
            newsContent.textContent = item.description;
            newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer instanceof HTMLElement) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
