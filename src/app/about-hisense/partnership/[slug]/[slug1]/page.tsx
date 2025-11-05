import type { Metadata } from "next";
import "@/styles/about.css";
import "@/styles/about_all_pages.css";
import Blog from "../Blog";
import { CSRDetailPageData } from "@/types/general";
import APIService from "@/services/APIService";

export const metadata: Metadata = {
  title: "CSR Details - Hisense Global",
  description:
    "Hisense India - Corporate Social Responsibility initiatives and community impact",
  keywords:
    "Hisense India, CSR, Corporate Social Responsibility, Community Impact, Social Welfare",
};

interface CSRDetailPageProps {
  params: {
    slug1: string;
  };
}

export default async function CSRDetailPage({
  params
}: CSRDetailPageProps) {
  const { slug1 } = await params;
 

  const pageData = await APIService.blogDetailData(`newsroom-details/${slug1}`);
  console.log(pageData, "pageData");


  return (
    <Blog pageData={pageData as unknown as CSRDetailPageData} />
  );
}
