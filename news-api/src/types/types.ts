export interface SourceResponse {
    status: 'ok' | 'error';
    sources: NewsItems[];
}
export interface ArticleResponse {
    status: 'ok' | 'error';
    totalResults: number;
    articles: NewsItem[];
}
export interface NewsItems {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface SourceItem {
    id: string;
    name: string;
}
export interface NewsItem {
    source: SourceItem;
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
}
