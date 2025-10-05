import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

// Define interfaces for type safety
export interface Product {
  isNew?: boolean;
  name: string;
  moreHref: string;
  viewAllHref: string;
  moreLabel: string;
  viewAllLabel: string;
}

export interface Banner {
  desktop: string;
  mobile: string;
  alt: string;
}

export interface SliderItem {
  title: string;
  products: Product[];
  banners: Banner[];
}

export interface TVSliderProps {
  items?: SliderItem[];
  autoSlide?: boolean;
  slideInterval?: number;
  showNavigation?: boolean;
  className?: string;
  onSlideChange?: (index: number) => void;
}

// Default data for backward compatibility
const defaultItemsData: SliderItem[] = [
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

const TVSlider: React.FC<TVSliderProps> = ({
  items = defaultItemsData,
  autoSlide = true,
  slideInterval = 3000,
  showNavigation = true,
  className = "",
  onSlideChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLLIElement>(null);

  // Removed unused showSlide function

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };

  useEffect(() => {
    if (!autoSlide || items.length <= 1) return;

    // Start auto slide
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        nextSlide();
      }, slideInterval);
    };

    startAutoSlide();

    const slider = sliderRef.current;
    if (slider) {
      const handleMouseEnter = () => {
        if (autoSlideRef.current) clearInterval(autoSlideRef.current);
      };
      const handleMouseLeave = () => {
        if (autoSlide) startAutoSlide();
      };
      slider.addEventListener("mouseenter", handleMouseEnter);
      slider.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        slider.removeEventListener("mouseenter", handleMouseEnter);
        slider.removeEventListener("mouseleave", handleMouseLeave);
        if (autoSlideRef.current) clearInterval(autoSlideRef.current);
      };
    }

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
    // eslint-disable-next-line
  }, [autoSlide, slideInterval, items.length]);

  useEffect(() => {
    // Reset timer on manual navigation
    if (autoSlide && autoSlideRef.current && items.length > 1) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(() => {
        nextSlide();
      }, slideInterval);
    }
    // eslint-disable-next-line
  }, [currentIndex, autoSlide, slideInterval, items.length]);

  // Don't render if no items
  if (!items || items.length === 0) {
    return <div className="tv-slider-empty">No items to display</div>;
  }

  return (
    <ul className={`series-container-india ${className}`}>
      <li className="col-full" ref={sliderRef}>
        <div className="top">
          <h3>{items[currentIndex]?.title}</h3>
          <nav></nav>
        </div>
        <div className="content">
          {items[currentIndex]?.products?.map((product, idx) => (
            <div className="item" key={idx}>
              {product.isNew && <div className="new">New</div>}
              <p>{product.name}</p>
              <div className="btn-container">
                <a className="btn-more" href={product.moreHref} target="_self" rel="">
                  {product.moreLabel}
                </a>
                <a href={product.viewAllHref} target="_self" rel="">
                  {product.viewAllLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="banner">
          {items[currentIndex]?.banners?.map((banner, idx) => (
            <div className="img active" key={idx}>
              <Image
                className="desktop-only"
                src={banner.desktop}
                alt={banner.alt}
                width={800}
                height={400}
              />
              <Image
                className="mobile-only"
                src={banner.mobile}
                alt={banner.alt}
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
        {showNavigation && items.length > 1 && (
          <>
            <button
              className="btn-arrow left"
              aria-label="Previous"
              onClick={prevSlide}
            >
              &#8592;
            </button>
            <button
              className="btn-arrow right"
              aria-label="Next"
              onClick={nextSlide}
            >
              &#8594;
            </button>
          </>
        )}
      </li>
    </ul>
  );
};

// --- AnchorSlideSlider React implementation (from raw/assets/js/index.js) ---

interface AnchorSlideProduct {
  isNew?: boolean;
  name: string;
  moreHref: string;
  viewAllHref: string;
  moreLabel: string;
  viewAllLabel: string;
}

interface AnchorSlideBanner {
  desktop: string;
  mobile: string;
  alt: string;
}

interface AnchorSlideItem {
  title: string;
  products: AnchorSlideProduct[];
  banners: AnchorSlideBanner[];
}

interface AnchorSlideSliderProps {
  items: AnchorSlideItem[];
  autoSwipe?: boolean;
  swipeInterval?: number;
  className?: string;
}

export const AnchorSlideSlider: React.FC<AnchorSlideSliderProps> = ({
  items,
  autoSwipe = true,
  swipeInterval = 5000,
  className = "",
}) => {
  const [curIndex, setCurIndex] = useState(0);
  const autoSwipeRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLLIElement>(null);

  // Animation state for banners and items
  const [bannerPositions, setBannerPositions] = useState<number[]>(
    items.map((_, i) => (i === 0 ? 0 : 100))
  );
  const [itemHidden, setItemHidden] = useState<boolean[]>(
    items.map((_, i) => i !== 0)
  );
  const [itemOpacity, setItemOpacity] = useState<number[]>(
    items.map((_, i) => (i === 0 ? 1 : 0))
  );
  const [itemTranslateX, setItemTranslateX] = useState<number[]>(
    items.map((_, i) => 0)
  );

  // Helper to animate to a new index
  const swipeTo = (index: number) => {
    if (index === curIndex) return;
    const direction =
      index > curIndex || (curIndex === items.length - 1 && index === 0)
        ? 100
        : -100;
    const reverse = -direction;

    // Animate banners
    setBannerPositions((prev) => {
      const next = [...prev];
      next[index] = direction;
      setTimeout(() => {
        setBannerPositions((prev2) => {
          const next2 = [...prev2];
          next2[index] = 0;
          return next2;
        });
      }, 10); // trigger transition
      next[curIndex] = 0;
      setTimeout(() => {
        setBannerPositions((prev2) => {
          const next2 = [...prev2];
          next2[curIndex] = reverse;
          return next2;
        });
      }, 10);
      return next;
    });

    // Animate items
    setItemOpacity((prev) => {
      const next = [...prev];
      next[curIndex] = 0;
      return next;
    });
    setItemTranslateX((prev) => {
      const next = [...prev];
      next[curIndex] = 100;
      return next;
    });
    setTimeout(() => {
      setItemHidden((prev) => {
        const next = [...prev];
        next[curIndex] = true;
        next[index] = false;
        return next;
      });
      setItemOpacity((prev) => {
        const next = [...prev];
        next[index] = 0;
        return next;
      });
      setItemTranslateX((prev) => {
        const next = [...prev];
        next[index] = 100;
        return next;
      });
      setTimeout(() => {
        setItemOpacity((prev) => {
          const next = [...prev];
          next[index] = 1;
          return next;
        });
        setItemTranslateX((prev) => {
          const next = [...prev];
          next[index] = 0;
          return next;
        });
      }, 10);
    }, 300);

    setCurIndex(index);
  };

  // Navigation click
  const handleNavClick = (i: number) => {
    if (i !== curIndex) swipeTo(i);
  };

  // Arrow click
  const handlePrev = () => {
    swipeTo(curIndex - 1 < 0 ? items.length - 1 : curIndex - 1);
  };
  const handleNext = () => {
    swipeTo((curIndex + 1) % items.length);
  };

  // Auto swipe
  useEffect(() => {
    if (!autoSwipe) return;
    autoSwipeRef.current = setInterval(() => {
      swipeTo((curIndex + 1) % items.length);
    }, swipeInterval);
    return () => {
      if (autoSwipeRef.current) clearInterval(autoSwipeRef.current);
    };
    // eslint-disable-next-line
  }, [curIndex, autoSwipe, swipeInterval, items.length]);

  // Pause on hover
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseEnter = () => {
      if (autoSwipeRef.current) clearInterval(autoSwipeRef.current);
    };
    const handleMouseLeave = () => {
      if (autoSwipe) {
        autoSwipeRef.current = setInterval(() => {
          swipeTo((curIndex + 1) % items.length);
        }, swipeInterval);
      }
    };
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (autoSwipeRef.current) clearInterval(autoSwipeRef.current);
    };
    // eslint-disable-next-line
  }, [autoSwipe, swipeInterval, curIndex, items.length]);

  // Initialize nav/item/banner state on mount or items change
  useEffect(() => {
    setBannerPositions(items.map((_, i) => (i === 0 ? 0 : 100)));
    setItemHidden(items.map((_, i) => i !== 0));
    setItemOpacity(items.map((_, i) => (i === 0 ? 1 : 0)));
    setItemTranslateX(items.map((_, i) => 0));
    setCurIndex(0);
    // eslint-disable-next-line
  }, [items]);

  return (
    <ul className={`series-container-india anchor_slide ${className}`}>
      <li className="col-full" ref={containerRef}>
        <div className="top">
          <h3>{items[curIndex]?.title}</h3>
          <nav>
            {items.map((item, i) => (
              <a
                key={i}
                href="javascript:void(0);"
                className={i === curIndex ? "active" : ""}
                onClick={() => handleNavClick(i)}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
        <div className="content">
          {items.map((item, i) => (
            <div
              className={`item${itemHidden[i] ? " hidden" : ""}`}
              key={i}
              style={{
                opacity: itemOpacity[i],
                transform: `translateX(${itemTranslateX[i]}px)`,
                transition: "opacity 0.3s, transform 0.3s",
                position: i === curIndex ? "relative" : "absolute",
                zIndex: i === curIndex ? 2 : 1,
              }}
            >
              {item.products[0]?.isNew && <div className="new">New</div>}
              <p>{item.products[0]?.name}</p>
              <div className="btn-container">
                <a
                  className="btn-more"
                  href={item.products[0]?.moreHref}
                  target="_self"
                  rel=""
                >
                  {item.products[0]?.moreLabel}
                </a>
                <a
                  href={item.products[0]?.viewAllHref}
                  target="_self"
                  rel=""
                >
                  {item.products[0]?.viewAllLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="banner" style={{ position: "relative" }}>
          {items.map((item, i) => (
            <div
              className="img"
              key={i}
              style={{
                left: `${bannerPositions[i]}%`,
                position: "absolute",
                top: 0,
                transition: "left 0.6s cubic-bezier(0.455,0.03,0.515,0.955)",
                zIndex: i === curIndex ? 2 : 1,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                className="desktop-only"
                src={item.banners[0]?.desktop}
                alt={item.banners[0]?.alt}
                width={800}
                height={400}
              />
              <Image
                className="mobile-only"
                src={item.banners[0]?.mobile}
                alt={item.banners[0]?.alt}
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
        <button
          className="btn-arrow left"
          aria-label="Previous"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <button
          className="btn-arrow right"
          aria-label="Next"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </li>
    </ul>
  );
};

export default TVSlider;