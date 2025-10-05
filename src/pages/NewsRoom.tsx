"use client";

import { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@/styles/about.css";
import { useAboutMenu } from "@/contexts/AboutMenuContext";

export default function OverView() {
  const { setShowAboutMenu } = useAboutMenu();
  
  // Slider refs for the two-box-silders-newsroom section
  const infoCarouselRef = useRef<Slider | null>(null);
  const imageCarouselRef = useRef<Slider | null>(null);

  useEffect(() => {
    setShowAboutMenu(true);

    return () => {
      setShowAboutMenu(false);
    };
  }, [setShowAboutMenu]);


  // Slider settings for info carousel
  const infoCarouselSettings = {
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // Slider settings for image carousel
  const imageCarouselSettings = {
    slidesToShow: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="main-container">
      <div className="about-csr newsroom">
        <h1 className="hisenseBold text-center">Newsroom</h1>
        <section id="two-box-silders-newsroom">
          <div className="container overview-container">
            <div className="left-container">
              <Slider ref={imageCarouselRef} {...imageCarouselSettings} className="two-box-image-carousel-newsroom w-100 h-100 desktop-only">
                <div
                  className="two-box-image slick-slide-item-newsroom"
                  style={{
                    background:
                      "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    width: "100%",
                  }}
                  role="img"
                  aria-label=""
                ></div>
                <div
                  className="two-box-image slick-slide-item-newsroom"
                  style={{
                    background:
                      "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    width: "100%",
                  }}
                  role="img"
                  aria-label=""
                ></div>
                <div
                  className="two-box-image slick-slide-item-newsroom"
                  style={{
                    background:
                      "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    width: "100%",
                  }}
                  role="img"
                  aria-label=""
                ></div>
                <div
                  className="two-box-image slick-slide-item-newsroom"
                  style={{
                    background:
                      "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    width: "100%",
                  }}
                  role="img"
                  aria-label=""
                ></div>
                <div
                  className="two-box-image slick-slide-item-newsroom"
                  style={{
                    background:
                      "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    width: "100%",
                  }}
                  role="img"
                  aria-label=""
                ></div>
              </Slider>
              <Slider ref={imageCarouselRef} {...imageCarouselSettings} className="two-box-image-carousel-newsroom w-100 h-100 mobile-only">
                <div
                  className="two-box-image slick-slide-item-newsroom"
                  style={{
                    background:
                      "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    width: "100%",
                  }}
                  role="img"
                  aria-label=""
                ></div>
                <div
                  className="two-box-image slick-slide-item-newsroom"
                  style={{
                    background:
                      "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    width: "100%",
                  }}
                  role="img"
                  aria-label=""
                ></div>
                <div
                  className="two-box-image slick-slide-item-newsroom"
                  style={{
                    background:
                      "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    width: "100%",
                  }}
                  role="img"
                  aria-label=""
                ></div>
                <div
                  className="two-box-image slick-slide-item-newsroom"
                  style={{
                    background:
                      "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    width: "100%",
                  }}
                  role="img"
                  aria-label=""
                ></div>
                <div
                  className="two-box-image slick-slide-item-newsroom"
                  style={{
                    background:
                      "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    width: "100%",
                  }}
                  role="img"
                  aria-label=""
                ></div>
              </Slider>
            </div>
            <div className="right-container">
              <Slider ref={infoCarouselRef} {...infoCarouselSettings} className="two-box-info-carousel h-100">
                <div className="two-box-info-silders">
                  <div className="hisenseMedium">Featured</div>
                  <h4 className="hisenseBold">
                    Hisense named first Official Partner of the FIFA Club World
                    Cup 2025™
                  </h4>
                  <div className="hisenseMedium date">30 October 2024</div>
                  <a className="hisenseMedium overlay-gray" href="#">
                    See More
                  </a>
                </div>
                <div className="two-box-info-silders">
                  <div className="hisenseMedium">Featured</div>
                  <h4 className="hisenseBold">
                    Hisense TV Ranked No. 2 Globally in Q1 2024
                  </h4>
                  <div className="hisenseMedium date">14 June 2024</div>
                  <a className="hisenseMedium overlay-gray" href="#">
                    See More
                  </a>
                </div>
                <div className="two-box-info-silders">
                  <div className="hisenseMedium">Featured</div>
                  <h4 className="hisenseBold">
                    HISENSE EXHIBITS NEW ULED X TV, SMART REFRIGERATOR AND
                    DISHWASHER AT CES 2024
                  </h4>
                  <div className="hisenseMedium date">09 January 2024</div>
                  <a className="hisenseMedium overlay-gray" href="#">
                    See More
                  </a>
                </div>
                <div className="two-box-info-silders">
                  <div className="hisenseMedium">Featured</div>
                  <h4 className="hisenseBold">
                    HISENSE PUSHES THE BOUNDARIES OF DISPLAY TECHNOLOGY AND
                    COMMITMENT TO SCENARIO-BASED LIVING AT CES 2024
                  </h4>
                  <div className="hisenseMedium date">08 January 2024</div>
                  <a className="hisenseMedium overlay-gray" href="#">
                    See More
                  </a>
                </div>
                <div className="two-box-info-silders">
                  <div className="hisenseMedium">Featured</div>
                  <h4 className="hisenseBold">
                    Third time&apos;s a charm: Hisense extends strategic partnership
                    with UEFA to sponsor EURO 2024
                  </h4>
                  <div className="hisenseMedium date">01 September 2023</div>
                  <a className="hisenseMedium overlay-gray" href="#">
                    See More
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <section id="latest-news">
          <div className="container">
            <div className="news-info">
              <h4>Latest News</h4>
              <div className="latest-news-filter">
                <div className="select-wrapper">
                  <select name="topics" id="topics">
                    <option value="All Topics">All Topics</option>
                    <option value="Featured">Featured</option>
                    <option value="Press Release">Press Release</option>
                    <option value="Awards">Awards</option>
                  </select>
                </div>

                <div className="select-wrapper">
                  <select name="year" id="year">
                    <option value="All Years">All Years</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="list-no-result">No Result</div>
            <div
              className="main-visual-about-visual slider-newsroom"
              id="listnews-newsroom"
            >
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="12 May 2019"
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
                      &quot;Own the Moment&quot;: Hisense debuts new campaign celebrating
                      its sponsorship of the FIFA Club World Cup 2025™
                    </h4>
                    <div className="news-date">12 May 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="29 April 2025"
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
                      Hisense Unveils Ht Saturn Home Theatre Sound System To
                      Redefine Immersive Audio
                    </h4>
                    <div className="news-date">29 April 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="22 April 2025"
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
                      Hisense Launches New ULED MiniLED U8 Series TV, Elevating
                      Home Entertainment to Cinematic Heights
                    </h4>
                    <div className="news-date">22 April 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="15 April 2025"
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
                      Hisense Showcases AI-Powered Smart Home Solutions at the
                      137th Canton Fair
                    </h4>
                    <div className="news-date">15 April 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="28 March 2025"
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
                      Hisense Launches New ULED MiniLED U7 Series TV, Taking the
                      Gaming and Sports Experience to New Heights
                    </h4>
                    <div className="news-date">28 March 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="19 February 2025"
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
                      Hisense Laser TV Maintains Global No.1 Position for Six
                      Years
                    </h4>
                    <div className="news-date">19 February 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="18 February 2025"
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
                      Hisense TV Retains Global No.2 Ranking in 2024 and Leads
                      the 100-Inch TV Market Worldwide
                    </h4>
                    <div className="news-date">18 February 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="26 January 2025"
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
                      Hisense TV Shipment Share at 14.06% in 2024, Maintains Top
                      Two Global Position for Three Consecutive Years
                    </h4>
                    <div className="news-date">26 January 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="08 January 2025"
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
                      Hisense ConnectLife Brings an Intelligent Experience to
                      the Future Smart Home with AI Innovation at CES 2025
                    </h4>
                    <div className="news-date">08 January 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="08 January 2025"
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
                      Hisense Unveils Groundbreaking TV Innovation at CES 2025
                      Delivering Audio-Visual Excellence in Collaboration with
                      Pantone and Devialet
                    </h4>
                    <div className="news-date">08 January 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="07 January 2025"
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
                      Hisense and FIFA Offer First Look for Fans at FIFA Club
                      World Cup 2025™ Trophy at CES 2025
                    </h4>
                    <div className="news-date">07 January 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="07 January 2025"
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
                      Hisense Transforms the Future of Home Entertainment and
                      Smart Living with AI-powered Innovation at CES 2025
                    </h4>
                    <div className="news-date">07 January 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="06 January 2025"
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
                    <h4>Hisense Unveils Vision of an AI Future at CES 2025</h4>
                    <div className="news-date">06 January 2025</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="18 December 2024"
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
                      Hisense to Showcase Future of Smart Living with &quot;AI Your
                      Life&quot; at CES 2025
                    </h4>
                    <div className="news-date">18 December 2024</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
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
                      Hisense Scores Record-Breaking Black Friday Sales Abroad
                      with Surge in Large Screen TV and Smart Home Innovation
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
                      Hisense PX3-PRO Crowned Top Performer in Projector
                      Showdown
                    </h4>
                    <div className="news-date">03 December 2024</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="02 December 2024"
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
                      Hisense Ranks Global No.2 in Q3 2024 High-End TV Market
                    </h4>
                    <div className="news-date">02 December 2024</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic="Press Release"
                data-year="15 November 2024"
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
                      Hisense Kicks-off Big Savings in &quot;UNLOCK FOR BLACK FRIDAY&quot;
                      Campaign
                    </h4>
                    <div className="news-date">15 November 2024</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
              <div
                className="slide-item-newsroom"
                data-is-featured="true"
                data-topic="Press Release"
                data-year="30 October 2024"
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
                      Hisense named first Official Partner of the FIFA Club
                      World Cup 2025™
                    </h4>
                    <div className="news-date">30 October 2024</div>
                  </div>
                  <a className="hisenseMedium nostyle" href="#"></a>
                </div>
              </div>
            </div>
            <ul className="pagination-sm-newsroom" id="pagination"></ul>
          </div>
        </section>
      </div>
    </div>
  );
}
