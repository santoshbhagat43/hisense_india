import { useState, useEffect, useCallback } from 'react';
import { ApiResponse, ApiError } from '@/services';

// Generic API state interface
interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  success: boolean;
}

// API hook return type
interface UseApiReturn<T> extends ApiState<T> {
  execute: (...args: any[]) => Promise<void>;
  reset: () => void;
}

/**
 * Generic hook for API calls
 */
export function useApi<T = any>(
  apiFunction: (...args: any[]) => Promise<ApiResponse<T>>,
  immediate: boolean = false
): UseApiReturn<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
    success: false,
  });

  const execute = useCallback(async (...args: any[]) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response = await apiFunction(...args);
      setState({
        data: response.data,
        loading: false,
        error: null,
        success: true,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error as ApiError,
        success: false,
      });
    }
  }, [apiFunction]);

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
      success: false,
    });
  }, []);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    ...state,
    execute,
    reset,
  };
}

/**
 * Hook for handling API mutations (POST, PUT, DELETE)
 */
export function useApiMutation<T = any, P = any>(
  apiFunction: (params: P) => Promise<ApiResponse<T>>
): UseApiReturn<T> & { mutate: (params: P) => Promise<void> } {
  const api = useApi<T>(apiFunction);

  const mutate = useCallback(async (params: P) => {
    await api.execute(params);
  }, [api.execute]);

  return {
    ...api,
    mutate,
  };
}

/**
 * Hook for handling paginated API calls
 */
export function usePaginatedApi<T = any>(
  apiFunction: (page: number, limit: number, ...args: any[]) => Promise<ApiResponse<{ data: T[]; total: number; page: number; limit: number }>>,
  initialPage: number = 1,
  initialLimit: number = 10
) {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [allData, setAllData] = useState<T[]>([]);
  const [total, setTotal] = useState(0);

  const api = useApi(apiFunction);

  const loadPage = useCallback(async (...args: any[]) => {
    await api.execute(page, limit, ...args);
    
    if (api.success && api.data) {
      setAllData(api.data.data);
      setTotal(api.data.total);
    }
  }, [api.execute, page, limit]);

  const nextPage = useCallback(() => {
    if (page * limit < total) {
      setPage(prev => prev + 1);
    }
  }, [page, limit, total]);

  const prevPage = useCallback(() => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  }, [page]);

  const goToPage = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const changeLimit = useCallback((newLimit: number) => {
    setLimit(newLimit);
    setPage(1); // Reset to first page when changing limit
  }, []);

  return {
    ...api,
    data: allData,
    total,
    page,
    limit,
    hasNextPage: page * limit < total,
    hasPrevPage: page > 1,
    totalPages: Math.ceil(total / limit),
    loadPage,
    nextPage,
    prevPage,
    goToPage,
    changeLimit,
  };
}

/**
 * Hook for handling file uploads with progress
 */
export function useFileUpload<T = any>(
  uploadFunction: (file: File, onProgress?: (progress: number) => void) => Promise<ApiResponse<T>>
) {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<T | null>(null);
  const [error, setError] = useState<ApiError | null>(null);

  const upload = useCallback(async (file: File) => {
    setUploading(true);
    setProgress(0);
    setError(null);
    setUploadedFile(null);

    try {
      const response = await uploadFunction(file, (progress) => {
        setProgress(progress);
      });

      setUploadedFile(response.data);
      setUploading(false);
      return response;
    } catch (err) {
      setError(err as ApiError);
      setUploading(false);
      throw err;
    }
  }, [uploadFunction]);

  const reset = useCallback(() => {
    setProgress(0);
    setUploading(false);
    setUploadedFile(null);
    setError(null);
  }, []);

  return {
    upload,
    progress,
    uploading,
    uploadedFile,
    error,
    reset,
  };
}

export default useApi;
