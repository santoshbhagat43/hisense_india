import type { Metadata } from "next";
import "@/styles/supports.css";
import TermsConditions from "@/components/TermsConditions";
import { TermsOfUsePageData } from "@/types/general";
import APIService from "@/services/APIService";

export const metadata: Metadata = {
  title: "Terms and Conditions - Hisense Global",
  description: "Hisense India - Terms and conditions for campaigns, products, and services",
  keywords: "Hisense India, Terms and Conditions, Campaigns, Products, Legal Terms, User Agreement",
};

export default async function TermsConditionsPage() {
  const pageData = await APIService.pageData("terms-and-conditions");
  console.log(pageData, "pageData");
  return (
     <TermsConditions pageData={pageData as unknown as TermsOfUsePageData} />
  );
}
