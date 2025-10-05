// ====================== Main JS for Hisense Website ======================

document.addEventListener("DOMContentLoaded", () => {
  // ====================== Main Visual Slider (Slick) ======================
  const initMainVisualSlider = () => {
    const mainVisual = document.querySelector(".main-visual.slider");
    if (mainVisual && typeof $ === "function" && $(mainVisual).slick) {
      $(mainVisual).slick({
        dots: true,
        arrows: true,        // enable arrows
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,
      });
    }
  };
  initMainVisualSlider();

  // ====================== TV Section Slider ======================
  const TVSlider = (() => {
    const tvList = document.querySelector(".series-container-india li.col-full");
    if (!tvList) return;

    const items = tvList.querySelectorAll(".content .item");
    const banners = tvList.querySelectorAll(".banner .img");
    const prevBtn = tvList.querySelector(".btn-arrow.left");
    const nextBtn = tvList.querySelector(".btn-arrow.right");
    let currentIndex = 0;
    let autoSlide;

    const showSlide = index => {
      items.forEach((item, i) => item.classList.toggle("hidden", i !== index));
      banners.forEach((banner, i) => banner.classList.toggle("active", i === index));
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(currentIndex);
    };

    prevBtn?.classList.remove("hidden");
    nextBtn?.classList.remove("hidden");

    nextBtn?.addEventListener("click", nextSlide);
    prevBtn?.addEventListener("click", prevSlide);

    const startAutoSlide = () => setInterval(nextSlide, 3000);

    tvList.addEventListener("mouseenter", () => clearInterval(autoSlide));
    tvList.addEventListener("mouseleave", () => { autoSlide = startAutoSlide(); });

    showSlide(currentIndex);
    autoSlide = startAutoSlide();
  })();

  // ====================== About Hisense Slider ======================
  const aboutContainers = document.querySelectorAll(".about-container-india");

  if (aboutContainers.length) {
    aboutContainers.forEach(container => {
      // If slick not initialized already
      if (!container.classList.contains("slick-initialized")) {
        $(container).slick({
          speed: 300,
          adaptiveHeight: true,
          autoplay: false,
          lazyLoad: "ondemand",
          arrows: false,
          dots: true,
          responsive: [
            {
              breakpoint: 3000,
              settings: {
                slidesToShow: container.classList.contains("highlight") ? 1 : 3,
                centerMode: false,
                dots: false,
                arrows: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: container.classList.contains("highlight")
                  ? "0px"
                  : "30px",
                dots: true,
                arrows: false,
                infinite: false,
              },
            },
          ],
        });
      }
    });
  }

  // ====================== Anchor Slide Section (Series) ======================
  const AnchorSlideSlider = (() => {
    const seriesContainers = $(".anchor_slide li");

    seriesContainers.each(function () {
      const container = $(this);
      let curIndex = 0;
      const navLinks = container.find(".top nav a");
      const items = container.find(".content .item");
      const banners = container.find(".banner .img");
      const arrowLeft = container.find(".btn-arrow.left");
      const arrowRight = container.find(".btn-arrow.right");
      let autoSwipeInterval;

      // Initialize first item
      $(navLinks[0]).addClass("active");
      items.addClass("hidden");
      $(items[0]).removeClass("hidden");
      banners.css({ left: "100%" });
      $(banners[0]).css({ left: "0%" });

      const swipeTo = index => {
        const direction = index > curIndex || (curIndex === items.length - 1 && index === 0) ? 100 : -100;
        const reverse = -direction;

        // Animate banners
        anime({
          targets: banners[index],
          left: [direction + "%", "0%"],
          duration: 600,
          easing: "easeInOutQuad",
        });
        anime({
          targets: banners[curIndex],
          left: ["0%", reverse + "%"],
          duration: 600,
          easing: "easeInOutQuad",
        });

        // Animate items
        anime({
          targets: items[curIndex],
          opacity: 0,
          translateX: 100,
          duration: 300,
          easing: "easeOutQuad",
          complete: () => {
            $(items[curIndex]).addClass("hidden");
            $(items[index]).removeClass("hidden");
            anime({
              targets: items[index],
              opacity: [0, 1],
              translateX: [100, 0],
              duration: 700,
              easing: "easeOutQuad",
            });
            curIndex = index;
          },
        });

        navLinks.removeClass("active");
        $(navLinks[index]).addClass("active");
      };

      // Navigation click
      navLinks.each(function (i) { $(this).click(() => { if (i !== curIndex) swipeTo(i); }); });

      // Arrow click
      arrowLeft.click(() => swipeTo(curIndex - 1 < 0 ? items.length - 1 : curIndex - 1));
      arrowRight.click(() => swipeTo((curIndex + 1) % items.length));

      // Auto swipe
      const setAutoSwipe = (enable = true) => {
        if (enable) {
          autoSwipeInterval = setInterval(() => swipeTo((curIndex + 1) % items.length), 5000);
        } else {
          clearInterval(autoSwipeInterval);
        }
      };

      container.mouseenter(() => setAutoSwipe(false));
      container.mouseleave(() => setAutoSwipe(true));
      setAutoSwipe(true);
    });
  })();

});

