import type { Metadata } from "next";

import "@/styles/supports.css";
import APIService from "@/services/APIService";
import { SitemapData } from "@/types/general";
import Sitemap from "@/components/Sitemap";

export const metadata: Metadata = {
  title: "Sitemap - Hisense Global",
  description: "Hisense India - Complete sitemap of all products, services, and company information",
  keywords: "Hisense India, Sitemap, Products, Support, About, TV, Air Conditioner, Mobile",
};

export default async function SitemapPage() {
  const pageData = await APIService.sitemapData("sitemap");
  console.log(pageData, "pageData");
  return (
    
     <Sitemap sitemapData={pageData as unknown as SitemapData } />
    
  );
}
