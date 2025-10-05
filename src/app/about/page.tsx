import { Metadata } from "next";
import WithMetadata from "@/components/WithMetadata";
import { generateDefaultMetadata } from "@/utils/metadata";

// Generate default metadata as fallback
const defaultMetadata = generateDefaultMetadata('about');

export const metadata: Metadata = defaultMetadata;

export default function AboutPage() {
  return (
    <WithMetadata 
      page="about" 
      locale="en"
      fallbackMetadata={{
        title: defaultMetadata.title as string,
        description: defaultMetadata.description as string,
        keywords: defaultMetadata.keywords as string[],
        ogTitle: defaultMetadata.openGraph?.title as string,
        ogDescription: defaultMetadata.openGraph?.description as string,
        twitterTitle: defaultMetadata.twitter?.title as string,
        twitterDescription: defaultMetadata.twitter?.description as string,
      }}
    >
      <div className="about-page">
        <h1>About Hisense International</h1>
        <p>Learn about our company, history, and commitment to innovation.</p>
        {/* Your about page content */}
      </div>
    </WithMetadata>
  );
}
