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
   * Desktop: first 4 slides always visible statically
   * Mobile: all slides become a slider
   */
  const initOverviewTypeListing = () => {
    document.querySelectorAll(".overview-type-listing").forEach((el, index) => {
      const container = $(el).find(".overview-type-container");
      const slides = container.find(".overview-type");
      const breakpoint = 768; 
      if (container.hasClass("slick-initialized")) {
        container.slick("unslick");
      }

      if (window.innerWidth <= breakpoint) {
        container.slick({
          infinite: false,
          arrows: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: document.querySelectorAll(".overview-type-listing-dots")[index],
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1, dots: true } },
          ],
        });
      } else {

        slides.show();
      }
    });
  };
  window.addEventListener("resize", () => {
    initOverviewTypeListing();
  });
  initOverviewTypeListing();


  /**
   * ====================== Product Listing Tab Animation ======================
   * Uses anime.js (auto-loads if missing) with fallback.
   */
  (function () {
    function loadAnimeIfMissing(cb) {
      if (typeof anime !== "undefined") return cb();
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js";
      s.onload = () => { console.log("anime.js loaded."); cb(); };
      s.onerror = () => { console.warn("Failed to load anime.js — continuing with CSS fallback."); cb(); };
      document.head.appendChild(s);
    }

    function initProductListingTabs() {
      const tabs = document.querySelectorAll(".product-listing-tab");
      if (!tabs.length) return;

      tabs.forEach(tab => {
        const highlights = tab.querySelector(".product-highlights");
        if (highlights && getComputedStyle(highlights).position === "static") {
          highlights.style.position = "relative";
        }

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

          function activate(ev) {
            ev?.preventDefault?.();
            const target = ev?.currentTarget || item;
            if (!target) return;

            const hlRect = highlights.getBoundingClientRect();
            const tRect = target.getBoundingClientRect();
            const relativeLeft = Math.round(tRect.left - hlRect.left + highlights.scrollLeft);
            const width = Math.round(tRect.width);
            const text = target.querySelector(".product-highlight-text")?.textContent.trim() || "";

            // Cursor animation
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

            // Description animation
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
