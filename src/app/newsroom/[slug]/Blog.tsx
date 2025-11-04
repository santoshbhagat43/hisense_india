"use client";
import type { Metadata } from "next";
import Image from "next/image";
import "@/styles/about.css";
import "@/styles/about_all_pages.css";
import BlogSlider from "@/components/BlogSlider";
import { useAboutMenu } from "@/contexts/AboutMenuContext";
import { useEffect } from "react";
import { CSRDetailPageData } from "@/types/general";
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
              <h1 className="hisenseBold">
                {pageData?.post_title}
              </h1>
              <h6 className="hisenseLight">
                <p dangerouslySetInnerHTML={{ __html: pageData?.post_content }} />
              </h6>
            </div>
          </div>
        </section>
        <div className="main-banner big-banner">
          <div className="slider">
            <div className="slide-item">
              <div className="content">
                <Image
                  className="desktop-only"
                  src={pageData?.featured_image}
                  alt="Hisense's contribution in South Africa"
                  width={800}
                  height={400}
                />
                {/* <Image
                  className="mobile-only"
                  src="/assets/images/africa.jpg"
                  alt="Hisense's contribution in South Africa"
                  width={400}
                  height={200}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <section className="mainText text-box">
          <div className="container">
            <div className="text-box-info text-center">
              <h1 className="hisenseBold">
                <Link href="/csr" target="_self">Discover more</Link>
              </h1>
            </div>
          </div>
        </section>
        <BlogSlider  />
        {/* <div className="container my-arrow csr-datils-page-custome">
          <a className="btn-prev" id="list1-about-csrPrev"></a>
          <a className="btn-next" id="list1-about-csrNext"></a>
        </div> */}
      </div>
    </div>
  );
}
