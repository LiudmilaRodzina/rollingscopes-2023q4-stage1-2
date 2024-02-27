import { NewsItem } from '../../../types/types';
import './news.css';

class News {
    draw(data: NewsItem[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            const newsItem = newsClone.querySelector('.news__item') as HTMLElement;

            if (idx % 2) newsItem.classList.add('alt');

            const newsImage = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            const newsAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            const newsDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            const newsTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            const newsSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            const newsContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;

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
