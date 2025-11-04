"use client";

import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import "@/styles/about.css";
import { useAboutMenu } from "@/contexts/AboutMenuContext";
import { NewsRoomPageData, BannerData } from "@/types/general";
import Link from "next/link";
import APIService from "@/services/APIService";

export default function NewsRoom() {

    const [topic, setTopic] = useState<string>("All Topics");
    const [year, setYear] = useState<string>("All Years");

    useEffect( () => {
        async function fetchData() {
            const response = await APIService.pageData("newsroom");
            // console.log(pageData, "pageData");
            setPageData(response as unknown as NewsRoomPageData);
        }
        fetchData();
    }, []);
   const [pageData,setPageData]=useState<NewsRoomPageData | null>(null); 
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
                        alt={item.post_title || item.banner_title || ""}
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
            {/* <div className="list-no-result">No Result</div> */}
            <div
              className="main-visual-about-visual slider-newsroom"
              id="listnews-newsroom"
            >
              {pageData.latest_news.map((item) => (
              <div 
                key={item.ID}
                className="slide-item-newsroom"
                data-is-featured="false"
                data-topic={item.post_title || item.banner_title || ""}
                data-year={item.post_date ? new Date(item.post_date).getFullYear() : ""}
              >
                <div className="content">
                  <div className="bg-overflow-h">
                    <div
                      className="text-box-with-image bg-holder desktop-only"
                      style={{
                        background:
                          item.featured_image ? `url(${item.featured_image}) no-repeat` : "url(/assets/images/Banners/newsroom.jpg) no-repeat",
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
                          item.featured_image ? `url(${item.featured_image}) no-repeat` : "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="img-overlay"></div>
                    </div>
                  </div>
                  <div className="text-box trackin">
                    <div className="news-topics">{item.post_title || item.banner_title || ""}</div>
                    <h4>
                      {item.post_title || item.banner_title || ""}
                    </h4>
                    <div className="news-date">{item.post_date ? new Date(item.post_date).toLocaleDateString() : ""}</div>
                  </div>
                  <a className="hisenseMedium nostyle" href={item.permalink || "#"}></a>
                </div>
              </div>
              ))}
              
            </div>
            <ul className="pagination-sm-newsroom" id="pagination"></ul>
          </div>
        </section>
      </div>
    </div>
  );
}
