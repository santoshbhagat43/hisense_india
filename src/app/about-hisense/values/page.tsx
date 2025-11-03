import type { Metadata } from "next";
import Image from "next/image";
import Values from "@/pages/Values";

export const metadata: Metadata = {
  title: "About Us Values - Hisense Global",
  description: "Hisense India - Our Core Values: Integrity, Innovation, Customer Focus and Sustainability",
  keywords: "Hisense India, Values, Mission, Vision, Core Values",
};

export default function ValuesPage() {
  return (

      <Values />
   
  );
}
