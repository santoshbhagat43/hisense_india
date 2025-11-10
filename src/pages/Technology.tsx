"use client";

import Link from "next/link";

import "@/styles/about.css";
import { useAboutMenu } from "@/contexts/AboutMenuContext";
import { useEffect } from "react";
import { TechnologyPageData } from "@/types/general";

export default function Technology({ pageData }: { pageData: TechnologyPageData }) {
  const { setShowAboutMenu,handleActiveSlug } = useAboutMenu();

  useEffect(() => {
    setShowAboutMenu(true);
    handleActiveSlug("technology");

    return () => {
      setShowAboutMenu(false);
    };
  }, [setShowAboutMenu,handleActiveSlug]);

  return (
    <div className="main-container">
        <div className="about-overview about-technology">
          <section id="overview-silder">
            <div className="text-box desktop-only">
              <div 
                className="text-box-with-image"
                style={{
                  background: `url(${pageData?.acf?.banner_data[0]?.banner_image_desktop?.url}) no-repeat`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                role="img" 
                aria-label={pageData?.acf?.banner_data[0]?.banner_title}
              >
                <div className="img-overlay"></div>
                <div className="overlay-top-banner-bottom"></div>
              </div>
              <div className="two-box-info absolute-c-c">
                <h1 className="hisenseBold text-center">
                  <p><span>Innovation</span><br /> through experience</p>
                </h1>
              </div>
              <div className="two-box-info absolute-c-c-overview">
              </div>
            </div>
            <div className="text-box mobile-only">
              <div 
                className="text-box-with-image"
                style={{
                  background: `url(${pageData?.acf?.banner_data[0]?.banner_image_mobile?.url}) no-repeat`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                role="img" 
                aria-label="alt"
              >
                <div className="img-overlay"></div>
                <div className="overlay-top-banner-bottom"></div>
              </div>
              <div className="two-box-info absolute-c-c-overview">
                <h1 className="hisenseBold text-center">
                  <p dangerouslySetInnerHTML={{ __html: pageData?.acf?.banner_data[0]?.banner_title }}></p> 
                </h1>
              </div>
            </div>
          </section>

          <div className="innovation-group">
            <div className="innovation-box container desktop-only">
              {pageData?.acf?.page_section.map((section, index) => (
              <div className="text-box" key={index}>
                <div 
                  className="text-box-with-image"
                  style={{
                    background: `url(${section?.banner_image?.url}) no-repeat`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label={section?.title}
                >
                  <div className="overlay-top-banner-bottom"></div>
                </div>
                <div className="innovation-text-box">
                  <h3 className="hisenseBold" dangerouslySetInnerHTML={{ __html: section?.title }}></h3>
                  
                    <p className="hisenseLight" dangerouslySetInnerHTML={{ __html: section?.description }}></p>
                  
                  <div className="text-center text-expand d-none">
                    <img
                      src="/assets/images/arrow.svg"
                      alt="arrow" />
                  </div>
                </div>
              </div>
              ))}
            </div>

            <div className="innovation-box container mobile-only">
            {pageData?.acf?.page_section.map((section, index) => (
              <div className="text-box" key={index}>
                <div 
                  className="text-box-with-image"
                  style={{
                    background: `url(${section?.banner_image?.url}) no-repeat`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label={section?.title}
                >
                  <div className="overlay-top-banner-bottom"></div>
                </div>
                <div className="innovation-text-box">
                  <h3 className="hisenseBold" dangerouslySetInnerHTML={{ __html: section?.title }}></h3>
                  <p className="hisenseLight" dangerouslySetInnerHTML={{ __html: section?.description }}></p>
                    
                  <div className="text-center text-expand d-none">
                    <img
                      src="/assets/images/arrow.svg"
                      alt="arrow" />
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}