import HistoryNew from "@/pages/HistoryNew";
import WithMetadata from "@/components/WithMetadata";
import { generateDefaultMetadata } from "@/utils/metadata";
import { Metadata } from "next";
import APIService from "@/services/APIService";
import { HistoryPageData } from "@/types/general";

// Generate default metadata as fallback
const defaultMetadata = generateDefaultMetadata('home');

export const metadata: Metadata = defaultMetadata;

export default async function Main() {
  const pageData = await APIService.pageData("history");
  console.log(pageData, "pageData");

  return (
    <WithMetadata 
      page="home" 
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
      <HistoryNew pageData={pageData as unknown as HistoryPageData} />
    </WithMetadata>
  );
}
