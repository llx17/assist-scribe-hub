import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { Category } from '@/types/article';
import { APIArticle, APICategory } from '@/types/api';

const PROJECT_SLUG = import.meta.env.VITE_PROJECT_SLUG || 'default';

// Transform API data to match frontend types
const transformCategories = (
  apiCategories: APICategory[],
  apiArticles: APIArticle[]
): Category[] => {
  return apiCategories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    articles: apiArticles
      .filter((article) => article.category === cat.id)
      .map((article) => ({
        id: article.id,
        title: article.title,
        category: article.category,
        content: article.content,
        relatedArticles: article.related_articles,
      })),
  }));
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories', PROJECT_SLUG],
    queryFn: async () => {
      const [categories, articles] = await Promise.all([
        apiClient.getCategories(PROJECT_SLUG),
        apiClient.getArticles(PROJECT_SLUG),
      ]);
      return transformCategories(categories, articles);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

export const useArticles = () => {
  return useQuery({
    queryKey: ['articles', PROJECT_SLUG],
    queryFn: () => apiClient.getArticles(PROJECT_SLUG),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};

export const useTags = () => {
  return useQuery({
    queryKey: ['tags', PROJECT_SLUG],
    queryFn: () => apiClient.getTags(PROJECT_SLUG),
    staleTime: 10 * 60 * 1000,
    retry: 2,
  });
};
