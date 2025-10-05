import { useState, useEffect } from 'react';
import { SliderItem } from '@/components/TVSlider';
import { productService } from '@/services';

interface UseTVSliderOptions {
  category?: string;
  limit?: number;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

interface UseTVSliderReturn {
  items: SliderItem[];
  loading: boolean;
  error: any;
  refresh: () => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

/**
 * Hook to manage TVSlider data from API
 */
export function useTVSlider(options: UseTVSliderOptions = {}): UseTVSliderReturn {
  const {
    category,
    limit = 10,
    autoRefresh = false,
    refreshInterval = 30000, // 30 seconds
  } = options;

  const [items, setItems] = useState<SliderItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Fetch products from API
      const response = await productService.getProducts({
        category,
        limit,
        availability: true,
      });

      // Transform API data to SliderItem format
      const transformedItems: SliderItem[] = response.data.products.map((product) => ({
        title: product.category,
        products: [
          {
            isNew: true, // You can determine this based on product.createdAt
            name: product.name,
            moreHref: `/products/${product.id}`,
            viewAllHref: `/products?category=${product.category}`,
            moreLabel: 'Learn More',
            viewAllLabel: `View All ${product.category}`,
          },
        ],
        banners: [
          {
            desktop: product.images[0] || '/assets/images/default-desktop.webp',
            mobile: product.images[0] || '/assets/images/default-mobile.webp',
            alt: product.name,
          },
        ],
      }));

      setItems(transformedItems);
    } catch (err) {
      setError(err);
      console.error('Failed to fetch TVSlider data:', err);
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [category, limit]);

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(refresh, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval]);

  return {
    items,
    loading,
    error,
    refresh,
    currentIndex,
    setCurrentIndex,
  };
}

/**
 * Hook for static TVSlider data
 */
export function useStaticTVSlider(data: SliderItem[]): UseTVSliderReturn {
  const [currentIndex, setCurrentIndex] = useState(0);

  return {
    items: data,
    loading: false,
    error: null,
    refresh: () => {},
    currentIndex,
    setCurrentIndex,
  };
}

export default useTVSlider;
