'use client';

import { useEffect, useState } from 'react';
import { useMetadata } from '@/hooks/useMetadata';
// import { generateDefaultMetadata, mergeMetadata } from '@/utils/metadata';
import { PageMetadata } from '@/services';

interface WithMetadataProps {
  page: string;
  locale?: string;
  fallbackMetadata?: Partial<PageMetadata>;
  children: React.ReactNode;
}

/**
 * Higher-order component to fetch and apply metadata
 */
export function WithMetadata({ 
  page, 
  locale, 
  fallbackMetadata, 
  children 
}: WithMetadataProps) {
  const { metadata, loading, error } = useMetadata({ 
    page, 
    locale, 
    fallback: fallbackMetadata 
  });

  const [appliedMetadata, setAppliedMetadata] = useState<PageMetadata | null>(null);

  useEffect(() => {
    if (metadata) {
      setAppliedMetadata(metadata);
      applyMetadataToDocument(metadata);
    }
  }, [metadata]);

  const applyMetadataToDocument = (metadata: PageMetadata) => {
    if (typeof document === 'undefined') return;

    // Update title
    if (metadata.title) {
      document.title = metadata.title;
    }

    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', metadata.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metadata.description;
      document.head.appendChild(meta);
    }

    // Update keywords
    if (metadata.keywords && metadata.keywords.length > 0) {
      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta) {
        keywordsMeta.setAttribute('content', metadata.keywords.join(', '));
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = metadata.keywords.join(', ');
        document.head.appendChild(meta);
      }
    }

    // Update Open Graph tags
    updateOpenGraphTags(metadata);

    // Update Twitter Card tags
    updateTwitterTags(metadata);

    // Update canonical URL
    if (metadata.canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', metadata.canonicalUrl);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = metadata.canonicalUrl;
        document.head.appendChild(link);
      }
    }

    // Update robots
    if (metadata.robots) {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.setAttribute('content', metadata.robots);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = metadata.robots;
        document.head.appendChild(meta);
      }
    }

    // Add custom meta tags
    if (metadata.customMeta) {
      metadata.customMeta.forEach(customMeta => {
        const existingMeta = document.querySelector(
          customMeta.property 
            ? `meta[property="${customMeta.property}"]` 
            : `meta[name="${customMeta.name}"]`
        );
        
        if (existingMeta) {
          existingMeta.setAttribute('content', customMeta.content);
        } else {
          const meta = document.createElement('meta');
          if (customMeta.property) {
            meta.setAttribute('property', customMeta.property);
          } else {
            meta.setAttribute('name', customMeta.name);
          }
          meta.content = customMeta.content;
          document.head.appendChild(meta);
        }
      });
    }

    // Add structured data
    if (metadata.structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(metadata.structuredData);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(metadata.structuredData);
        document.head.appendChild(script);
      }
    }
  };

  const updateOpenGraphTags = (metadata: PageMetadata) => {
    const ogTags = [
      { property: 'og:title', content: metadata.ogTitle || metadata.title },
      { property: 'og:description', content: metadata.ogDescription || metadata.description },
      { property: 'og:image', content: metadata.ogImage },
      { property: 'og:url', content: metadata.ogUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Hisense International' },
    ];

    ogTags.forEach(tag => {
      if (tag.content) {
        const existingMeta = document.querySelector(`meta[property="${tag.property}"]`);
        if (existingMeta) {
          existingMeta.setAttribute('content', tag.content);
        } else {
          const meta = document.createElement('meta');
          meta.setAttribute('property', tag.property);
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      }
    });
  };

  const updateTwitterTags = (metadata: PageMetadata) => {
    const twitterTags = [
      { name: 'twitter:card', content: metadata.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: metadata.twitterTitle || metadata.title },
      { name: 'twitter:description', content: metadata.twitterDescription || metadata.description },
      { name: 'twitter:image', content: metadata.twitterImage },
    ];

    twitterTags.forEach(tag => {
      if (tag.content) {
        const existingMeta = document.querySelector(`meta[name="${tag.name}"]`);
        if (existingMeta) {
          existingMeta.setAttribute('content', tag.content);
        } else {
          const meta = document.createElement('meta');
          meta.setAttribute('name', tag.name);
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      }
    });
  };

  if (loading) {
    return <div className="metadata-loading">Loading metadata...</div>;
  }

  if (error) {
    console.error('Failed to load metadata:', error);
  }

  return <>{children}</>;
}

export default WithMetadata;
