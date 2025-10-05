import { useEffect, useState } from 'react';
import { useApi } from './useApi';
import { metadataService, PageMetadata } from '@/services';

interface UseMetadataOptions {
  page: string;
  locale?: string;
  fallback?: Partial<PageMetadata>;
}

interface UseMetadataReturn {
  metadata: PageMetadata | null;
  loading: boolean;
  error: any;
  refresh: () => void;
}

/**
 * Hook to fetch and manage page metadata
 */
export function useMetadata({ page, locale, fallback }: UseMetadataOptions): UseMetadataReturn {
  const [metadata, setMetadata] = useState<PageMetadata | null>(null);
  
  const { 
    data, 
    loading, 
    error, 
    execute: fetchMetadata 
  } = useApi(() => metadataService.getMetadataByPage(page, locale));

  const refresh = () => {
    fetchMetadata();
  };

  useEffect(() => {
    if (data) {
      setMetadata(data);
    } else if (fallback) {
      setMetadata(fallback as PageMetadata);
    }
  }, [data, fallback]);

  return {
    metadata,
    loading,
    error,
    refresh,
  };
}

/**
 * Hook to get metadata for multiple pages
 */
export function useBulkMetadata(pages: string[], locale?: string) {
  const { 
    data, 
    loading, 
    error, 
    execute: fetchBulkMetadata 
  } = useApi(() => metadataService.getBulkMetadata(pages, locale));

  return {
    metadata: data,
    loading,
    error,
    refresh: fetchBulkMetadata,
  };
}

/**
 * Hook to manage metadata with CRUD operations
 */
export function useMetadataManagement() {
  const [selectedMetadata, setSelectedMetadata] = useState<PageMetadata | null>(null);

  const { 
    data: allMetadata, 
    loading: loadingAll, 
    error: errorAll, 
    execute: fetchAllMetadata 
  } = useApi(metadataService.getAllMetadata);

  const { 
    data: createdMetadata, 
    loading: creating, 
    error: createError, 
    mutate: createMetadata 
  } = useApi(metadataService.createMetadata);

  const { 
    data: updatedMetadata, 
    loading: updating, 
    error: updateError, 
    mutate: updateMetadata 
  } = useApi(metadataService.updateMetadata);

  const { 
    data: deletedMetadata, 
    loading: deleting, 
    error: deleteError, 
    mutate: deleteMetadata 
  } = useApi(metadataService.deleteMetadata);

  const handleCreate = async (data: any) => {
    try {
      await createMetadata(data);
      await fetchAllMetadata(); // Refresh list
    } catch (error) {
      console.error('Failed to create metadata:', error);
    }
  };

  const handleUpdate = async (data: any) => {
    try {
      await updateMetadata(data);
      await fetchAllMetadata(); // Refresh list
      setSelectedMetadata(null);
    } catch (error) {
      console.error('Failed to update metadata:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this metadata?')) {
      try {
        await deleteMetadata(id);
        await fetchAllMetadata(); // Refresh list
        setSelectedMetadata(null);
      } catch (error) {
        console.error('Failed to delete metadata:', error);
      }
    }
  };

  return {
    // Data
    allMetadata,
    selectedMetadata,
    setSelectedMetadata,
    
    // Loading states
    loadingAll,
    creating,
    updating,
    deleting,
    
    // Errors
    errorAll,
    createError,
    updateError,
    deleteError,
    
    // Actions
    fetchAllMetadata,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
}

export default useMetadata;
