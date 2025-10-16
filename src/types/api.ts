export interface JWTTokenResponse {
  access: string;
  refresh: string;
}

export interface JWTRefreshResponse {
  access: string;
}

export interface APIArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  related_articles?: string[];
  slug?: string;
  created_at?: string;
  updated_at?: string;
}

export interface APICategory {
  id: string;
  name: string;
  slug?: string;
  description?: string;
}

export interface APITag {
  id: string;
  name: string;
  slug?: string;
}

export interface APIError {
  detail?: string;
  message?: string;
  [key: string]: any;
}
