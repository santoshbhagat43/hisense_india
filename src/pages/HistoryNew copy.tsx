"use client"
import React, { useRef, useEffect, useState, MouseEvent } from "react";
import { useAboutMenu   } from "@/contexts/AboutMenuContext";
type SlideDirection = "forward" | "backward";

interface HistoryTab {
  yearType: string;
  yearRange: string;
  yearTitle: string;
  yearDesc: React.ReactNode;
  images: { src: string; alt: string; className: string }[];
}
import "@/styles/about.css";
import { HistoryPageData } from "@/types/general";

export default function HistoryNew({ pageData }: { pageData: HistoryPageData }) {
  const { setShowAboutMenu,handleActiveSlug } = useAboutMenu();

  useEffect(() => {
    setShowAboutMenu(true);
    handleActiveSlug("history");

    return () => {
      setShowAboutMenu(false);
    };
  }, [setShowAboutMenu,handleActiveSlug]);

  
  const classNames = ["main d-only", "main m-only", "nd d-only", "nd m-only", "rd d-only", "rd m-only"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    console.log(index, "index");
    setCurrentIndex(index);
    if (index === 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={`main-container ${currentIndex === 0 ? "" : "showing-detail"}`}>
      <h1 className={`visuallyhidden ${currentIndex === 0 ? "" : "fadeout"}`}>History of Hisense</h1>
      <section className="history-carousell">
        <div className={`history-carousell-inner `}>
          <div className="history-carousell-mover">
          {pageData.acf.history.map((history, index) => (
            <div className={`history-carousell-tab ${index === 0 ? "current" : ""} ${currentIndex === 0 ? "" : "clicked"}`} key={index}>
              <div className={`history-carousell-img ${currentIndex === 0 ? "" : "fadeout"}`} data-img_length="3" onClick={() => handleClick(index+1)}>
              {history.images.map((image, index) => (
                  <img
                    key={index}
                    className={classNames[index]}
                    src={image.url}
                    alt={image.title}
                  />
                ))}
              </div>
              <div className="history-years-container">
                <div className="year-type fw-medium">{history.title}</div>
                <div className="year-range fw-bold">{history.year_range}</div>
                <div className="year-title fw-bold">
                  {history.title}
                </div>
                <div className={`year-desc fw-light ${currentIndex === 0 ? "" : "fadeout"}`}>
                  <p dangerouslySetInnerHTML={{ __html: history.description ?? "" }} />
                </div>
              </div>
              <div className="history-carousell-arrow next">
                <img src="/assets/images/next-arrow.png" alt="next" />
                <label>{history.year_range}</label>
              </div>
            </div>
          ))}
            
          </div>
        </div>
      </section>
      <div className={`history-page-detail ${currentIndex === 0 ? "" : "show fadein"}`}>
        <div
          className="history-topBanner-container d-only"
          style={{ backgroundImage: `url(${pageData.acf.history[currentIndex].images[0].url})` }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              {pageData.acf.history[currentIndex].subtitle}
            </div>
          </div>
        </div>
        <div
          className="history-topBanner-container m-only"
          style={{ backgroundImage: "url(assets/images/Banners/header_m.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              {pageData.acf.history[currentIndex].subtitle}
            </div>
          </div>
        </div>
        <div className="history-page-container">
          <div className="histry-intro mobile_only">
            {pageData.acf.history[currentIndex].subtitle}
          </div>
          <div className="histry-intro">
            <p dangerouslySetInnerHTML={{ __html: pageData.acf.history[currentIndex].description ?? "" }} />
          </div>
        </div>
        <div className="history-timeline">
          <div className="history-page-container with-timeline">
            {pageData.acf.history[currentIndex].images.map((timeline, index) => (
            <div className="timeline-container" key={index}>
              <div className="col">
                <div className="timeline-year">{timeline.date?.split?.("-")?.[0] ?? ""}</div>
                <div className="timeline-title">{timeline.caption}</div>
                <div className="timeline-desc">
                  <p dangerouslySetInnerHTML={{ __html: timeline.description ?? "" }} />
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src={timeline.url}
                    alt={timeline.caption}
                  />
                  <img
                    className="m-only"
                    src={timeline.url}
                    alt={timeline.caption}
                  />
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="next-history-timeline-item">
          <div className="img-gallery" data-img_length="3">
            {pageData.acf.history[currentIndex].images.map((image, index) => (
              <img
                key={index}
                // className={classNames[index]}
                src={image.url}
                alt={image.caption}
              />
            ))}
            
          </div>
          <div className="history-years-container">
            <div className="year-type fw-medium">{pageData.acf.history[currentIndex].title}</div>
            <div className="year-range fw-bold">{pageData.acf.history[currentIndex].year_range}</div>
            <div className="year-title fw-bold">
              {pageData.acf.history[currentIndex].title}
            </div>
            <a className="btn-discover-more" onClick={() => handleClick(0)}>See More</a>
          </div>
        </div>
        <div className="b2timeline">
          <a onClick={() => handleClick(0)}>
            <img src="/assets/images/b2timeline.svg" alt="" />
            Back to timeline
          </a>
        </div>
      </div>
    </div>
  );
}
