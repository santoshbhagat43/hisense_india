import type { Metadata } from "next";
import CSR from "@/pages/CSR";
import APIService from "@/services/APIService";

import "@/styles/about_all_pages.css";

export const metadata: Metadata = {
  title: "About Us CSR - Hisense Global",
  description: "Hisense India - Corporate Social Responsibility and community initiatives",
  keywords: "Hisense India, CSR, Corporate Social Responsibility, Community, ESG",
};

export default async function CSRPage() {

  const pageData = await APIService.pageData("csr");
  console.log(pageData, "pageData");
  return (
    <CSR pageData={pageData} />
  );
}
