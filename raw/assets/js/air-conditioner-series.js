
// ====================== Air Conditioner Page JavaScript ======================
document.addEventListener("DOMContentLoaded", () => {
  /**
   * ====================== Product Listing Banner ======================
   */
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

  /**
   * ====================== Overview Type Listing ======================
   */
  const initOverviewTypeListing = () => {
    document.querySelectorAll(".overview-type-listing").forEach((el, index) => {
      const itemCount = el.querySelectorAll(".overview-type-container .overview-type").length;
      const slidesToShow = itemCount === 2 ? 2 : itemCount === 3 ? 3 : 4;

      $(el)
        .find(".overview-type-container")
        .slick({
          infinite: true,
          arrows: true,
          dots: true,
          slidesToShow,
          slidesToScroll: 1,
          appendDots: document.querySelectorAll(".overview-type-listing-dots")[index],
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, dots: true } },
            { breakpoint: 768, settings: { slidesToShow: 1, arrows: false, dots: true } },
          ],
        });
    });
  };

  /**
   * ====================== Product Listing Tab Animation ======================
   * Uses anime.js (auto-loads if missing) with fallback.
   */
  (function () {
    function loadAnimeIfMissing(cb) {
      if (typeof anime !== "undefined") return cb();
      var s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js";
      s.onload = () => {
        console.log("anime.js loaded.");
        cb();
      };
      s.onerror = () => {
        console.warn("Failed to load anime.js — continuing with CSS fallback.");
        cb();
      };
      document.head.appendChild(s);
    }

    function initProductListingTabs() {
      var tabs = document.querySelectorAll(".product-listing-tab");
      if (!tabs.length) return;

      tabs.forEach(tab => {
        var highlights = tab.querySelector(".product-highlights");
        if (highlights) {
          if (getComputedStyle(highlights).position === "static") {
            highlights.style.position = "relative";
          }
        }

        var cursor = tab.querySelector(".product-highlights-cursor");
        var desc = tab.querySelector(".product-highlights-description");

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

          function activate(ev) {
            ev?.preventDefault?.();
            var target = ev?.currentTarget || item;
            if (!target) return;

            var hlRect = highlights.getBoundingClientRect();
            var tRect = target.getBoundingClientRect();
            var relativeLeft = Math.round(tRect.left - hlRect.left + highlights.scrollLeft);
            var width = Math.round(tRect.width);
            var text = target.querySelector(".product-highlight-text")?.textContent.trim() || "";

            // cursor
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

            // description
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
          }

          function deactivate() {
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
          }

          item.addEventListener("mouseenter", activate);
          item.addEventListener("click", activate);
          item.addEventListener("focus", activate);
          item.addEventListener("touchstart", activate, { passive: true });

          tab.addEventListener("mouseleave", deactivate);
          item.addEventListener("blur", deactivate);
        });
      });
    }

    loadAnimeIfMissing(() => setTimeout(initProductListingTabs, 10));
  })();

  /**
   * ====================== Pop-up Modal ======================
   */
  const initBuyModal = () => {
    const modal = document.getElementById("buyModal");
    if (!modal) return;
    const closeBtn = modal.querySelector(".js-close");

    document.querySelectorAll(".open-buy-modal").forEach(btn => {
      btn.addEventListener("click", () => (modal.style.display = "flex"));
    });

    closeBtn?.addEventListener("click", () => (modal.style.display = "none"));
    window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  };

  /**
   * ====================== Single Tab Centering & Buy Button Links ======================
   */
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
  // ====================== Init All ======================
  initProductListingBanner();
  initOverviewTypeListing();
  initBuyModal();
  enhanceSingleTabAndButtons();
});

