"use client";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogSlider2 = () => {
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

  // Navigation handlers (uncomment if navigation buttons are needed)
  // const handlePrev = () => {
  //   sliderRef.current?.slickPrev();
  // };

  // const handleNext = () => {
  //   sliderRef.current?.slickNext();
  // };

  return (
    <>
      <Slider ref={sliderRef} {...sliderSettings} className="main-visual-about-visual slider-newsroom">
        <div
          className="slide-item-newsroom"
          data-is-featured="false"
          data-topic="Press Release"
          data-year="14 December 2024"
        >
          <div className="content">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder desktop-only"
                style={{
                  background:
                    "url(/assets/images/Banners/newsroom.jpg ) no-repeat",
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
                    "url(/assets/images/Banners/newsroom.jpg ) no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="img-overlay"></div>
              </div>
            </div>
            <div className="text-box trackin">
              <div className="news-topics">Press Release</div>
              <h4>
                Hisense Scores Record-Breaking Black Friday Sales Abroad with
                Surge in Large Screen TV and Smart Home Innovation
              </h4>
              <div className="news-date">14 December 2024</div>
            </div>
            <a className="hisenseMedium nostyle" href="#"></a>
          </div>
        </div>
        <div
          className="slide-item-newsroom"
          data-is-featured="false"
          data-topic="Press Release"
          data-year="09 December 2024"
        >
          <div className="content">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder desktop-only"
                style={{
                  background:
                    "url(/assets/images/Banners/newsroom.jpg) no-repeat",
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
                    "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="img-overlay"></div>
              </div>
            </div>
            <div className="text-box trackin">
              <div className="news-topics">Press Release</div>
              <h4>
                Hisense Secures Top Spot in 100-inch TV Global Shipments
              </h4>
              <div className="news-date">09 December 2024</div>
            </div>
            <a className="hisenseMedium nostyle" href="#"></a>
          </div>
        </div>
        <div
          className="slide-item-newsroom"
          data-is-featured="false"
          data-topic="Press Release"
          data-year="03 December 2024"
        >
          <div className="content">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder desktop-only"
                style={{
                  background:
                    "url(/assets/images/Banners/newsroom.jpg) no-repeat",
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
                    "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="img-overlay"></div>
              </div>
            </div>
            <div className="text-box trackin">
              <div className="news-topics">Press Release</div>
              <h4>
                Hisense PX3-PRO Crowned Top Performer in Projector Showdown
              </h4>
              <div className="news-date">03 December 2024</div>
            </div>
            <a className="hisenseMedium nostyle" href="#"></a>
          </div>
        </div>
      </Slider>
      {/* Custom navigation buttons can be added here if needed */}
      {/* <div className="container my-arrow">
        <a
          className="btn-prev"
          id="listnews-newsroomPrev"
          onClick={handlePrev}
        ></a>
        <a
          className="btn-next"
          id="listnews-newsroomNext"
          onClick={handleNext}
        ></a>
      </div> */}
    </>
  );
};

export default BlogSlider2;
