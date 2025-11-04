import type { Metadata } from "next";
import "@/styles/about.css";
import "@/styles/about_all_pages.css";
import Blog from "./Blog";
import APIService from "@/services/APIService";
import { CSRDetailPageData } from "@/types/general";

export const metadata: Metadata = {
  title: "CSR Details - Hisense Global",
  description:
    "Hisense India - Corporate Social Responsibility initiatives and community impact",
  keywords:
    "Hisense India, CSR, Corporate Social Responsibility, Community Impact, Social Welfare",
};

interface CSRDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function CSRDetailPage({
  params,
}: CSRDetailPageProps) {

  const { slug } = await params;
 

  const pageData = await APIService.blogDetailData(`csr-details/${slug}`);
  console.log(pageData, "pageData");


  return (
    <Blog pageData={pageData as unknown as CSRDetailPageData} />
  );
}
