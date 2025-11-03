import type { Metadata } from "next";
import "@/styles/about.css";
import "@/styles/about_all_pages.css";
import Blog from "./Blog";

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

export default function CSRDetailPage({
  params: { slug },
}: CSRDetailPageProps) {
  // TODO: Use slug parameter to fetch dynamic CSR content
  console.log("CSR Detail Page for slug:", slug);


  return (
    <Blog />
  );
}
