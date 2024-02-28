export interface ISourceResponse {
    status: 'ok' | 'error';
    sources: INewsItems[];
}
export interface IArticlesResponse {
    status: 'ok' | 'error';
    totalResults: number;
    articles: INewsItem[];
}
export interface INewsItems {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface ISourceItem {
    id: string | null;
    name: string;
}
export interface INewsItem {
    source: ISourceItem;
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
}

export interface ILoader<T> {
  method: string;
  endpoint: string;
  callback: (data: T) => void;
  options?: Record<string, string>;
}
