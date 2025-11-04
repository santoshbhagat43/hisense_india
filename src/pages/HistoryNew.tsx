"use client"
import React, { useRef, useEffect, useState, useCallback } from "react";
import { useAboutMenu } from "@/contexts/AboutMenuContext";
import "@/styles/about.css";
import { HistoryPageData } from "@/types/general";

type SlideDirection = "forward" | "backward";

export default function HistoryNew({ pageData }: { pageData: HistoryPageData }) {
  const { setShowAboutMenu, handleActiveSlug } = useAboutMenu();
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const classNames = ["main d-only", "main m-only", "nd d-only", "nd m-only", "rd d-only", "rd m-only"];

  // Carousel state - separate from detail view
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [canSwipe, setCanSwipe] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  // Detail view state (0 = carousel view, > 0 = detail view index)
  const [detailIndex, setDetailIndex] = useState(0);

  const historyItems = pageData.acf.history || [];
  const tabsCount = historyItems.length;

  useEffect(() => {
    setShowAboutMenu(true);
    handleActiveSlug("history");

    return () => {
      setShowAboutMenu(false);
    };
  }, [setShowAboutMenu, handleActiveSlug]);

  // Initialize transforms on mount
  useEffect(() => {
    if (!containerRef.current) return;
    
    const tabs = containerRef.current.querySelectorAll(".history-carousell-tab");
    tabs.forEach((tab, i) => {
      const element = tab as HTMLElement;
      element.style.transform = `translateY(${30 * i}%)`;
      
      if (i === 1) {
        const img = element.querySelector(".history-carousell-img") as HTMLElement;
        if (img) {
          img.style.transform = `translate(100px, ${30 * i}%) rotate(15deg)`;
        }
      }
    });
  }, []);

  // Slide function with animations
  const slide = useCallback((direction: SlideDirection, newIndex: number) => {
    if (!containerRef.current) return;
    
    const tabs = containerRef.current.querySelectorAll(".history-carousell-tab");
    
    tabs.forEach((tab, i) => {
      const element = tab as HTMLElement;
      const translateX = -100 * newIndex;
      const translateY = 30 * (i - newIndex);
      const rotate = 15 * (i - newIndex);

      // Apply transform
      element.style.transition = "transform 1.25s ease-out";
      element.style.transform = `translateX(${translateX}%) translateY(${translateY}%) rotate(${rotate}deg)`;

      // Special handling for index 1
      if (i === 1) {
        const img = element.querySelector(".history-carousell-img") as HTMLElement;
        if (img) {
          img.style.transition = "all 1.25s ease-out";
          img.style.transform = "rotate(0)";
        }
      }
    });

    // Update current class after animation
    setTimeout(() => {
      tabs.forEach((tab, i) => {
        tab.classList.toggle("current", i === newIndex);
      });
      
      // Update bullet current class
      const bullets = containerRef.current?.querySelectorAll(".history-carousell-bullet");
      bullets?.forEach((bullet, i) => {
        bullet.classList.toggle("current", i === newIndex);
      });
    }, 1250);
  }, []);

  // Handle bullet click
  const handleBulletClick = useCallback((index: number) => {
    if (index === carouselIndex || !canSwipe) return;
    
    const direction: SlideDirection = carouselIndex > index ? "backward" : "forward";
    setCarouselIndex(index);
    slide(direction, index);
  }, [carouselIndex, canSwipe, slide]);

  // Handle next arrow
  const handleNextArrow = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (carouselIndex < tabsCount - 1 && canSwipe) {
      const newIndex = carouselIndex + 1;
      setCarouselIndex(newIndex);
      slide("forward", newIndex);
    }
  }, [carouselIndex, tabsCount, canSwipe, slide]);

  // Handle previous arrow
  const handlePrevArrow = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (carouselIndex > 0 && canSwipe) {
      const newIndex = carouselIndex - 1;
      setCarouselIndex(newIndex);
      slide("backward", newIndex);
    }
  }, [carouselIndex, canSwipe, slide]);

  // Swipe support with touch events
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!canSwipe) return;
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, [canSwipe]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!canSwipe || !touchStartRef.current) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Only handle horizontal swipes
    if (absDeltaX > absDeltaY && absDeltaX > 50) {
      if (deltaX > 0 && carouselIndex > 0) {
        // Swipe right - go backward
        const newIndex = carouselIndex - 1;
        setCarouselIndex(newIndex);
        slide("backward", newIndex);
      } else if (deltaX < 0 && carouselIndex < tabsCount - 1) {
        // Swipe left - go forward
        const newIndex = carouselIndex + 1;
        setCarouselIndex(newIndex);
        slide("forward", newIndex);
      }
    }
    
    touchStartRef.current = null;
  }, [canSwipe, carouselIndex, tabsCount, slide]);

  // Show detail view
  const showDetail = useCallback(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setDetailIndex(carouselIndex + 1);
        setCanSwipe(false);
      }, 500);
    } else {
      setDetailIndex(carouselIndex + 1);
      setCanSwipe(false);
    }
  }, [carouselIndex]);

  // Handle image click to show detail
  const handleImageClick = useCallback(() => {
    showDetail();
  }, [showDetail]);

  // Handle back to timeline
  const handleBackToTimeline = useCallback(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setDetailIndex(0);
      setCanSwipe(true);
    }, 500);
  }, []);

  // Handle next timeline item
  const handleNextTimeline = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (carouselIndex < tabsCount - 1) {
      const newIndex = carouselIndex + 1;
      setCarouselIndex(newIndex);
      setDetailIndex(newIndex);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [carouselIndex, tabsCount]);

  const isDetailView = detailIndex > 0;

  return (
    <div 
      className={`main-container ${isDetailView ? "showing-detail" : ""}`}
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      data-no={tabsCount}
    >
      <h1 className={`visuallyhidden ${isDetailView ? "fadeout" : ""}`}>History of Hisense</h1>
      <section className="history-carousell">
        <div className="history-carousell-inner">
          <div className="history-carousell-mover" ref={containerRef}>
            {historyItems.map((history, index) => (
              <div 
                className={`history-carousell-tab ${index === carouselIndex ? "current" : ""} ${isDetailView && index === carouselIndex ? "clicked" : ""} ${isHovering && index !== carouselIndex ? "hide" : ""} ${isHovering && index === carouselIndex ? "hover" : ""}`}
                key={index}
              >
                <div 
                  className={`history-carousell-img ${isDetailView ? "fadeout" : ""}`}
                  data-img_length="3"
                  onClick={handleImageClick}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {history.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      className={classNames[imgIndex]}
                    src={image.url}
                      alt={image.title || image.caption || ""}
                  />
                ))}
              </div>
              <div className="history-years-container">
                <div className="year-type fw-medium">{history.title}</div>
                <div className="year-range fw-bold">{history.year_range}</div>
                <div className="year-title fw-bold">
                  {history.title}
                </div>
                  <div className={`year-desc fw-light ${isDetailView ? "fadeout" : ""}`}>
                  <p dangerouslySetInnerHTML={{ __html: history.description ?? "" }} />
                </div>
              </div>
                {index < historyItems.length - 1 && (
                  <div 
                    className={`history-carousell-arrow next ${detailIndex > 0 ? "fadeout" : ""}`}
                    onClick={handleNextArrow}
                  >
                <img src="/assets/images/next-arrow.png" alt="next" />
                <label>{history.year_range}</label>
              </div>
                )}
                {index > 0 && (
                  <div 
                    className={`history-carousell-arrow previous ${detailIndex > 0 ? "fadeout" : ""}`}
                    onClick={handlePrevArrow}
                  >
                    <img src="/assets/images/previous-arrow.png" alt="previous" />
                    <label>{historyItems[index - 1].year_range}</label>
                  </div>
                )}
            </div>
          ))}
          </div>
        </div>
        
        {/* Bullet Controls */}
        <div className="history-carousell-control">
          {historyItems.map((_, index) => (
            <div
              key={index}
              className={`history-carousell-bullet ${index === carouselIndex ? "current" : ""}`}
              onClick={() => handleBulletClick(index)}
            />
          ))}
        </div>
      </section>

      {/* Detail View */}
      {historyItems.map((history, detailIdx) => {
        const isActiveDetail = detailIndex === detailIdx + 1;
        if (!isActiveDetail) return null;

        return (
          <div 
            key={`detail-${detailIdx}`}
            className={`history-page-detail ${isActiveDetail ? "show fadein" : ""}`}
          >
        <div
          className="history-topBanner-container d-only"
              style={{ backgroundImage: `url(${history.images[0]?.url || ""})` }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
                  {history.subtitle}
            </div>
          </div>
        </div>
        <div
          className="history-topBanner-container m-only"
              style={{ backgroundImage: "url(/assets/images/Banners/header_m.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
                  {history.subtitle}
            </div>
          </div>
        </div>
        <div className="history-page-container">
          <div className="histry-intro mobile_only">
                {history.subtitle}
          </div>
          <div className="histry-intro">
                <p dangerouslySetInnerHTML={{ __html: history.description ?? "" }} />
          </div>
        </div>
        <div className="history-timeline">
          <div className="history-page-container with-timeline">
                {history.images.map((timeline, timelineIndex) => (
                  <div className="timeline-container" key={timelineIndex}>
              <div className="col">
                <div className="timeline-year">{timeline.alt}</div>
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
                          alt={timeline.caption || ""}
                  />
                  <img
                    className="m-only"
                    src={timeline.url}
                          alt={timeline.caption || ""}
                  />
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="next-history-timeline-item">
          <div className="img-gallery" data-img_length="3">
                {history.images.map((image, imgIndex) => (
              <img
                    key={imgIndex}
                src={image.url}
                    alt={image.caption || image.title || ""}
              />
            ))}
          </div>
          <div className="history-years-container">
                <div className="year-type fw-medium">{history.title}</div>
                <div className="year-range fw-bold">{history.year_range}</div>
            <div className="year-title fw-bold">
                  {history.title}
            </div>
                {detailIdx < historyItems.length - 1 && (
                  <a className="btn-discover-more" onClick={handleNextTimeline}>
                    See More 
                  </a>
                )}
          </div>
        </div>
        <div className="b2timeline">
              <a onClick={handleBackToTimeline}>
                <img src="/assets/images/b2timeline.svg" alt="Back to timeline" />
            Back to timeline
          </a>
        </div>
      </div>
        );
      })}
    </div>
  );
}
