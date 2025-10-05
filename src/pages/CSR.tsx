"use client";

import Link from "next/link";

import { useRef, useState } from "react";

import "@/styles/about.css";
import { useAboutMenu } from "@/contexts/AboutMenuContext";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Types for pageData and its nested structure ---
type BannerImage = {
  url: string;
};

type BannerData = {
  banner_image_desktop: BannerImage;
  banner_image_mobile: BannerImage;
  banner_title: string;
};

type CSRPost = {
  listing_image: string;
  post_title: string;
  short_description: string;
  permalink: string;
};

type BannerSection = {
  banner_desktop_image: BannerImage;
  banner_mobile_image: BannerImage;
  image_text: string;
  permalink?: string;
};

type PageSection =
  | { csr_posts: CSRPost[] }
  | BannerSection;

type PageData = {
  acf?: {
    banner_data?: BannerData[];
    page_sections?: any[]; // We'll type this more specifically below
  };
  post_content?: string;
};

export default function OverView({ pageData }: { pageData: PageData }) {
  const { setShowAboutMenu } = useAboutMenu();

  // Defensive checks and type assertions for pageData
  const banner: BannerData = pageData?.acf?.banner_data?.[0] ?? {
    banner_image_desktop: { url: "" },
    banner_image_mobile: { url: "" },
    banner_title: "",
  };
  const post_content: string = pageData?.post_content ?? "";
  const pageContent: any[] = pageData?.acf?.page_sections ?? [];

  // Extracting sections with type guards
  const csr_posts: CSRPost[] = Array.isArray(pageContent) && pageContent[0]?.csr_posts
    ? pageContent[0].csr_posts
    : [];
  const banner_data: BannerSection = pageContent[1] ?? {
    banner_desktop_image: { url: "" },
    banner_mobile_image: { url: "" },
    image_text: "",
  };
  const csr_slider_data: CSRPost[] = Array.isArray(pageContent) && pageContent[2]?.csr_posts
    ? pageContent[2].csr_posts
    : [];
  const banner_data_image: BannerSection = pageContent[3] ?? {
    banner_desktop_image: { url: "" },
    banner_mobile_image: { url: "" },
    image_text: "",
  };

  useEffect(() => {
    setShowAboutMenu(true);

    return () => {
      setShowAboutMenu(false);
    };
  }, [setShowAboutMenu]);

  // Slider ref for controlling navigation
  const sliderRef = useRef<Slider | null>(null);

  // Responsive slider settings hook
  function useResponsiveSliderSettings() {
    const [settings, setSettings] = useState(() => getSliderSettings());

    function getSliderSettings() {
      if (typeof window === "undefined") {
        return {
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 3,
          accessibility: false,
          arrows: false,
          adaptiveHeight: false,
          autoplay: false,
          speed: 300,
          infinite: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
          pauseOnFocus: false,
          dots: true,
          variableWidth: false,
        };
      }
      if (window.innerWidth < 1200 && window.innerWidth > 767) {
        return {
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 2,
          accessibility: false,
          arrows: false,
          adaptiveHeight: true,
          autoplay: true,
          speed: 300,
          infinite: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
          pauseOnFocus: false,
          dots: true,
          variableWidth: false,
        };
      } else if (window.innerWidth <= 767) {
        return {
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
          accessibility: false,
          arrows: false,
          adaptiveHeight: true,
          autoplay: true,
          speed: 300,
          infinite: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
          pauseOnFocus: false,
          dots: true,
          variableWidth: false,
        };
      } else {
        return {
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 3,
          accessibility: false,
          arrows: false,
          adaptiveHeight: false,
          autoplay: false,
          speed: 300,
          infinite: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
          pauseOnFocus: false,
          dots: true,
          variableWidth: false,
        };
      }
    }

    useEffect(() => {
      function handleResize() {
        setSettings(getSliderSettings());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return settings;
  }

  const sliderSettings = useResponsiveSliderSettings();

  // Navigation functions
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="main-container">
      <div className="about-csr">
        <section id="overview-silder">
          <div className="text-box desktop-only">
            <div
              className="text-box-with-image"
              style={{
                background: `url(${banner.banner_image_desktop?.url}) no-repeat`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              role="img"
              aria-label={banner.banner_title}
            >
              <div className="img-overlay"></div>
            </div>
            <div className="two-box-info absolute-c-c-overview">
              <h1 className="hisenseBold text-center">
                <p>{banner.banner_title}</p>
              </h1>
            </div>
          </div>
          <div className="text-box mobile-only">
            <div
              className="text-box-with-image"
              style={{
                background: `url(${banner.banner_image_mobile?.url}) no-repeat`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              role="img"
              aria-label={banner.banner_title}
            >
              <div className="img-overlay"></div>
            </div>
            <div className="two-box-info absolute-c-c-overview">
              <h1 className="hisenseBold text-center">
                <p>{banner.banner_title}</p>
              </h1>
            </div>
          </div>
        </section>

        <section className="text-box">
          <div className="container">
            <div
              className="text-box-info text-center"
              style={{ color: "#000" }}
            >
              <p
                className="hisenseLight"
                dangerouslySetInnerHTML={{ __html: post_content }}
              />
            </div>
          </div>
        </section>

        {/* Dynamic CSR Posts in Pairs */}
        {csr_posts &&
          csr_posts.length > 0 &&
          (() => {
            // Group posts into pairs
            const pairs: [CSRPost, CSRPost?][] = [];
            for (let i = 0; i < csr_posts.length; i += 2) {
              pairs.push([csr_posts[i], csr_posts[i + 1]]);
            }

            return pairs.map((pair, pairIndex) => (
              <section key={pairIndex} id="two-box">
                <div className="container overview-container">
                  <div className="left-container-about-csr">
                    <div className="bg-holder">
                      <div
                        className="zoom desktop-only"
                        style={{
                          background: `url(${
                            pair[0]?.listing_image ||
                            "/assets/images/Banners/csr.jpg"
                          }) no-repeat`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div
                        className="zoom mobile-only"
                        style={{
                          background: `url(${
                            pair[0]?.listing_image ||
                            "/assets/images/Banners/csr.jpg"
                          }) no-repeat`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      ></div>
                    </div>
                    <div className="two-box-info absolute">
                      <h4 className="hisenseBold">
                        <strong>{pair[0]?.post_title}</strong>
                      </h4>
                      <div className="hisenseLight">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: pair[0]?.short_description || "",
                          }}
                        />
                      </div>
                      <Link
                        className="hisenseMedium nostyle btn_more"
                        href={pair[0]?.permalink || "#"}
                      >
                        See More
                      </Link>
                    </div>
                  </div>
                  <div className="two-box-gap"></div>
                  {pair[1] && (
                    <div className="right-container-about-csr">
                      <div className="bg-holder">
                        <div
                          className="zoom desktop-only"
                          style={{
                            background: `url(${
                              pair[1]?.listing_image ||
                              "/assets/images/Banners/csr.jpg"
                            }) no-repeat`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div
                          className="zoom mobile-only"
                          style={{
                            background: `url(${
                              pair[1]?.listing_image ||
                              "/assets/images/Banners/csr.jpg"
                            }) no-repeat`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </div>
                      <div className="two-box-info absolute">
                        <h4 className="hisenseBold">
                          <strong>{pair[1]?.post_title}</strong>
                        </h4>
                        <div className="hisenseLight">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: pair[1]?.short_description || "",
                            }}
                          />
                        </div>
                        <Link
                          className="hisenseMedium nostyle btn_more"
                          href={pair[1]?.permalink || "#"}
                        >
                          See More
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ));
          })()}

        <section className="text-box">
          <div className="container overview-container">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder zoom desktop-only"
                style={{
                  background: `url(${banner_data?.banner_desktop_image?.url}) no-repeat`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                role="img"
                aria-label={banner_data?.image_text}
              >
                <div className="img-overlay"></div>
              </div>
              <div
                className="text-box-with-image bg-holder zoom mobile-only"
                style={{
                  background: `url(${banner_data?.banner_mobile_image?.url}) no-repeat`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                role="img"
                aria-label={banner_data?.image_text}
              >
                <div className="img-overlay"></div>
              </div>

              <div className="two-box-info absolute-c-c-csr">
                <div className="hisenseMedium">Value</div>

                <h2 className="hisenseBold text-center">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: banner_data?.image_text,
                    }}
                  />
                </h2>

                <Link className="hisenseMedium nostyle btn_more" href="/values">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="main-visual-about-visual slider container">
          <Slider ref={sliderRef} {...sliderSettings}>
            {csr_slider_data.map((item) => (
              <div className="slide-item" key={item.ID}>
                <div className="content">
                  <div className="bg-overflow-h">
                    <div
                      className="text-box-with-image bg-holder desktop-only"
                      style={{
                        background: `url(${item.listing_image}) no-repeat`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="img-overlay"></div>
                    </div>
                    <div
                      className="text-box-with-image bg-holder mobile-only"
                      style={{
                        background: `url(${item.listing_image}) no-repeat`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="img-overlay"></div>
                    </div>
                  </div>
                  <div className="text-box trackin">
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: item.post_title,
                      }}
                    />
                    {/* <div
                      className="csr-short-description"
                      dangerouslySetInnerHTML={{
                        __html: item.short_description,
                      }}
                    /> */}
                    <a
                      className="hisenseMedium nostyle btn_more"
                      href={item.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="container my-arrow">
          <a className="btn-prev" onClick={handlePrev}></a>
          <a className="btn-next" onClick={handleNext}></a>
        </div>

        <section className="text-box">
          <div className="container overview-container">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder zoom desktop-only"
                style={{
                  background:
                    `url(${banner_data_image?.banner_desktop_image?.url}) no-repeat`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                role="img"
                aria-label="Hisense innovates through technology"
              >
                <div className="img-overlay"></div>
              </div>
              <div
                className="text-box-with-image bg-holder zoom mobile-only"
                style={{
                  background:
                    `url(${banner_data_image?.banner_mobile_image?.url}) no-repeat`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                role="img"
                aria-label="Hisense innovates through technology"
              >
                <div className="img-overlay"></div>
              </div>

              <div className="two-box-info absolute-c-c-csr">
                <div dangerouslySetInnerHTML={{ __html: banner_data_image?.image_text }} />
               

                {/* <Link
                  className="hisenseMedium nostyle btn_more"
                  href={banner_data_image?.permalink}
                >
                  See More
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
