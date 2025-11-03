"use client";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const OverviewProductSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<Slider>(null);

  const breakpoint = 768;

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Check initial width
    if (typeof window !== "undefined") {
      checkWidth();
      window.addEventListener("resize", checkWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkWidth);
      }
    };
  }, []);

  // Move dots to external container after slider renders
  useEffect(() => {
    if (!isMobile || typeof window === "undefined") return;

    const moveDots = () => {
      const dotsContainer = document.querySelector(
        ".overview-type-listing-dots"
      );
      const slickDots = document.querySelector(
        ".overview-type-container .slick-dots"
      );
      
      if (dotsContainer && slickDots) {
        // Move the actual element (not clone) to preserve functionality
        dotsContainer.innerHTML = "";
        dotsContainer.appendChild(slickDots);
      }
    };

    // Use MutationObserver to detect when slick-dots is added
    const observer = new MutationObserver(() => {
      const slickDots = document.querySelector(
        ".overview-type-container .slick-dots"
      );
      if (slickDots) {
        moveDots();
        observer.disconnect();
      }
    });

    const container = document.querySelector(".overview-type-container");
    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true,
      });
    }

    // Also try immediately in case dots are already there
    moveDots();

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  const sliderSettings = {
    infinite: false,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const sliderItems = (
    <>
      <div className="overview-type">
        <div className="img">
          <div className="img-container">
            <Image
              className="desktop-only"
              src="/assets/images/tv_series_desktop.jpg"
              alt="Hisense ULED TV"
              width={400}
              height={300}
            />
            <Image
              className="mobile-only"
              src="/assets/images/tv_series_mobile.jpg"
              alt="Hisense ULED TV"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="overview-content theme-white">
          <div className="type">ULED TV</div>
          <div className="style">MINI-LED ULED TV UX</div>
          <div className="viewmore">
            <Link className="btn-hisense-india" href="/uxn" target="_self">
              View More
            </Link>
          </div>
        </div>
      </div>
      <div className="overview-type">
        <div className="img">
          <div className="img-container">
            <Image
              className="desktop-only"
              src="/assets/images/tv_series_desktop.jpg"
              alt="Hisense OLED TV"
              width={400}
              height={300}
            />
            <Image
              className="mobile-only"
              src="/assets/images/tv_series_mobile.jpg"
              alt="Hisense OLED TV"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="overview-content theme-white">
          <div className="type">OLED TV</div>
          <div className="style">OLED 4K TV A9H</div>
          <div className="viewmore">
            <Link className="btn-hisense-india" href="/uxn" target="_self">
              View More
            </Link>
          </div>
        </div>
      </div>
      <div className="overview-type">
        <div className="img">
          <div className="img-container">
            <Image
              className="desktop-only"
              src="/assets/images/tv_series_desktop.jpg"
              alt="Hisense UHD TV"
              width={400}
              height={300}
            />
            <Image
              className="mobile-only"
              src="/assets/images/tv_series_mobile.jpg"
              alt="Hisense UHD TV"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="overview-content theme-white">
          <div className="type">UHD TV</div>
          <div className="style">UHD 4K TV A7H</div>
          <div className="viewmore">
            <Link className="btn-hisense-india" href="/uxn" target="_self">
              View More
            </Link>
          </div>
        </div>
      </div>
      <div className="overview-type">
        <div className="img">
          <div className="img-container">
            <Image
              className="desktop-only"
              src="/assets/images/tv_series_desktop.jpg"
              alt="Hisense Smart TV"
              width={400}
              height={300}
            />
            <Image
              className="mobile-only"
              src="/assets/images/tv_series_mobile.jpg"
              alt="Hisense Smart TV"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="overview-content theme-white">
          <div className="type">Smart TV</div>
          <div className="style"></div>
          <div className="viewmore">
            <Link className="btn-hisense-india" href="/uxn" target="_self">
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="overview-type-listing">
      <div className="overview-type-wrapper">
        <h2>Our TV Series</h2>
        <div className="overview-type-container">
          {isMobile ? (
            <Slider ref={sliderRef} {...sliderSettings}>
              {sliderItems}
            </Slider>
          ) : (
            sliderItems
          )}
        </div>
        <div className="overview-type-listing-dots"></div>
      </div>
    </div>
  );
};

export default OverviewProductSlider;
