"use client";
import EmailSubscription from "@/components/EmailSubscription";
import MainSlider from "@/components/MainSlider";
import TVSlider from "@/components/TVSlider";
import TextComponents from "@/components/TextComponents";
import APIService from "@/services/APIService";
import { CategoryData, HomePageData } from "@/types/general";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider, { Settings as SlickSettings } from "react-slick";

export default function Home() {
  const [pageData, setPageData] = useState<HomePageData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await APIService.pageData("home");
      console.log(response, "response");

      setPageData(response as unknown as HomePageData);
    }
    fetchData();
  }, []);


  // Typescript: react-slick expects lazyLoad option to be one of "ondemand" | "progressive" | undefined
  const settings: SlickSettings = {
    speed: 300,
    adaptiveHeight: true,
    autoplay: false,
    lazyLoad: "ondemand",
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow:3,
          centerMode: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
          dots: true,
          arrows: false,
          infinite: false,
        },
      },
    ],
  };
  
  const settingsHighlight: SlickSettings = {
    speed: 300,
    adaptiveHeight: true,
    autoplay: false,
    lazyLoad: "ondemand",
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
          dots: true,
          arrows: false,
          infinite: false,
        },
      },
    ],
  };
  return (
    <div className="main-container">
      <MainSlider slides={pageData?.acf?.banner_data ?? []} />
      {/* <!-- Discover our series start --> */}
      <TextComponents
        title={pageData?.acf?.title ?? ""}
        subtitle={pageData?.acf?.subtitle ?? ""}
      />

      {pageData?.acf?.slider_data?.map((slider, index) => (
        <TVSlider items={slider.category_data as CategoryData[] ?? []} key={index}  />
      ))}

      {/* <!-- About hisense start --> */}
      <div className="about-hisense-wrapper">
        <h2
          className="sub-title-india"
          dangerouslySetInnerHTML={{
            __html: pageData?.acf?.section_title ?? "",
          }}
        />


        <Slider
          {...settingsHighlight}
          className="about-container about-container-india highlight"
        >
          {pageData?.acf?.about_data?.[0] && (
            <div className="slide-item" key={0}>
              <div className="content">
                <p
                  dangerouslySetInnerHTML={{ __html: pageData.acf.about_data[0].about_title ?? "" }}
                />
                <a className="btn-more" href="#" target="_self">
                  Explore More
                </a>
              </div>
              <div className="banner">
                <img
                  className="desktop-only"
                  src={pageData.acf.about_data[0].about_image?.url ?? ""}
                  alt={pageData.acf.about_data[0].about_image?.alt ?? ""}
                />
                <img
                  className="mobile-only"
                  src={pageData.acf.about_data[0].about_image_mobile?.url || pageData.acf.about_data[0].about_image?.url || ""}
                  alt={pageData.acf.about_data[0].about_image_mobile?.alt || pageData.acf.about_data[0].about_image?.alt || ""}
                />
              </div>
            </div>
          )}
        </Slider>

        <Slider
          {...settings} className="about-container about-container-india next-slides">
        {pageData?.acf?.about_data?.slice(1, 4).map((about, index) => (
          <div className="slide-item" key={index}>
            <div className="content">
              <p dangerouslySetInnerHTML={{ __html: about.about_title ?? "" }}/>
              <Link className="btn-more" href={about.button_link ?? ""} target="_self">
                {about.button_text ?? ""}
              </Link>
            </div>
            <div className="banner">
              <img
                className="desktop-only"
                src={about.about_image?.url ?? ""}
                alt={about.about_image?.alt ?? ""}
              />
              <img
                className="mobile-only"
                src={about.about_image_mobile?.url ||about.about_image?.url || ""}
                alt={about.about_image_mobile?.alt || about.about_image?.alt || ""}
              />
            </div>
          </div>
          ))}
        </Slider>

        <div className="about-btn-container">
          <Link className="btn-hisense-india" href={pageData?.acf?.section_button?.[0]?.button_link ?? ""} target="_self">
            {pageData?.acf?.section_button?.[0]?.button_text ?? ""}
          </Link>
        </div>
      </div>
      {/* <!-- About hisense end --> */}
      <EmailSubscription />
    </div>
  );
}
