import type { Metadata } from "next";
import "@/styles/supports.css"; 
import "@/styles/about_all_pages.css";
import APIService from "@/services/APIService";
import PrivacyPolicy from "@/components/PrivaryPolicy";
import { PrivacyPolicyPageData } from "@/types/general";

export const metadata: Metadata = {
  title: "Privacy Policy - Hisense Global",
  description: "Hisense India - Privacy policy and data protection information",
  keywords: "Hisense India, Privacy Policy, Data Protection, GDPR, Personal Information, Privacy Rights",
};

export default async function PrivacyPolicyPage() {
  const pageData = await APIService.pageData("privacy-policy");
  console.log(pageData, "pageData");
  return (
    <PrivacyPolicy pageData={pageData as unknown as PrivacyPolicyPageData} />
  );
}
