import type { Metadata } from "next";
import "@/styles/supports.css"; 
import "@/styles/about_all_pages.css";
import APIService from "@/services/APIService";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { LegalDisclaimerPageData } from "@/types/general";

export const metadata: Metadata = {
  title: "Legal Disclaimer - Hisense Global",
  description: "Hisense India - Legal disclaimer and terms of use for website and products",
  keywords: "Hisense India, Legal Disclaimer, Terms of Use, Legal Information, Disclaimer",
};

export default async function LegalDisclaimerPage() {

  const pageData = await APIService.pageData("legal-disclaimer");
  console.log(pageData, "pageData");
  
  return (
  
      <LegalDisclaimer pageData={pageData as unknown as LegalDisclaimerPageData} />
    
  );
}
