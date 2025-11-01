import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// API Configuration Interface
interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

// API Response Interface
interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
  success: boolean;
}

// API Error Interface
interface ApiError {
  message: string;
  status: number;
  code?: string;
}

// Extend AxiosRequestConfig to support metadata for timing
interface AxiosRequestConfigWithMeta extends AxiosRequestConfig {
  metadata?: {
    startTime: Date;
  };
}

class ApiService {
  private api: AxiosInstance;
  private config: ApiConfig;

  constructor() {
    // Get base URL from environment variables
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'http://localhost:3001/api';
    
    this.config = {
      baseURL,
      timeout: 10000, // 10 seconds
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };

    // Create axios instance
    this.api = axios.create(this.config);

    // Setup request interceptor
    this.setupRequestInterceptor();
    
    // Setup response interceptor
    this.setupResponseInterceptor();
  }

  /**
   * Setup request interceptor to add auth token and other common headers
   */
  private setupRequestInterceptor(): void {
    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Add auth token if available
        const token = this.getAuthToken();
        if (token) {
          config.headers = config.headers || {};
          config.headers['Authorization'] = `Bearer ${token}`;
        }

        // Add request timestamp for debugging
        (config as AxiosRequestConfigWithMeta).metadata = { startTime: new Date() };

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  /**
   * Setup response interceptor to handle common responses and errors
   */
  private setupResponseInterceptor(): void {
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        // Log response time for debugging
        const endTime = new Date();
        const meta = (response.config as AxiosRequestConfigWithMeta).metadata;
        const duration = meta?.startTime ? endTime.getTime() - meta.startTime.getTime() : undefined;
        if (duration !== undefined) {
          console.log(`API Request to ${response.config.url} took ${duration}ms`);
        }

        return response;
      },
      (error: AxiosError) => {
        // Handle common error cases
        if (error.response) {
          // Server responded with error status
          const data = error.response.data as { message?: string; code?: string } | undefined;
          const apiError: ApiError = {
            message: data?.message || 'An error occurred',
            status: error.response.status,
            code: data?.code,
          };

          // Handle specific status codes
          switch (error.response.status) {
            case 401:
              // Unauthorized - redirect to login or refresh token
              this.handleUnauthorized();
              break;
            case 403:
              // Forbidden
              console.error('Access forbidden:', apiError.message);
              break;
            case 404:
              // Not found
              console.error('Resource not found:', apiError.message);
              break;
            case 500:
              // Server error
              console.error('Server error:', apiError.message);
              break;
            default:
              console.error('API Error:', apiError.message);
          }

          return Promise.reject(apiError);
        } else if (error.request) {
          // Network error
          const networkError: ApiError = {
            message: 'Network error - please check your connection',
            status: 0,
            code: 'NETWORK_ERROR',
          };
          return Promise.reject(networkError);
        } else {
          // Other error
          const unknownError: ApiError = {
            message: 'An unexpected error occurred',
            status: 0,
            code: 'UNKNOWN_ERROR',
          };
          return Promise.reject(unknownError);
        }
      }
    );
  }

  /**
   * Get authentication token from localStorage or cookies
   */
  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    }
    return null;
  }

  /**
   * Handle unauthorized access
   */
  private handleUnauthorized(): void {
    // Clear auth token
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
    }
    
    // Redirect to login page or refresh token
    // You can customize this based on your auth flow
    console.warn('User session expired. Please login again.');
  }

  /**
   * Generic GET request
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.get<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Generic POST request
   */
  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.post<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Generic PUT request
   */
  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.put<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Generic PATCH request
   */
  async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.patch<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Generic DELETE request
   */
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.delete<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Upload file with progress tracking
   */
  async uploadFile<T>(
    url: string, 
    file: File, 
    onProgress?: (progress: number) => void
  ): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await this.api.post<ApiResponse<T>>(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (onProgress && progressEvent.total) {
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            onProgress(progress);
          }
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Set authentication token
   */
  setAuthToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  /**
   * Clear authentication token
   */
  clearAuthToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
    }
  }

  /**
   * Update base URL
   */
  updateBaseURL(newBaseURL: string): void {
    this.api.defaults.baseURL = newBaseURL;
  }

  /**
   * Get current base URL
   */
  getBaseURL(): string {
    return this.api.defaults.baseURL || '';
  }
}

// Create and export singleton instance
const apiService = new ApiService();

export default apiService;

// Export types for use in other files
export type { ApiResponse, ApiError, ApiConfig };
