import type { Metadata } from "next";
import "@/styles/about_all_pages.css";
import NewsRoom from "@/pages/NewsRoom";

export const metadata: Metadata = {
  title: "About Us Newsroom - Hisense Global",
  description:
    "Hisense India - Latest news, press releases, and company updates",
  keywords:
    "Hisense India, Newsroom, Press Release, News, Company Updates, Awards",
};

export default function NewsroomPage() {
  return (
    <NewsRoom />
  );
}
