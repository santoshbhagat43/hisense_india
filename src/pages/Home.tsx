"use client";
import EmailSubscription from "@/components/EmailSubscription";
import MainSlider from "@/components/MainSlider";
import TVSlider from "@/components/TVSlider";

export default function Home() {

  const itemsAirConditionerData = [
    {
      title: "Air Conditioner",
      products: [
        {
          isNew: true,
          name: "Intellipro",
          moreHref: "#",
          viewAllHref: "#",
          moreLabel: "More",
          viewAllLabel: "View all",
        },
      ],
      banners: [
        {
          desktop: "/assets/images/Banners/discover_desktop.webp",
          mobile: "/assets/images/Banners/discover_mobile.webp",
          alt: "ULED MINILED UX",
        },
      ],
    },
    {
      title: "Refrigerator",
      products: [
        {
          isNew: true,
          name: "FrostFree 500L",
          moreHref: "#",
          viewAllHref: "#",
          moreLabel: "More",
          viewAllLabel: "View all",
        },
      ],
      banners: [
        {
          desktop: "/assets/images/Banners/fridge_desktop.webp",
          mobile: "/assets/images/Banners/fridge_mobile.webp",
          alt: "FrostFree 500L",
        },
      ],
    },
  ];

  const itemsMobileData = [
    {
      title: "MOBILE",
      products: [
        {
          isNew: true,
          name: "Hisense Infinity H60 5G",
          moreHref: "#",
          viewAllHref: "#",
          moreLabel: "More",
          viewAllLabel: "View all Smartphone",
        },
      ],
      banners: [
        {
          desktop: "/assets/images/Banners/discover_desktop.webp",
          mobile: "/assets/images/Banners/discover_mobile.webp",
          alt: "Hisense Infinity H60 5G",
        },
      ],
    },
  ];

  const itemsLaserTVData = [
    {
      title: "Laser TV",
      products: [
        {
          isNew: true,
          name: "88L5V Sonic Screen Laser TV",
          moreHref: "#",
          viewAllHref: "#",
          moreLabel: "More",
          viewAllLabel: "View all Laser TV",
        },
      ],
      banners: [
        {
          desktop: "/assets/images/Banners/discover_desktop.webp",
          mobile: "/assets/images/Banners/discover_mobile.webp",
          alt: "88L5V Sonic Screen Laser TV",
        },
      ],
    },
    {
      title: "Laser Cinema",
      products: [
        {
          isNew: true,
          name: "120L5 Ultra Short Throw Laser Cinema",
          moreHref: "#",
          viewAllHref: "#",
          moreLabel: "More",
          viewAllLabel: "View all Laser Cinema",
        },
      ],
      banners: [
        {
          desktop: "/assets/images/Banners/discover_desktop.webp",
          mobile: "/assets/images/Banners/discover_mobile.webp",
          alt: "120L5 Ultra Short Throw Laser Cinema",
        },
      ],
    },
  ];

  return (
    <div className="main-container">
     <MainSlider />
      {/* <!-- Discover our series start --> */}
      <h2 className="sub-title-india">
        <p>
          Discover our <strong>series</strong>
        </p>
      </h2>
      <TVSlider items={itemsAirConditionerData} />
      <TVSlider items={itemsLaserTVData} />
      <TVSlider items={itemsMobileData} />
      
      {/* <!-- Discover our series end --> */}

      {/* <!-- About hisense start --> */}
      <div className="about-hisense-wrapper">
        <h2 className="sub-title-india">
          About <strong>Hisense</strong>
        </h2>
        <div className="about-container about-container-india highlight">
          <div className="slide-item">
            <div className="content">
              <p>
                In <span>Love</span>
                <br />
                with Technology
              </p>
              <a className="btn-more" href="#" target="_self">
                Explore More
              </a>
            </div>
            <div className="banner">
              <img
                className="desktop-only"
                src="/assets/images/Banners/demo_desktop.webp"
                alt="About Hisense Overview Image"
              />
              <img
                className="mobile-only"
                src="/assets/images/Banners/demo_mobile.webp"
                alt="About Hisense Overview Image"
              />
            </div>
          </div>
        </div>

        <div className="about-container about-container-india next-slides">
          <div className="slide-item">
            <div className="content">
              <p>
                Active in
                <br />
                <span>Social Public Welfare</span>
              </p>
              <a className="btn-more" href="#" target="_self">
                See More
              </a>
            </div>
            <div className="banner">
              <img
                className="desktop-only"
                src="/assets/images/Banners/csr.webp"
                alt="Social Public Welfare Image"
              />
              <img
                className="mobile-only"
                src="/assets/images/Banners/csr.webp"
                alt="Social Public Welfare Image"
              />
            </div>
          </div>

          <div className="slide-item">
            <div className="content">
              <p>
                <span>Innovation</span>
                <br />
                Through Experience
              </p>
              <a className="btn-more" href="#" target="_self">
                See More
              </a>
            </div>
            <div className="banner">
              <img
                className="desktop-only"
                src="/assets/images/Banners/csr.webp"
                alt="Innovation Image"
              />
              <img
                className="mobile-only"
                src="/assets/images/Banners/csr.webp"
                alt="Innovation Image"
              />
            </div>
          </div>

          <div className="slide-item">
            <div className="content">
              <p>
                Everything We Do Make your <span>Life Simpler</span>
              </p>
              <a
                className="btn-more"
                href="/about-hisense/values/"
                target="_self"
              >
                See More
              </a>
            </div>
            <div className="banner">
              <img
                className="desktop-only"
                src="/assets/images/Banners/csr.webp"
                alt="Life Simpler Image"
              />
              <img
                className="mobile-only"
                src="/assets/images/Banners/csr.webp"
                alt="Life Simpler Image"
              />
            </div>
          </div>
        </div>

        <div className="about-btn-container">
          <a className="btn-hisense-india" href="overview.html" target="_self">
            View all about Hisense
          </a>
        </div>
      </div>
      {/* <!-- About hisense end --> */}
      <EmailSubscription />
    </div>
  );
}
