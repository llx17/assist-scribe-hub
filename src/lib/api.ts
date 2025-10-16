import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { JWTTokenResponse, JWTRefreshResponse, APIArticle, APICategory, APITag, APIResponse } from '@/types/api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

class APIClient {
  private client: AxiosInstance;
  private refreshTokenPromise: Promise<string> | null = null;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor to add JWT token
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = this.getAccessToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle token refresh
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const newAccessToken = await this.refreshAccessToken();
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            }
            return this.client(originalRequest);
          } catch (refreshError) {
            this.clearTokens();
            window.location.href = '/login';
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  // Token management
  private getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  private setTokens(access: string, refresh: string) {
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
  }

  private clearTokens() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  private async refreshAccessToken(): Promise<string> {
    if (this.refreshTokenPromise) {
      return this.refreshTokenPromise;
    }

    this.refreshTokenPromise = (async () => {
      const refreshToken = this.getRefreshToken();
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await axios.post<JWTRefreshResponse>(
        `${API_BASE_URL}/api/token/refresh/`,
        { refresh: refreshToken }
      );

      const { access } = response.data;
      localStorage.setItem('access_token', access);
      this.refreshTokenPromise = null;
      return access;
    })();

    return this.refreshTokenPromise;
  }

  // Authentication APIs
  async login(username: string, password: string): Promise<JWTTokenResponse> {
    const response = await axios.post<JWTTokenResponse>(
      `${API_BASE_URL}/api/token/`,
      { username, password }
    );
    const { access, refresh } = response.data;
    this.setTokens(access, refresh);
    return response.data;
  }

  async logout() {
    this.clearTokens();
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  // Help Center APIs
  async getArticles(projectSlug: string): Promise<APIArticle[]> {
    const response = await this.client.get<APIResponse<APIArticle[]>>(`/api/${projectSlug}/articles/`);
    return response.data.data;
  }

  async getCategories(projectSlug: string): Promise<APICategory[]> {
    const response = await this.client.get<APIResponse<APICategory[]>>(`/api/${projectSlug}/categories/`);
    return response.data.data;
  }

  async getTags(projectSlug: string): Promise<APITag[]> {
    const response = await this.client.get<APIResponse<APITag[]>>(`/api/${projectSlug}/tags/`);
    return response.data.data;
  }
}

export const apiClient = new APIClient();
