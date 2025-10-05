import { Metadata } from 'next';
import { PageMetadata } from '@/services';

/**
 * Convert PageMetadata to Next.js Metadata format
 */
export function convertToNextMetadata(metadata: PageMetadata): Metadata {
  const nextMetadata: Metadata = {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: metadata.author ? [{ name: metadata.author }] : undefined,
    robots: metadata.robots,
    alternates: {
      canonical: metadata.canonicalUrl,
      languages: metadata.alternateLocales?.reduce((acc, alt) => {
        acc[alt.locale] = alt.url;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title: metadata.ogTitle || metadata.title,
      description: metadata.ogDescription || metadata.description,
      url: metadata.ogUrl,
      siteName: 'Hisense International',
      images: metadata.ogImage ? [
        {
          url: metadata.ogImage,
          width: 1200,
          height: 630,
          alt: metadata.ogTitle || metadata.title,
        }
      ] : undefined,
      locale: metadata.locale || 'en_US',
      type: 'website',
    },
    twitter: {
      card: (metadata.twitterCard as 'summary' | 'summary_large_image' | 'app' | 'player') || 'summary_large_image',
      title: metadata.twitterTitle || metadata.title,
      description: metadata.twitterDescription || metadata.description,
      images: metadata.twitterImage ? [metadata.twitterImage] : undefined,
    },
    other: {},
  };

  // Add custom meta tags
  if (metadata.customMeta) {
    metadata.customMeta.forEach(meta => {
      if (meta.property) {
        nextMetadata.other![meta.property] = meta.content;
      } else {
        nextMetadata.other![meta.name] = meta.content;
      }
    });
  }

  // Add structured data
  if (metadata.structuredData) {
    nextMetadata.other!['application/ld+json'] = JSON.stringify(metadata.structuredData);
  }

  // Add published and modified times
  if (metadata.publishedTime) {
    nextMetadata.other!['article:published_time'] = metadata.publishedTime;
  }
  if (metadata.modifiedTime) {
    nextMetadata.other!['article:modified_time'] = metadata.modifiedTime;
  }

  // Add section and tags
  if (metadata.section) {
    nextMetadata.other!['article:section'] = metadata.section;
  }
  if (metadata.tags && metadata.tags.length > 0) {
    nextMetadata.other!['article:tag'] = metadata.tags.join(', ');
  }

  return nextMetadata;
}

/**
 * Generate default metadata for a page
 */
export function generateDefaultMetadata(page: string): Metadata {
  const defaultMetadata: Record<string, Metadata> = {
    home: {
      title: 'Hisense International - Home',
      description: 'Welcome to Hisense International. Discover our latest products and innovations.',
      keywords: ['Hisense', 'TV', 'Appliances', 'Technology', 'Innovation'],
      openGraph: {
        title: 'Hisense International - Home',
        description: 'Welcome to Hisense International. Discover our latest products and innovations.',
        type: 'website',
      },
    },
    about: {
      title: 'About Hisense International',
      description: 'Learn about Hisense International, our history, values, and commitment to innovation.',
      keywords: ['Hisense', 'About', 'Company', 'History', 'Values'],
      openGraph: {
        title: 'About Hisense International',
        description: 'Learn about Hisense International, our history, values, and commitment to innovation.',
        type: 'website',
      },
    },
    products: {
      title: 'Products - Hisense International',
      description: 'Explore our range of innovative products including TVs, appliances, and more.',
      keywords: ['Hisense', 'Products', 'TV', 'Appliances', 'Technology'],
      openGraph: {
        title: 'Products - Hisense International',
        description: 'Explore our range of innovative products including TVs, appliances, and more.',
        type: 'website',
      },
    },
    contact: {
      title: 'Contact Us - Hisense International',
      description: 'Get in touch with Hisense International. Find our contact information and support.',
      keywords: ['Hisense', 'Contact', 'Support', 'Help', 'Customer Service'],
      openGraph: {
        title: 'Contact Us - Hisense International',
        description: 'Get in touch with Hisense International. Find our contact information and support.',
        type: 'website',
      },
    },
  };

  return defaultMetadata[page] || {
    title: `${page.charAt(0).toUpperCase() + page.slice(1)} - Hisense International`,
    description: `Hisense International ${page} page`,
    keywords: ['Hisense', 'International'],
  };
}

/**
 * Merge metadata with fallbacks
 */
export function mergeMetadata(
  primary: PageMetadata | null,
  fallback: Metadata
): Metadata {
  if (!primary) {
    return fallback;
  }

  const nextMetadata = convertToNextMetadata(primary);
  
  // Merge with fallback, giving priority to primary metadata
  return {
    ...fallback,
    ...nextMetadata,
    openGraph: {
      ...fallback.openGraph,
      ...nextMetadata.openGraph,
    },
    twitter: {
      ...fallback.twitter,
      ...nextMetadata.twitter,
    },
    other: {
      ...fallback.other,
      ...nextMetadata.other,
    },
  };
}

/**
 * Generate structured data for different page types
 */
export function generateStructuredData(page: string, metadata: PageMetadata): Record<string, any> {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: metadata.title,
    description: metadata.description,
    url: metadata.canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Hisense International',
      url: 'https://hisense-india.com',
    },
  };

  switch (page) {
    case 'home':
      return {
        ...baseStructuredData,
        '@type': 'WebSite',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://hisense-india.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      };
    
    case 'about':
      return {
        ...baseStructuredData,
        '@type': 'AboutPage',
      };
    
    case 'products':
      return {
        ...baseStructuredData,
        '@type': 'CollectionPage',
        mainEntity: {
          '@type': 'ItemList',
          name: 'Hisense Products',
        },
      };
    
    case 'contact':
      return {
        ...baseStructuredData,
        '@type': 'ContactPage',
      };
    
    default:
      return baseStructuredData;
  }
}

export default {
  convertToNextMetadata,
  generateDefaultMetadata,
  mergeMetadata,
  generateStructuredData,
};
