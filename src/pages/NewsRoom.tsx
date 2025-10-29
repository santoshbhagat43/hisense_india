"use client";

import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import "@/styles/about.css";
import { useAboutMenu } from "@/contexts/AboutMenuContext";
import { PageData, BannerData } from "@/types/general";
import Link from "next/link";
import APIService from "@/services/APIService";

export default function NewsRoom() {

    const [topic, setTopic] = useState<string>("All Topics");
    const [year, setYear] = useState<string>("All Years");

    useEffect( () => {
        async function fetchData() {
            const response = await APIService.pageData("newsroom");
            // console.log(pageData, "pageData");
            setPageData(response as unknown as PageData);
        }
        fetchData();
    }, []);
   const [pageData,setPageData]=useState<PageData | null>(null); 
  const { setShowAboutMenu, handleActiveSlug } = useAboutMenu();

  const banner: BannerData[] = pageData?.featured_slider ?? [];

  const filters = pageData?.filters || { categories: [], years: [] };
  console.log(filters, "pageDatafilters");

  // Slider refs for the two-box-silders-newsroom section
  const infoCarouselRef = useRef<Slider | null>(null);
  const imageCarouselRef = useRef<Slider | null>(null);

  useEffect(() => {
    setShowAboutMenu(true);
    handleActiveSlug("newsroom");

    return () => {
      setShowAboutMenu(false);
    };
  }, [setShowAboutMenu, handleActiveSlug]);

  // Slider settings for info carousel
  const infoCarouselSettings = {
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_: number, next: number) => {
      if (
        imageCarouselRef.current &&
        typeof imageCarouselRef.current.slickGoTo === "function"
      ) {
        imageCarouselRef.current.slickGoTo(next);
      }
    },
  };

  // Slider settings for image carousel
  const imageCarouselSettings = {
    slidesToShow: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_: number, next: number) => {
      if (
        infoCarouselRef.current &&
        typeof infoCarouselRef.current.slickGoTo === "function"
      ) {
        infoCarouselRef.current.slickGoTo(next);
      }
    },
  };



  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setTopic(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setYear(e.target.value);
  };

  if (!pageData) return null;

  return (
    <div className="main-container">
      <div className="about-csr newsroom">
        <h1 className="hisenseBold text-center">Newsroom</h1>
        <section id="two-box-silders-newsroom">
          <div className="container overview-container">
            <div className="left-container">
              <Slider
                ref={imageCarouselRef}
                {...imageCarouselSettings}
                className="two-box-image-carousel-newsroom w-100 h-100 desktop-only"
              >
                {banner.map((item) => (
                  <div
                    key={item.ID}
                    className="two-box-image slick-slide-item-newsroom"
                    style={{
                      position: "relative",
                      height: "400px",
                      width: "100%",
                    }}
                  >
                    {item.featured_image && item.featured_image && (
                      <Image
                        src={item.featured_image}
                        alt={item.post_title || item.banner_title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        priority
                      />
                    )}
                  </div>
                ))}
              </Slider>
            </div>
            <div className="right-container">
              <Slider
                ref={infoCarouselRef}
                {...infoCarouselSettings}
                className="two-box-info-carousel h-100"
              >
                {banner.map((item) => (
                  <div className="two-box-info-silders" key={item.ID}>
                    <div className="hisenseMedium">Featured</div>
                    <h4 className="hisenseBold">
                      {item.post_title || item.banner_title}
                    </h4>
                    <div className="hisenseMedium date">{item.post_date}</div>
                    <Link
                      className="hisenseMedium overlay-gray"
                      href={item.permalink || "#"}
                    >
                      See More
                    </Link>
                  </div>
                ))}
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
                  <select
                    name="topics"
                    id="topics"
                    value={topic}
                    onChange={handleTopicChange}
                  >
                    <option value="All Topics">All Topics</option>
                    {filters?.categories?.map((category: string) => (
                      <option value={category} key={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="select-wrapper">
                  
                  <select
                    name="year"
                    id="year"
                    value={year}
                    onChange={handleYearChange}
                  >
                    <option value="All Years">All Years</option>
                    {filters?.years?.map((year:string) => (
                      <option value={year} key={year}>{year}</option>
                    ))}
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
                      &quot;Own the Moment&quot;: Hisense debuts new campaign
                      celebrating its sponsorship of the FIFA Club World Cup
                      2025™
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
                      Hisense to Showcase Future of Smart Living with &quot;AI
                      Your Life&quot; at CES 2025
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
                      Hisense Kicks-off Big Savings in &quot;UNLOCK FOR BLACK
                      FRIDAY&quot; Campaign
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
