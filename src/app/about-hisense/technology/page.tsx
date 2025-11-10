import type { Metadata } from "next";
import Technology from "@/pages/Technology";
import APIService from "@/services/APIService";
import { TechnologyPageData } from "@/types/general";


export const metadata: Metadata = {
  title: "About Hisense Technology - Hisense Global",
  description: "Hisense India - Innovation through experience with cutting-edge technology",
  keywords: "Hisense India, Technology, Innovation, Laser TV, ULED, 5G, AIoT, Display Technology",
};

export default async function TechnologyPage() {

  const pageData = await APIService.pageData("technology");
  console.log(pageData, "pageData");
  return (
    
      <Technology pageData={pageData as unknown as TechnologyPageData} />
    
  );
}
