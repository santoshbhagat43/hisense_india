# Metadata Management System

This system provides comprehensive metadata management for your Next.js application, allowing you to fetch, manage, and apply page metadata dynamically.

## Features

- **Dynamic Metadata Fetching**: Fetch metadata from API based on page name
- **Next.js Integration**: Seamless integration with Next.js metadata system
- **SEO Optimization**: Complete SEO metadata including Open Graph, Twitter Cards, and structured data
- **Multi-language Support**: Locale-specific metadata
- **Fallback System**: Default metadata when API is unavailable
- **Real-time Updates**: Client-side metadata updates
- **Admin Interface**: Built-in metadata management component

## Usage

### Basic Page Implementation

```typescript
// app/page.tsx
import WithMetadata from "@/components/WithMetadata";
import { generateDefaultMetadata } from "@/utils/metadata";

const defaultMetadata = generateDefaultMetadata('home');

export const metadata: Metadata = defaultMetadata;

export default function HomePage() {
  return (
    <WithMetadata 
      page="home" 
      locale="en"
      fallbackMetadata={{
        title: defaultMetadata.title as string,
        description: defaultMetadata.description as string,
        keywords: defaultMetadata.keywords as string[],
      }}
    >
      <Home />
    </WithMetadata>
  );
}
```

### Using the Metadata Hook

```typescript
import { useMetadata } from '@/hooks/useMetadata';

function MyComponent() {
  const { metadata, loading, error } = useMetadata({ 
    page: 'home', 
    locale: 'en' 
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{metadata?.title}</h1>
      <p>{metadata?.description}</p>
    </div>
  );
}
```

### API Service Usage

```typescript
import { metadataService } from '@/services';

// Get metadata for a specific page
const metadata = await metadataService.getMetadataByPage('home', 'en');

// Create new metadata
const newMetadata = await metadataService.createMetadata({
  page: 'about',
  title: 'About Us',
  description: 'Learn about our company',
  keywords: ['about', 'company', 'history'],
});

// Update existing metadata
const updatedMetadata = await metadataService.updateMetadata({
  id: '123',
  title: 'Updated Title',
  description: 'Updated description',
});
```

## Components

### WithMetadata Component

A higher-order component that automatically fetches and applies metadata:

```typescript
<WithMetadata 
  page="home" 
  locale="en"
  fallbackMetadata={fallbackData}
>
  <YourPageContent />
</WithMetadata>
```

### MetadataManager Component

Admin interface for managing metadata:

```typescript
import MetadataManager from '@/components/MetadataManager';

function AdminPage() {
  return <MetadataManager />;
}
```

## API Endpoints

The metadata service expects the following API endpoints:

- `GET /metadata/page?page={page}&locale={locale}` - Get metadata by page
- `GET /metadata/{id}` - Get metadata by ID
- `GET /metadata` - Get all metadata with filters
- `POST /metadata` - Create new metadata
- `PUT /metadata/{id}` - Update metadata
- `DELETE /metadata/{id}` - Delete metadata
- `GET /metadata/bulk?pages={pages}&locale={locale}` - Get bulk metadata
- `PATCH /metadata/page?page={page}&locale={locale}` - Update page metadata

## Metadata Structure

```typescript
interface PageMetadata {
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
  canonicalUrl?: string;
  robots?: string;
  author?: string;
  locale?: string;
  structuredData?: Record<string, any>;
  customMeta?: Array<{
    name: string;
    content: string;
    property?: string;
  }>;
  // ... more fields
}
```

## Environment Configuration

Set your API base URL in environment variables:

```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
API_BASE_URL=http://localhost:3001/api
```

## Best Practices

1. **Always provide fallback metadata** to ensure your pages work even when the API is unavailable
2. **Use the WithMetadata component** for automatic metadata management
3. **Implement proper error handling** for API failures
4. **Cache metadata** when possible to improve performance
5. **Use structured data** for better SEO
6. **Test metadata** with SEO tools like Google's Rich Results Test

## SEO Features

- **Open Graph tags** for social media sharing
- **Twitter Card tags** for Twitter sharing
- **Canonical URLs** for duplicate content prevention
- **Structured data** for rich snippets
- **Meta robots** for search engine crawling
- **Multi-language support** with hreflang tags

## Error Handling

The system includes comprehensive error handling:

- **API failures**: Falls back to default metadata
- **Network errors**: Shows error messages and retry options
- **Invalid data**: Validates metadata before applying
- **Missing fields**: Uses fallback values

## Performance Considerations

- **Lazy loading**: Metadata is fetched only when needed
- **Caching**: API responses are cached to reduce requests
- **Fallbacks**: Default metadata prevents layout shifts
- **Optimization**: Only necessary metadata is applied to the DOM
