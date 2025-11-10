import type { Metadata } from "next";
import Image from "next/image";
import Values from "@/pages/Values";
import APIService from "@/services/APIService";
import { ValuesPageData } from "@/types/general";

export const metadata: Metadata = {
  title: "About Us Values - Hisense Global",
  description: "Hisense India - Our Core Values: Integrity, Innovation, Customer Focus and Sustainability",
  keywords: "Hisense India, Values, Mission, Vision, Core Values",
};

export default async function ValuesPage() {

  const pageData = await APIService.pageData("values");
  console.log(pageData, "pageData");
  return (

      <Values pageData={pageData as unknown as ValuesPageData} />
   
  );
}
