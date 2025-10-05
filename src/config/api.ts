// API Configuration
export const API_CONFIG = {
  // Base URL from environment variables
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'http://localhost:3001/api',
  
  // Timeout configuration
  TIMEOUT: 10000, // 10 seconds
  
  // Default headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  
  // API endpoints
  ENDPOINTS: {
    // Auth endpoints
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
      REFRESH: '/auth/refresh',
      FORGOT_PASSWORD: '/auth/forgot-password',
      RESET_PASSWORD: '/auth/reset-password',
      VERIFY_EMAIL: '/auth/verify-email',
      RESEND_VERIFICATION: '/auth/resend-verification',
    },
    
    // User endpoints
    USER: {
      ME: '/users/me',
      PROFILE: '/users/me',
      CHANGE_PASSWORD: '/users/me/change-password',
      AVATAR: '/users/me/avatar',
      ALL: '/users',
    },
    
    // Product endpoints
    PRODUCT: {
      LIST: '/products',
      DETAIL: '/products/:id',
      CREATE: '/products',
      UPDATE: '/products/:id',
      DELETE: '/products/:id',
      FEATURED: '/products/featured',
      RELATED: '/products/:id/related',
      AVAILABILITY: '/products/:id/availability',
      IMAGES: '/products/:id/images',
    },
    
    // Category endpoints
    CATEGORY: {
      LIST: '/categories',
      DETAIL: '/categories/:id',
      CREATE: '/categories',
      UPDATE: '/categories/:id',
      DELETE: '/categories/:id',
    },
    
    // Order endpoints
    ORDER: {
      LIST: '/orders',
      DETAIL: '/orders/:id',
      CREATE: '/orders',
      UPDATE: '/orders/:id',
      CANCEL: '/orders/:id/cancel',
    },
  },
  
  // Environment-specific configurations
  ENVIRONMENTS: {
    DEVELOPMENT: {
      BASE_URL: 'http://localhost:3001/api',
      TIMEOUT: 15000,
    },
    STAGING: {
      BASE_URL: 'https://staging-api.hisense-india.com/api',
      TIMEOUT: 10000,
    },
    PRODUCTION: {
      BASE_URL: 'https://api.hisense-india.com/api',
      TIMEOUT: 8000,
    },
  },
};

// Get current environment
export const getCurrentEnvironment = (): 'development' | 'staging' | 'production' => {
  if (process.env.NODE_ENV === 'production') {
    return 'production';
  }
  if (process.env.NEXT_PUBLIC_ENV === 'staging') {
    return 'staging';
  }
  return 'development';
};

// Get environment-specific configuration
export const getEnvironmentConfig = () => {
  const env = getCurrentEnvironment();
  return API_CONFIG.ENVIRONMENTS[env.toUpperCase() as keyof typeof API_CONFIG.ENVIRONMENTS];
};

// Get final API configuration
export const getApiConfig = () => {
  const envConfig = getEnvironmentConfig();
  return {
    baseURL: envConfig?.BASE_URL || API_CONFIG.BASE_URL,
    timeout: envConfig?.TIMEOUT || API_CONFIG.TIMEOUT,
    headers: API_CONFIG.DEFAULT_HEADERS,
  };
};

export default API_CONFIG;
