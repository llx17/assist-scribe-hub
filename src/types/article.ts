export interface Article {
  id: string;
  title: string;
  category: string;
  content: string;
  relatedArticles?: string[];
}

export interface Category {
  id: string;
  name: string;
  articles: Article[];
}
