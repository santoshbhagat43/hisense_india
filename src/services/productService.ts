import apiService, { ApiResponse } from './api';

// Product interfaces
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  specifications: Record<string, any>;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  availability?: boolean;
  search?: string;
  sortBy?: 'name' | 'price' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  page?: number;
}

export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  specifications: Record<string, any>;
  availability: boolean;
}

export interface UpdateProductData extends Partial<CreateProductData> {
  id: string;
}

class ProductService {
  private basePath = '/products';

  /**
   * Get all products with optional filters
   */
  async getProducts(filters?: ProductFilters): Promise<ApiResponse<ProductListResponse>> {
    const params = new URLSearchParams();
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }

    const queryString = params.toString();
    const url = queryString ? `${this.basePath}?${queryString}` : this.basePath;
    
    return apiService.get<ProductListResponse>(url);
  }

  /**
   * Get product by ID
   */
  async getProductById(id: string): Promise<ApiResponse<Product>> {
    return apiService.get<Product>(`${this.basePath}/${id}`);
  }

  /**
   * Create new product
   */
  async createProduct(data: CreateProductData): Promise<ApiResponse<Product>> {
    return apiService.post<Product>(this.basePath, data);
  }

  /**
   * Update product
   */
  async updateProduct(data: UpdateProductData): Promise<ApiResponse<Product>> {
    const { id, ...updateData } = data;
    return apiService.put<Product>(`${this.basePath}/${id}`, updateData);
  }

  /**
   * Delete product
   */
  async deleteProduct(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiService.delete<{ message: string }>(`${this.basePath}/${id}`);
  }

  /**
   * Get products by category
   */
  async getProductsByCategory(category: string, filters?: Omit<ProductFilters, 'category'>): Promise<ApiResponse<ProductListResponse>> {
    const productFilters: ProductFilters = { ...filters, category };
    return this.getProducts(productFilters);
  }

  /**
   * Search products
   */
  async searchProducts(query: string, filters?: Omit<ProductFilters, 'search'>): Promise<ApiResponse<ProductListResponse>> {
    const productFilters: ProductFilters = { ...filters, search: query };
    return this.getProducts(productFilters);
  }

  /**
   * Get featured products
   */
  async getFeaturedProducts(limit: number = 10): Promise<ApiResponse<Product[]>> {
    return apiService.get<Product[]>(`${this.basePath}/featured?limit=${limit}`);
  }

  /**
   * Get related products
   */
  async getRelatedProducts(productId: string, limit: number = 5): Promise<ApiResponse<Product[]>> {
    return apiService.get<Product[]>(`${this.basePath}/${productId}/related?limit=${limit}`);
  }

  /**
   * Update product availability
   */
  async updateProductAvailability(id: string, availability: boolean): Promise<ApiResponse<Product>> {
    return apiService.patch<Product>(`${this.basePath}/${id}/availability`, { availability });
  }

  /**
   * Upload product images
   */
  async uploadProductImages(productId: string, files: File[], onProgress?: (progress: number) => void): Promise<ApiResponse<{ images: string[] }>> {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`images`, file);
    });

    return apiService.post<{ images: string[] }>(`${this.basePath}/${productId}/images`, formData, {
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
  }
}

// Create and export singleton instance
const productService = new ProductService();

export default productService;
