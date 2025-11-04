"use client";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RelatedPosts } from "@/types/general";
import Link from "next/link";

const BlogSlider = ({ relatedPosts }: { relatedPosts: RelatedPosts[] }) => {
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
      <div className="listBg">
        <section className="text-box">
          <div className="container">
            <div className="text-box-info text-center">
              <h3 className="hisenseBold">Discover more</h3>
            </div>
          </div>
        </section>
      </div>
      <div
        className="main-visual-about-visual slider container"
        id="list1-about-csr"
      >
        <Slider ref={sliderRef} {...sliderSettings}>
        {relatedPosts.map((post) => (
          <div className="slide-item" key={post.id}>
            <div className="content">
              <div className="bg-overflow-h">
                <div
                  className="text-box-with-image bg-holder desktop-only"
                  style={{
                    background:
                      `url(${post.featured_image}) no-repeat`,
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
                      `url(${post.featured_image}) no-repeat`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="img-overlay"></div>
                </div>
              </div>
              <div className="text-box trackin">
                <h4>
                  {post.title}
                </h4>
                <Link className="hisenseMedium nostyle btn_more" href={post?.permalink || ""}>
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
          
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
