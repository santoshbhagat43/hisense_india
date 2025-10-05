// ====================== Product Details Page Script ======================
// Requirements: jQuery, anime.js, geoip2 (load via CDN before this script)

// ---------------------- Sticky Navigation ----------------------
class StickyNav {
  constructor() {
    this.pi = -125;
    this.point = 0;
    this.windowWidth = $(window).innerWidth();
    this.checkPoint = [];
    this.contentHeight = [];
    this.lastSt = $(window).scrollTop();
    this.topMargin = $("header").outerHeight();
    this.initStickyNav();
  }

  initStickyNav() {
    const self = this;
    let $sections = $("[data-sticky-nav]");

    $sections.each(function (_, el) {
      if (!$(el).data("sticky-nav") || !$(el).data("sticky-nav").trim().length) {
        $(el).removeAttr("data-sticky-nav");
      }
    });

    const count = ($sections = $("[data-sticky-nav]")).length;
    if (count > 0) {
      const wrapper = $('<div class="product-wrapper">').insertBefore($sections.eq(0));
      const parent = $sections.eq(0).parent();

      let found = false;
      let added = 0;
      parent.children().each(function (_, el) {
        if (el.hasAttribute("data-sticky-nav")) found = true;
        if (found && added < count) {
          $(el).appendTo(wrapper);
          if (el.hasAttribute("data-sticky-nav")) added++;
        }
      });

      $('<div class="sticky-nav"></div>').prependTo(".product-wrapper");
      const navMain = $('<div class="sticky-nav-main"></div>').appendTo(".sticky-nav");
      const mobileMenu = $('<div class="anchor-menu mobile-only">').insertAfter(".info-bar-title");
      const select = $('<select name="anchor-menu">').appendTo(mobileMenu);

      $sections.each(function (idx, el) {
        const top = $(el).offset().top;
        self.checkPoint.push(top);

        if ($sections.eq(idx + 1).length > 0) {
          self.contentHeight.push($sections.eq(idx + 1).offset().top - top);
        } else {
          self.contentHeight.push($(el).outerHeight());
        }

        const sectionName = $(el).data("sticky-nav");
        $(`
          <a class="sticky-nav-button" href="#" data-sticky-section="${sectionName}">
            <svg>
              <circle cx="27" cy="27" r="20" style="stroke-dashoffset:${self.pi};"></circle>
            </svg>
            <span>${sectionName}</span>
          </a>
        `).appendTo(navMain);

        $(`<option value="${sectionName}">${sectionName}</option>`).appendTo(select);
      });

      select.on("change", function (e) {
        self.updateNav();
        const selected = $(e.target).val();
        const idx = $(e.target).find("option").index($(e.target).find(`[value="${selected}"]`));
        self.scrollToTarget(idx);
      });

      $(window).on("scroll", () => self.updateNav());
      $(window).on("resize", () => {
        if (self.windowWidth != $(window).innerWidth()) {
          self.resizeNav();
          self.updateNav();
        }
      });
      $(window).on("load", () => {
        self.resizeNav();
        self.updateNav();
      });

      $(".sticky-nav").on("click", ".sticky-nav-button", function (e) {
        e.preventDefault();
        const idx = $(".sticky-nav").find(".sticky-nav-button").index(this);
        self.scrollToTarget(idx);
      });

      $(".sticky-nav")
        .on("mouseenter", ".sticky-nav-button", function () {
          $(this).height($(this).find("span").outerHeight());
        })
        .on("mouseleave", ".sticky-nav-button", function () {
          $(this).removeAttr("style");
        });
    }
  }

  scrollToTarget(idx) {
    this.resizeNav();
    this.updateNav();

    const targetTop = $("[data-sticky-nav]").eq(idx).offset().top;
    this.updateMargin(targetTop);

    const destination = targetTop - this.topMargin;
    const current = $(window).scrollTop();
    let duration = Math.abs(current - destination) / 5;
    if (duration < 600) duration = 600;
    if (duration > 2000) duration = 2000;

    anime({
      targets: [document.documentElement, document.body],
      scrollTop: destination,
      easing: "cubicBezier(.95,.07,.66,.75)",
      duration: duration,
    });
  }

  updateMargin(top) {
    this.topMargin = top > this.lastSt ? $(".info-bar").outerHeight() || 0 : $("header").outerHeight();
  }

  updateNav() {
    const st = $(window).scrollTop();
    $.each(this.checkPoint, (idx, pos) => {
      if (Math.round(st) >= Math.floor(pos)) this.point = idx;
      let progress = (st - pos) / this.contentHeight[idx];
      progress = Math.min(Math.max(progress, 0), 1);
      $(".sticky-nav-button").eq(idx).find("circle").css({ "stroke-dashoffset": (1 - progress) * this.pi });
    });

    $(".sticky-nav-button.current").removeAttr("style").removeClass("current");

    const currentBtn = $(".sticky-nav-button").eq(this.point);
    currentBtn.addClass("current");
    currentBtn.height(currentBtn.find("span").outerHeight());

    setTimeout(() => {
      $(".anchor-menu select option").eq(this.point).prop("selected", true);
    }, 50);
  }

  resizeNav() {
    const sections = $("[data-sticky-nav]");
    this.checkPoint = [];
    this.contentHeight = [];

    sections.each((idx, el) => {
      const top = $(el).offset().top - this.topMargin;
      this.checkPoint.push(top);

      if (sections.eq(idx + 1).length > 0) {
        this.contentHeight.push(sections.eq(idx + 1).offset().top - this.topMargin - top);
      } else {
        this.contentHeight.push($(el).outerHeight());
      }
    });
  }
}

// ---------------------- Where to Buy ----------------------
class WhereToBuy {
  constructor() {
    this.container = $(".near-by-container");
    this.overlay = $(".near-by-overlay");
    this.main = $(".main-container");

    this.init();
    if (this.container.length) this.geoIP();
  }

  init() {
    $(".where-to-buy").removeClass("hidden");

    if (location.href.indexOf("?type=where-to-buy") > -1) this.openPopup();

    const topBtn = $(".top-banner-info a.btn-hisense");
    const infoBtn = $(".info-bar a.btn-hisense");

    const self = this;

    if (topBtn.attr("href") === "/regional" || infoBtn.attr("href") === "/regional") {
      $(".top-banner-info .btn-hisense, .info-bar .btn-hisense span").on("click", function (e) {
        e.preventDefault();
        location.pathname = "/regional";
      });
    } else {
      topBtn.attr("href", "?type=where-to-buy");
      infoBtn.attr("href", "?type=where-to-buy");

      $(".top-banner-info .btn-hisense, .info-bar .btn-hisense span").on("click", function (e) {
        e.preventDefault();
        self.openPopup();
      });
    }

    if ($(".intro-content .btn-hisense").attr("href") !== "/regional") {
      $(".intro-content .btn-hisense").on("click", function (e) {
        e.preventDefault();
        self.openPopup();
      });
    }

    $(".where-to-buy .where-to-buy-close .btn-close").on("click", () => this.closePopup());
    $(".where-to-buy-overlay").on("click", () => this.closePopup());
  }

  openPopup() {
    $(".where-to-buy").addClass("active");
    $(".where-to-buy-overlay").removeClass("hidden");
    $("body").css({ overflow: "hidden", width: "98%" });
    history.pushState({}, "", location.pathname + "?type=where-to-buy");
  }

  closePopup() {
    $(".where-to-buy").removeClass("active");
    $(".where-to-buy-overlay").addClass("hidden");
    $("body").css({ overflow: "", width: "" });
    history.pushState({}, "", location.pathname);
  }

  geoIP() {
    const self = this;
    geoip2.country(
      function (res) {
        if (res.country.iso_code) {
          const code = res.country.iso_code.toLowerCase();
          if ($(`li[data-code="${code}"]`).length) {
            const link = $(`li[data-code="${code}"]`).find("a");
            const img = link.find("img").attr("data-src");
            const text = link.text();
            const href = link.attr("href");

            $(".near-by-container .country").html(`<img src="${img}" alt="${text}"/> ${text}`).attr("href", href);
            $(".near-by-container .btn-hisense").attr("href", href);

            self.container.removeClass("hidden");
            self.overlay.removeClass("hidden");
            self.main.addClass("near-by");
          }
        } else {
          console.error("GeoIP Fail!");
        }
      },
      function (err) {
        console.error("GeoIP Error:", err);
      }
    );
  }
}

// ---------------------- Gallery Switcher ----------------------
function initGallery() {
  const thumbs = $(".top-banner-gallery-thumb-tab");
  const tabs = $(".top-banner-gallery-img-tab");

  thumbs.on("click", function (e) {
    e.preventDefault();
    const idx = thumbs.index(this);

    thumbs.removeClass("current");
    $(this).addClass("current");

    tabs.removeClass("current").eq(idx).addClass("current");
  });
}

// ---------------------- Pop-up Modal ----------------------
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

// ---------------------- Spec View More ----------------------
class SpecViewMore {
  constructor(dom) {
    this.dom = dom;
    this.btn = this.dom.find(".btn-view-more");
    this.specContainer = this.dom.find(".spec-container");

    // Reset state (important for resize)
    this.specContainer.find(".spec").show();
    this.btn.hide().removeClass("show");

    // Run only on mobile
    if ($(window).width() <= 768) {
      // Hide specs beyond 2
      this.specContainer.find(".spec:gt(1)").hide();

      if (this.specContainer.find(".spec").length > 2) {
        this.btn.addClass("show").show();
        this.btn.off("click").on("click", (e) => {
          e.preventDefault();
          this.specContainer.find(".spec").slideDown(300);
          this.btn.hide();
        });
      }
    }
  }
}

// ---------------------- Init ----------------------
$(document).ready(() => {
  new StickyNav();
  new WhereToBuy();
  initGallery();
  initBuyModal();

  // Initialize Spec View More
  function initSpecViewMore() {
    $(".component-specification").each(function () {
      new SpecViewMore($(this));
    });
  }

  initSpecViewMore();

  // Re-check on resize (with debounce to avoid flicker)
  let resizeTimer;
  $(window).on("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initSpecViewMore, 200);
  });
});

