"use client";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogSlider = () => {
  const sliderRef = useRef<Slider>(null);
  const [sliderSettings, setSliderSettings] = useState<{
    centerMode?: boolean;
    centerPadding?: string;
    slidesToShow?: number;
    accessibility?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    adaptiveHeight?: boolean;
    autoplaySpeed?: number;
    speed?: number;
  }>({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    accessibility: false,
    arrows: false,
  });

  const initCSRSlider = () => {
    if (typeof window === "undefined") return;

    let settings: {
      centerMode?: boolean;
      centerPadding?: string;
      slidesToShow?: number;
      accessibility?: boolean;
      arrows?: boolean;
      autoplay?: boolean;
      adaptiveHeight?: boolean;
      autoplaySpeed?: number;
      speed?: number;
    } = {
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      accessibility: false,
      arrows: false,
    };

    if (window.innerWidth < 1200 && window.innerWidth > 767) {
      settings = {
        centerMode: true,
        autoplay: true,
        centerPadding: "30px",
        slidesToShow: 2,
        accessibility: false,
        adaptiveHeight: true,
        arrows: false,
        autoplaySpeed: 3000,
        speed: 300,
      };
    } else if (window.innerWidth <= 767) {
      settings = {
        autoplay: true,
        centerPadding: "30px",
        slidesToShow: 1,
        accessibility: false,
        adaptiveHeight: true,
        arrows: false,
        autoplaySpeed: 3000,
        speed: 300,
      };
    }

    setSliderSettings(settings);
  };

  useEffect(() => {
    initCSRSlider();
    window.addEventListener("resize", initCSRSlider);

    return () => {
      window.removeEventListener("resize", initCSRSlider);
    };
  }, []);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      <div
        className="main-visual-about-visual slider container"
        id="list1-about-csr"
      >
        <Slider ref={sliderRef} {...sliderSettings}>
          <div className="slide-item">
            <div className="content">
              <div className="bg-overflow-h">
                <div
                  className="text-box-with-image bg-holder desktop-only"
                  style={{
                    background:
                      "url(/assets/images/Banners/discover_desktop.webp) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="img-overlay"></div>
                </div>
                <div
                  className="text-box-with-image bg-holder mobile-only"
                  style={{
                    background:
                      "url(/assets/images/Banners/discover_mobile.webp) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="img-overlay"></div>
                </div>
              </div>
              <div className="text-box trackin">
                <h4>
                  Hisense donated 6 million yuan for school reconstruction after
                  the earthquake
                </h4>
                <a className="hisenseMedium nostyle btn_more" href="#">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div className="content">
              <div className="bg-overflow-h">
                <div
                  className="text-box-with-image bg-holder desktop-only"
                  style={{
                    background:
                      "url(/assets/images/Banners/discover_desktop.webp) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="img-overlay"></div>
                </div>
                <div
                  className="text-box-with-image bg-holder mobile-only"
                  style={{
                    background:
                      "url(/assets/images/Banners/discover_mobile.webp) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="img-overlay"></div>
                </div>
              </div>
              <div className="text-box trackin">
                <h4>
                  Hisense donated 6 million yuan for school reconstruction after
                  the earthquake
                </h4>
                <a className="hisenseMedium nostyle btn_more" href="#">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div className="content">
              <div className="bg-overflow-h">
                <div
                  className="text-box-with-image bg-holder desktop-only"
                  style={{
                    background:
                      "url(/assets/images/Banners/discover_desktop.webp) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="img-overlay"></div>
                </div>
                <div
                  className="text-box-with-image bg-holder mobile-only"
                  style={{
                    background:
                      "url(/assets/images/Banners/discover_mobile.webp) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="img-overlay"></div>
                </div>
              </div>
              <div className="text-box trackin">
                <h4>
                  Hisense donated 6 million yuan for school reconstruction after
                  the earthquake
                </h4>
                <a className="hisenseMedium nostyle btn_more" href="#">
                  See More
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* <div className="container my-arrow">
        <a
          className="btn-prev"
          id="list1-about-csrPrev"
          onClick={handlePrev}
        ></a>
        <a
          className="btn-next"
          id="list1-about-csrNext"
          onClick={handleNext}
        ></a>
      </div> */}
    </>
  );
};

export default BlogSlider;
