export interface JWTTokenResponse {
  access: string;
  refresh: string;
}

export interface JWTRefreshResponse {
  access: string;
}

export interface APICategory {
  id: number;
  created_at: string;
  modified_at: string;
  is_active: boolean;
  name: string;
  slug: string;
  order: number;
  project: number;
}

export interface APIArticle {
  id: number;
  project: number;
  title: string;
  article_description: string;
  slug: string;
  category: APICategory;
  tags: APITag[];
  article_content: string;
  status: string;
  order: number;
}

export interface APITag {
  id: number;
  name: string;
  slug: string;
}

export interface APIResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface APIError {
  detail?: string;
  message?: string;
  [key: string]: any;
}
