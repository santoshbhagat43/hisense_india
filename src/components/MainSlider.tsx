import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom CSS to force horizontal dots
const sliderDotStyles = `
  .main-visual.slider .slick-dots {
    display: flex !important;
  }
`;

const slides = [
  {
    logo: "/assets/images/Banners/GoTech-logo.png",
    desktop: "/assets/images/Banners/desktop.webp",
    desktopAlt: "Offical Partner",
    mobile: "/assets/images/Banners/mobile.webp",
    mobileAlt: "Offical Partner",
    content: null,
  },
  {
    logo: "/assets/images/Banners/GoTech-logo.png",
    desktop: "/assets/images/Banners/desktop_1.webp",
    desktopAlt: "No.2",
    mobile: "/assets/images/Banners/20250218-m.webp",
    mobileAlt: "No.2",
    content: null,
  },
  {
    logo: "/assets/images/Banners/GoTech-logo.png",
    desktop: "/assets/images/Banners/desktop.webp",
    desktopAlt: "No.1",
    mobile: "/assets/images/Banners/20250219-m.webp",
    mobileAlt: "No.1",
    content: null,
  },
  {
    logo: "/assets/images/Banners/GoTech-logo.png",
    desktop: "/assets/images/Banners/desktop_1.webp",
    desktopAlt: "ULED MINILED UX",
    mobile: "/assets/images/Banners/tv-20241206-m.webp",
    mobileAlt: "ULED MINILED UX",
    content: (
      <>
        <h2 style={{ color: "#fff" }}>ULED MINILED UX</h2>
        <p style={{ color: "#fff" }}>ULED X MiniLED</p>
        <a className="btn-hisense-india" href="#" target="_self" rel="">
          Explore
        </a>
      </>
    ),
  },
  {
    logo: "/assets/images/Banners/Hisense_logo.png",
    desktop: "/assets/images/Banners/desktop.webp",
    desktopAlt: "100L9G TRICHROMA LASER TV",
    mobile: "/assets/images/Banners/laser_tv-20241206-m.webp",
    mobileAlt: "100L9G TRICHROMA LASER TV",
    content: (
      <>
        <h2 style={{ color: "#fff" }}>Laser TV</h2>
        <p style={{ color: "#fff" }}>L9H 4K TRICHROMA LASER TV</p>
        <a className="btn-hisense-india" href="#" target="_blank" rel="">
          Explore
        </a>
      </>
    ),
  },
];

const sliderSettings = {
  dots: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 10000,
};

const MainSlider = () => {
  return (
    <>
      {/* Inject custom style for horizontal dots */}
      <style>{sliderDotStyles}</style>
      {/* <!-- Slider Start --> */}
      <div className="main-visual slider">
        <Slider {...sliderSettings}>
          {slides.map((slide, idx) => (
            <div className="slide-item" key={idx}>
              <div className={slide.content ? "content" : "content align-center"}>
                <img src={slide.logo} alt="Hisense" />
                {slide.content}
              </div>
              <img
                className="banner desktop-only"
                src={slide.desktop}
                alt={slide.desktopAlt}
              />
              <img
                className="banner mobile-only"
                src={slide.mobile}
                alt={slide.mobileAlt}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* <!-- slider end --> */}
    </>
  );
};

export default MainSlider;
