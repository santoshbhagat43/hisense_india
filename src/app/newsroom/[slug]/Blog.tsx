"use client";
import type { Metadata } from "next";
import Image from "next/image";
import "@/styles/about.css";
import "@/styles/about_all_pages.css";
import BlogSlider from "@/components/BlogSlider";
import { useAboutMenu } from "@/contexts/AboutMenuContext";
import { useEffect } from "react";
import { CSRDetailPageData, RelatedPosts } from "@/types/general";
import Link from "next/link";

export default function Blog({ pageData }: { pageData: CSRDetailPageData }) {
  const { setShowAboutMenu, handleActiveSlug } = useAboutMenu();

  useEffect(() => {
    setShowAboutMenu(true);
    handleActiveSlug("csr");

    return () => {
      setShowAboutMenu(false);
    };
  }, [setShowAboutMenu, handleActiveSlug]);

  return (
    <div className="main-container">
      <div className="about-csr-details">
        <section className="mainText text-box">
          <div className="container">
            <div className="text-box-info text-center">
              <h5 className="topic">{pageData?.category}</h5>
              <h1 className="hisenseBold">
                {pageData?.post_title}
              </h1>
              <h5 className="date">{pageData?.post_date}</h5>
            </div>
          </div>
        </section>

        <div className="top-banner">
          <div className="top-banner-inner">
            <img
              className="desktop-only"
              src={pageData?.featured_image}
              alt={pageData?.post_title}
            />
            {/* <img
              className="mobile-only"
              src="assets/images/20250708-banner.webp"
              alt={pageData?.post_title}
            /> */}
          </div>
        </div>

        <section className="mainText text-box">
          <div className="container">
            <div className="text-box-info text-center">
              <h6 className="hisenseLight"></h6>
            </div>
          </div>
        </section>
        <div className="main-banner">
          <div className="text-box-info slider"></div>
        </div>
        <section className="mainText text-box">
          <div className="container">
            <div className="text-box-info text-center">
              <div dangerouslySetInnerHTML={{ __html: pageData?.post_content }} />
            </div>
          </div>
          
        </section>
        

        <BlogSlider relatedPosts={pageData?.related_posts as RelatedPosts[]} />
      </div>
    </div>
  );
}
