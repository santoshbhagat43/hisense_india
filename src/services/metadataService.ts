import apiService, { ApiResponse } from './api';

// Metadata interfaces
export interface PageMetadata {
  id: string;
  page: string;
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: Array<{
    locale: string;
    url: string;
  }>;
  structuredData?: Record<string, any>;
  customMeta?: Array<{
    name: string;
    content: string;
    property?: string;
  }>;
  scripts?: Array<{
    src?: string;
    content?: string;
    type?: string;
    async?: boolean;
    defer?: boolean;
  }>;
  styles?: Array<{
    href?: string;
    content?: string;
    media?: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface MetadataFilters {
  page?: string;
  locale?: string;
  active?: boolean;
}

export interface CreateMetadataData {
  page: string;
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: Array<{
    locale: string;
    url: string;
  }>;
  structuredData?: Record<string, any>;
  customMeta?: Array<{
    name: string;
    content: string;
    property?: string;
  }>;
  scripts?: Array<{
    src?: string;
    content?: string;
    type?: string;
    async?: boolean;
    defer?: boolean;
  }>;
  styles?: Array<{
    href?: string;
    content?: string;
    media?: string;
  }>;
}

export interface UpdateMetadataData extends Partial<CreateMetadataData> {
  id: string;
}

class MetadataService {
  private basePath = '/metadata';

  /**
   * Get metadata by page name
   */
  async getMetadataByPage(page: string, locale?: string): Promise<ApiResponse<PageMetadata>> {
    const params = new URLSearchParams();
    params.append('page', page);
    if (locale) {
      params.append('locale', locale);
    }

    return apiService.get<PageMetadata>(`${this.basePath}/page?${params.toString()}`);
  }

  /**
   * Get metadata by ID
   */
  async getMetadataById(id: string): Promise<ApiResponse<PageMetadata>> {
    return apiService.get<PageMetadata>(`${this.basePath}/${id}`);
  }

  /**
   * Get all metadata with optional filters
   */
  async getAllMetadata(filters?: MetadataFilters): Promise<ApiResponse<PageMetadata[]>> {
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
    
    return apiService.get<PageMetadata[]>(url);
  }

  /**
   * Create new metadata
   */
  async createMetadata(data: CreateMetadataData): Promise<ApiResponse<PageMetadata>> {
    return apiService.post<PageMetadata>(this.basePath, data);
  }

  /**
   * Update metadata
   */
  async updateMetadata(data: UpdateMetadataData): Promise<ApiResponse<PageMetadata>> {
    const { id, ...updateData } = data;
    return apiService.put<PageMetadata>(`${this.basePath}/${id}`, updateData);
  }

  /**
   * Delete metadata
   */
  async deleteMetadata(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiService.delete<{ message: string }>(`${this.basePath}/${id}`);
  }

  /**
   * Get metadata for multiple pages
   */
  async getBulkMetadata(pages: string[], locale?: string): Promise<ApiResponse<Record<string, PageMetadata>>> {
    const params = new URLSearchParams();
    pages.forEach(page => params.append('pages', page));
    if (locale) {
      params.append('locale', locale);
    }

    return apiService.get<Record<string, PageMetadata>>(`${this.basePath}/bulk?${params.toString()}`);
  }

  /**
   * Update metadata for a specific page
   */
  async updatePageMetadata(page: string, data: Partial<CreateMetadataData>, locale?: string): Promise<ApiResponse<PageMetadata>> {
    const params = new URLSearchParams();
    params.append('page', page);
    if (locale) {
      params.append('locale', locale);
    }

    return apiService.patch<PageMetadata>(`${this.basePath}/page?${params.toString()}`, data);
  }

  /**
   * Get metadata for sitemap
   */
  async getSitemapMetadata(): Promise<ApiResponse<Array<{
    page: string;
    url: string;
    lastModified: string;
    priority: number;
    changeFrequency: string;
  }>>> {
    return apiService.get<Array<{
      page: string;
      url: string;
      lastModified: string;
      priority: number;
      changeFrequency: string;
    }>>(`${this.basePath}/sitemap`);
  }

  /**
   * Validate metadata
   */
  async validateMetadata(data: CreateMetadataData): Promise<ApiResponse<{
    valid: boolean;
    errors: string[];
    warnings: string[];
  }>> {
    return apiService.post<{
      valid: boolean;
      errors: string[];
      warnings: string[];
    }>(`${this.basePath}/validate`, data);
  }

  /**
   * Get metadata templates
   */
  async getMetadataTemplates(): Promise<ApiResponse<Array<{
    name: string;
    template: CreateMetadataData;
    description: string;
  }>>> {
    return apiService.get<Array<{
      name: string;
      template: CreateMetadataData;
      description: string;
    }>>(`${this.basePath}/templates`);
  }

  /**
   * Apply metadata template
   */
  async applyTemplate(page: string, templateName: string, customData?: Partial<CreateMetadataData>): Promise<ApiResponse<PageMetadata>> {
    return apiService.post<PageMetadata>(`${this.basePath}/apply-template`, {
      page,
      templateName,
      customData,
    });
  }
}

// Create and export singleton instance
const metadataService = new MetadataService();

export default metadataService;
