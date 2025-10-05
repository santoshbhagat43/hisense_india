"use client";

import Link from "next/link";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";
// import { useEffect } from "react";
// import $ from "jquery";

export default function ProductSlider() {
//   useEffect(() => {
//     const initProductListingBanner = () => {
//       const bannerElement = document.querySelector(".product-listing-banner");
//       if (bannerElement) {
//         const holder = bannerElement.querySelector(".product-listing-banner-holder");
//         if (holder && !holder.classList.contains("slick-initialized")) {
//           // Use imported $ instead of window.$
//           if ($) {
//             $(holder)
//               .slick({
//                 slidesToShow: 1,
//                 speed: 300,
//                 infinite: true,
//                 adaptiveHeight: true,
//                 autoplay: true,
//                 autoplaySpeed: 3000,
//                 pauseOnHover: false,
//                 pauseOnFocus: false,
//                 arrows: true,
//                 dots: true,
//                 appendDots: bannerElement.querySelector(".product-listing-dots"),
//               })
//               .slick("slickPlay");
//           }
//         }
//       }
//     };

//     // Load Slick if not already loaded
//     const loadSlickSlider = () => {
//       if (typeof window !== "undefined") {
//         // Check if Slick is already loaded
//         if ($ && typeof ($ as any).fn.slick === "function") {
//           initProductListingBanner();
//         } else {
//           // Load Slick CSS
//           if (!document.querySelector('link[href*="slick"]')) {
//             const slickCSS = document.createElement('link');
//             slickCSS.rel = 'stylesheet';
//             slickCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
//             document.head.appendChild(slickCSS);
//           }

//           // Load Slick JS
//           if (!document.querySelector('script[src*="slick"]')) {
//             const slickScript = document.createElement('script');
//             slickScript.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
//             slickScript.onload = () => {
//               initProductListingBanner();
//             };
//             document.head.appendChild(slickScript);
//           } else {
//             // If Slick script is already present but not loaded, wait for it to load
//             const slickScript = document.querySelector('script[src*="slick"]');
//             if (slickScript && !((window as any).Slick)) {
//               slickScript.addEventListener('load', () => {
//                 initProductListingBanner();
//               });
//             }
//           }
//         }
//       }
//     };

//     // Initialize after component mounts
//     const timer = setTimeout(loadSlickSlider, 100);

//     return () => {
//       clearTimeout(timer);
//       // Cleanup slick slider on unmount
//       if (typeof window !== "undefined" && $) {
//         const holder = document.querySelector(".product-listing-banner-holder");
//         if (holder && holder.classList.contains("slick-initialized")) {
//           ($(holder) as any).slick('unslick');
//         }
//       }
//     };
//   }, []);

const sliderSettings = {
  slidesToShow: 1,
  speed: 300,
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  pauseOnFocus: false,
  arrows: true,
  dots: true,
  appendDots: (dots: ReactNode) => <div className="product-listing-dots">{dots}</div>,
};

  return (
    <>
      {/* Slider Start */}
      <section className="product-listing-banner">
        <div className="product-listing-banner-inner">
          <Slider className="product-listing-banner-holder" {...sliderSettings}>
            <div className="product-listing-banner-gallery theme-white mode-left">
              <div>
                <Image 
                  className="banner desktop-only"
                  src="/assets/images/Banners/tv01.ux-mini-led-tv.jpg"
                  alt="ULED X Mini-LED TV"
                  width={1200}
                  height={600}
                />
                <Image 
                  className="banner mobile-only" 
                  src="/assets/images/Banners/tv-20241206-m.webp"
                  alt="ULED X Mini-LED TV"
                  width={600}
                  height={300}
                />
              </div>
              <div className="product-listing-banner-content">
                <div className="product-listing-banner-content-inner">
                  <h3>ULED X Mini-LED</h3>
                  <h1>ULED MINILED UX</h1>
                  <div className="btn-container">
                    <Link className="btn-hisense-india" href="/uxn">Discover more</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-listing-banner-gallery theme-white mode-left">
              <div>
                <Image 
                  className="banner desktop-only"
                  src="/assets/images/Banners/tv01.ux-mini-led-tv.jpg"
                  alt="ULED Mini-LED TV"
                  width={1200}
                  height={600}
                />
                <Image 
                  className="banner mobile-only" 
                  src="/assets/images/Banners/tv-20241206-m.webp"
                  alt="ULED Mini-LED TV"
                  width={600}
                  height={300}
                />
              </div>
              <div className="product-listing-banner-content">
                <div className="product-listing-banner-content-inner">
                  <h3>ULED Mini-LED</h3>
                  <h1>ULED MINILED U8NQ</h1>
                  <div className="btn-container">
                    <Link className="btn-hisense-india" href="/uxn">Discover more</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-listing-banner-gallery theme-white mode-left">
              <div>
                <Image 
                  className="banner desktop-only"
                  src="/assets/images/Banners/tv01.ux-mini-led-tv.jpg"
                  alt="ULED Mini-LED TV"
                  width={1200}
                  height={600}
                />
                <Image 
                  className="banner mobile-only" 
                  src="/assets/images/Banners/tv-20241206-m.webp"
                  alt="ULED Mini-LED TV"
                  width={600}
                  height={300}
                />
              </div>
              <div className="product-listing-banner-content">
                <div className="product-listing-banner-content-inner">
                  <h3>ULED Mini-LED</h3>
                  <h1>ULED MINILED U7N</h1>
                  <div className="btn-container">
                    <Link className="btn-hisense-india" href="/uxn">Discover more</Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="product-listing-dots"></div>
        </div>
      </section>
      {/* slider end */}
    </>
  );
}