import "@/styles/product.css";
import ProductSlider from "@/components/ProductSlider";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import OverviewProductSlider from "@/components/OverviewproductSlider";
import SimpleOverview from "@/components/SimpleOverview";
import TVSlider from "@/components/TVSlider";
import RecommendProduct from "@/components/RecommendProduct";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "TV Series - Hisense Global",
    description:
      "Hisense India - Complete range of TV series including ULED, OLED, UHD, and Smart TVs",
    keywords:
      "Hisense India, TV Series, ULED TV, OLED TV, UHD TV, Smart TV, Mini LED TV",
  };
}

export default function SeriesPage({ params }: { params: { slug: string } }) {
  // Expect only slugs ending in "-series"
  if (!params.slug.endsWith("-series")) {
    notFound();
  }

  const itemsLaserTVData = [
    {
      title: "Laser TV",
      products: [
        {
          isNew: true,
          name: "88L5V Sonic Screen Laser TV",
          moreHref: "#",
          viewAllHref: "#",
          moreLabel: "More",
          viewAllLabel: "View all Laser TV",
        },
      ],
      banners: [
        {
          desktop: "/assets/images/Banners/discover_desktop.webp",
          mobile: "/assets/images/Banners/discover_mobile.webp",
          alt: "88L5V Sonic Screen Laser TV",
        },
      ],
    },
    {
      title: "Laser Cinema",
      products: [
        {
          isNew: true,
          name: "120L5 Ultra Short Throw Laser Cinema",
          moreHref: "#",
          viewAllHref: "#",
          moreLabel: "More",
          viewAllLabel: "View all Laser Cinema",
        },
      ],
      banners: [
        {
          desktop: "/assets/images/Banners/discover_desktop.webp",
          mobile: "/assets/images/Banners/discover_mobile.webp",
          alt: "120L5 Ultra Short Throw Laser Cinema",
        },
      ],
    },
  ];

  return (
    <div className="main-container">
      
      <ProductSlider />

      <OverviewProductSlider />

      <SimpleOverview />

      <div className="overview-full-col">
        <TVSlider items={itemsLaserTVData} />
      </div>

      <RecommendProduct />

    </div>
  );
}
