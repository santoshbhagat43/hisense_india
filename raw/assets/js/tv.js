// ====================== TV Page JavaScript ======================
document.addEventListener("DOMContentLoaded", () => {
  // ====================== Product Listing Banner ======================
  const initProductListingBanner = () => {
    document.querySelectorAll(".product-listing-banner").forEach(el => {
      const holder = el.querySelector(".product-listing-banner-holder");
      if (holder && !holder.classList.contains("slick-initialized")) {
        $(holder)
          .slick({
            slidesToShow: 1,
            speed: 300,
            infinite: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            pauseOnFocus: false,
            arrows: true,
            dots: true,
            appendDots: el.querySelector(".product-listing-dots"),
          })
          .slick("slickPlay");
      }
    });
  };

  // ====================== Product Highlight Animation ======================
  const initProductListingTabs = () => {
    const loadAnimeIfMissing = cb => {
      if (typeof anime !== "undefined") return cb();
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js";
      script.onload = cb;
      script.onerror = cb;
      document.head.appendChild(script);
    };

    loadAnimeIfMissing(() => {
      document.querySelectorAll(".product-listing-tab").forEach(tab => {
        const highlights = tab.querySelector(".product-highlights");
        const cursor = tab.querySelector(".product-highlights-cursor");
        const desc = tab.querySelector(".product-highlights-description");

        if (cursor) {
          cursor.style.willChange = "transform, width, opacity";
          cursor.style.transform = "translateX(0px)";
          cursor.style.width = "0px";
          cursor.style.opacity = "0";
          cursor.style.transition =
            "transform .4s cubic-bezier(.51,.01,.53,1), width .4s cubic-bezier(.51,.01,.53,1), opacity .2s ease";
        }

        tab.querySelectorAll(".product-highlight").forEach(item => {
          if (!item.hasAttribute("tabindex")) item.setAttribute("tabindex", "0");

          const activate = ev => {
            ev?.preventDefault?.();
            const t = ev?.currentTarget || item;
            const hlRect = highlights.getBoundingClientRect();
            const tRect = t.getBoundingClientRect();
            const relativeLeft = Math.round(tRect.left - hlRect.left + highlights.scrollLeft);
            const width = Math.round(tRect.width);
            const text = t.querySelector(".product-highlight-text")?.textContent.trim() || "";

            if (cursor) {
              if (typeof anime !== "undefined") {
                anime({
                  targets: cursor,
                  translateX: relativeLeft,
                  width: width,
                  opacity: 1,
                  easing: "cubicBezier(.51,.01,.53,1)",
                  duration: 400,
                });
              } else {
                cursor.style.transform = `translateX(${relativeLeft}px)`;
                cursor.style.width = width + "px";
                cursor.style.opacity = "1";
              }
            }

            if (desc) {
              if (typeof anime !== "undefined") {
                desc.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
                anime.timeline({ loop: false }).add({
                  targets: desc.querySelectorAll(".letter"),
                  opacity: [0, 1],
                  translateZ: 0,
                  easing: "easeOutExpo",
                  duration: 1600,
                  delay: (_, i) => 10 * i,
                });
              } else {
                desc.textContent = text;
              }
            }
          };

          const deactivate = () => {
            if (desc) desc.innerHTML = "";
            if (cursor) {
              if (typeof anime !== "undefined") {
                anime({
                  targets: cursor,
                  width: 0,
                  opacity: 0,
                  easing: "cubicBezier(.51,.01,.53,1)",
                  duration: 300,
                });
              } else {
                cursor.style.width = "0px";
                cursor.style.opacity = "0";
              }
            }
          };

          item.addEventListener("mouseenter", activate);
          item.addEventListener("click", activate);
          item.addEventListener("focus", activate);
          item.addEventListener("touchstart", activate, { passive: true });

          tab.addEventListener("mouseleave", deactivate);
          item.addEventListener("blur", deactivate);
        });
      });
    });
  };

  // ====================== Buy Modal ======================
  const initBuyModal = () => {
    const modal = document.getElementById("buyModal");
    if (!modal) return;
    const closeBtn = modal.querySelector(".js-close");

    document.querySelectorAll(".open-buy-modal").forEach(btn =>
      btn.addEventListener("click", () => {
        modal.style.display = "flex";
      })
    );

    closeBtn?.addEventListener("click", () => (modal.style.display = "none"));
    window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  };

  // ====================== Single Tab Centering ======================
  const enhanceSingleTabAndButtons = () => {
    const tabs = document.querySelectorAll(".product-listing .product-listing-inner .product-listing-tab");
    if (tabs.length === 1) tabs[0].style.margin = "0 auto";

    document.querySelectorAll(".product-listing-tab-buttons > div a.btn-hisense").forEach(btn => {
      const href = btn.getAttribute("href");
      if (href && !href.includes("?type=where-to-buy")) {
        btn.setAttribute("href", `${href}?type=where-to-buy`);
      }
    });
  };

  // ====================== Product Filter ======================
  const initProductFilter = () => {
    let activeFilters = [];
    const $tabs = $(".product-listing-tab");
    const $filter = $(".product-filter");
    const $body = $("body");

    // Open mobile filter
    $(".mobile-product-filter .mobile-filter").on("click touchstart", e => {
      e.preventDefault();
      $filter.css({ "max-height": "100vh", height: "100vh", display: "block" });
      $body.css("overflow", "hidden");
    });

    // Close mobile filter
    $filter.on("click", ".close, .btn-apply, .btn-clear", () => {
      $filter.css({ "max-height": "", height: "", display: "" });
      $body.css("overflow", "");
    });

    // Close when clicking outside
    $(document).on("click touchstart", e => {
      if (
        $filter.is(":visible") &&
        !$(e.target).closest($filter).length &&
        !$(e.target).closest(".mobile-product-filter .mobile-filter").length
      ) {
        $filter.css({ "max-height": "", height: "", display: "" });
        $body.css("overflow", "");
      }
    });

    // Checkbox filter logic
    $filter.find("input[type='checkbox']").on("click", function () {
      const filter = $(this).data("filter");
      $(this).is(":checked") ? activeFilters.push(filter) : activeFilters.splice(activeFilters.indexOf(filter), 1);

      $tabs.addClass("hide");

      if (activeFilters.length) {
        $tabs.each(function () {
          const tabFilters = $(this).data("filter")?.split(",") || [];
          const match = activeFilters.every(f => tabFilters.includes(f));
          if (match) $(this).removeClass("hide");
        });
      } else {
        $tabs.removeClass("hide");
      }

      $(".product-listing-no-result").toggleClass(
        "show",
        activeFilters.length && $tabs.not(".hide").length === 0
      );
    });

    // Clear all filters
    $filter.find(".filter-clear span, .btn-clear").on("click", () => {
      $filter.find("input[type='checkbox']").prop("checked", false);
      activeFilters = [];
      $tabs.removeClass("hide");
      $(".product-listing-no-result").removeClass("show");
    });

    // ====================== Product Filter Title Toggle ======================
    $filter.find(".product-filter-type").each(function () {
      const $filterType = $(this);
      const $details = $filterType.find(".product-filter-detail");

      // Set initial max-height for smooth transition
      setTimeout(() => {
        $filterType.css("max-height", $filterType.outerHeight());
      }, 100);

      // Toggle expand/collapse on title click
      $filterType.find(".product-filter-title").on("click", function () {
        const $title = $(this);
        if ($title.hasClass("hide")) {
          $title.removeClass("hide");
          $filterType.css("max-height", $title.outerHeight() + $details.outerHeight());
        } else {
          $title.addClass("hide");
          $filterType.css("max-height", $title.outerHeight());
        }
      });
    });
  };

  // ====================== Initialize Everything ======================
  initProductListingBanner();
  initProductListingTabs();
  initBuyModal();
  enhanceSingleTabAndButtons();
  initProductFilter();
});
