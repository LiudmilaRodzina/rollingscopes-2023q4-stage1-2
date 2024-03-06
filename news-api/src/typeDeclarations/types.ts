import { ISourceResponse, IArticlesResponse } from '../typeDeclarations/interfaces';

export type CallSource = (data: ISourceResponse) => void;
export type CallArticles = (data: IArticlesResponse) => void;

export type RequestOptions = {
  endpoint: string;
  options?: Record<string, string>;
};