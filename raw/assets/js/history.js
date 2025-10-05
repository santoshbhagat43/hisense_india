
// ====================== History Carousell ======================
document.addEventListener("DOMContentLoaded", () => {
  $(".history-carousell").each((_, el) => initCarousell(el));

  function initCarousell(container) {
    let currentIndex = 0;
    let canSwipe = true;
    const $container = $(container);
    const tabs = container.getElementsByClassName("history-carousell-tab");

    // First tab active
    $container.find(".history-carousell-tab").eq(0).addClass("current");

    if (!tabs.length) return;

    // ---------------- Swipe Support (Hammer.js) ----------------
    const hammer = new Hammer.Manager(container);
    const swipe = new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammer.add(swipe);

    hammer.on("swipe", e => {
      if (!canSwipe) return;
      const dir = e.offsetDirection; // 2 = left, 4 = right
      if (dir === 2 && currentIndex < tabs.length - 1) {
        currentIndex++;
        slide("forward");
      } else if (dir === 4 && currentIndex > 0) {
        currentIndex--;
        slide("backward");
      }
    });

    // ---------------- Bullets ----------------
    const $control = $('<div class="history-carousell-control"></div>').appendTo(container);
    for (let i = 0; i < tabs.length; i++) {
      const $bullet = $('<div class="history-carousell-bullet"></div>').appendTo($control);
      if (i === 0) $bullet.addClass("current");

      // initial transforms
      $container.find(".history-carousell-tab").eq(i).css({
        "-webkit-transform": `translateY(${30 * i}%)`,
      });

      if (i === 1) {
        $container.find(".history-carousell-tab").eq(i).find(".history-carousell-img").css({
          "-webkit-transform": `translate(100px, ${30 * i}%) rotate(15deg)`,
        });
      }
    }
    $container.attr("data-no", tabs.length);

    // ---------------- Bullet Click ----------------
    $container.on("click", ".history-carousell-bullet", function (e) {
      e.preventDefault();
      const idx = $container.find(".history-carousell-bullet").index(this);
      if (idx !== currentIndex) {
        currentIndex = idx;
        slide(currentIndex > idx ? "backward" : "forward");
      }
    });

    // ---------------- Arrows ----------------
    $container.on("click", ".history-carousell-arrow.next", e => {
      e.preventDefault();
      if (currentIndex < tabs.length - 1) {
        currentIndex++;
        slide("forward");
      }
    });

    $container.on("click", ".history-carousell-arrow.previous", e => {
      e.preventDefault();
      if (currentIndex > 0) {
        currentIndex--;
        slide("backward");
      }
    });

    // ---------------- Hover Effects ----------------
    $container.on("mouseover", ".history-carousell-img", () => {
      $container.find(".history-carousell-tab").addClass("hide");
      $container.find(".history-carousell-tab.current").addClass("hover");
    });
    $container.on("mouseout", ".history-carousell-img", () => {
      $container.find(".history-carousell-tab").removeClass("hide");
      $container.find(".history-carousell-tab.current").removeClass("hover");
    });

    // ---------------- Show Detail ----------------
    $container.on("click", ".history-carousell-img, .btn-discover-more.mobile_only", () => {
      const showDetail = () => {
        $container.find(".history-carousell-tab").removeClass("clicked");
        $container.find(".history-carousell-tab.current").addClass("clicked");
        $(".history-carousell-img, .year-desc, .history-carousell-control, .history-carousell-arrow, .btn-discover-more.mobile_only").addClass("fadeout");
        $(".main-container").addClass("showing-detail");
        $(".history-page-detail").eq(currentIndex).addClass("show");
        setTimeout(() => $(".history-page-detail").eq(currentIndex).addClass("fadein"), 20);
        canSwipe = false;
      };

      if (window.pageYOffset > 0) {
        $("html, body").animate({ scrollTop: 0 }, 500);
        setTimeout(showDetail, 500);
      } else {
        showDetail();
      }
    });

    // ---------------- Next Timeline ----------------
    $(".next-history-timeline-item").on("click", "a", e => {
      e.preventDefault();
      $(".history-page-detail").eq(currentIndex).removeClass("show fadein");
      $("html, body").animate({ scrollTop: 0 });

      const item = $(".next-history-timeline-item").eq(currentIndex);
      $container.find(".history-carousell-tab.current .year-type").text(item.find(".year-type").text());
      $container.find(".history-carousell-tab.current .year-range").text(item.find(".year-range").text());
      $container.find(".history-carousell-tab.current .year-title").text(item.find(".year-title").text());

      currentIndex++;
      $(".history-page-detail").eq(currentIndex).addClass("show");
      setTimeout(() => $(".history-page-detail").eq(currentIndex).addClass("fadein"), 20);
    });

    // ---------------- Back to Timeline ----------------
    $(".b2timeline").on("click", "a", () => {
      setTimeout(() => {
        $("html, body").animate({ scrollTop: 0 }, 500);
        $container.find(".history-carousell-tab.current").removeClass("clicked");
        $(".history-carousell-img, .year-desc, .history-carousell-control, .history-carousell-arrow, .btn-discover-more.mobile_only").removeClass("fadeout");
        $(".main-container").removeClass("showing-detail");
        $(".history-page-detail").eq(currentIndex).removeClass("show fadein");
      }, 500);
      canSwipe = true;
    });

    // ---------------- Slide Function ----------------
    function slide(direction) {
      for (let i = 0; i < tabs.length; i++) {
        const r = i - currentIndex;
        let duration = direction === "backward" ? 800 - 50 * r : 800 + 50 * r;
        if (duration < 300) duration = 300;

        if (i === 1) {
          $container.find(".history-carousell-tab").eq(i).find(".history-carousell-img").css({
            "-webkit-transform": "rotate(0)",
            transition: "all 1.25s ease-out",
          });
        }

        anime({
          targets: tabs[i],
          translateX: `-${100 * currentIndex}%`,
          translateY: `${30 * (i - currentIndex)}%`,
          rotate: `${15 * (i - currentIndex)}deg`,
          easing: "linear",
          duration: 0,
        });

        setTimeout(() => {
          $container.find(".history-carousell-tab.current, .history-carousell-bullet.current").removeClass("current");
          $container.find(".history-carousell-tab").eq(currentIndex).addClass("current");
          $container.find(".history-carousell-bullet").eq(currentIndex).addClass("current");
        }, 1250);
      }
    }
  }
});

