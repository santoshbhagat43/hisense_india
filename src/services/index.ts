// Export main API service
export { default as apiService } from './api';
export type { ApiResponse, ApiError, ApiConfig } from './api';

// Export specific services
export { default as productService } from './productService';
export type { 
  Product, 
  ProductListResponse, 
  ProductFilters, 
  CreateProductData, 
  UpdateProductData 
} from './productService';

export { default as metadataService } from './metadataService';
export type { 
  PageMetadata, 
  MetadataFilters, 
  CreateMetadataData, 
  UpdateMetadataData 
} from './metadataService';

// Re-export all services as a single object for convenience
import apiService from './api';
import productService from './productService';
import metadataService from './metadataService';

export const services = {
  api: apiService,
  product: productService,
  metadata: metadataService,
};

export default services;
