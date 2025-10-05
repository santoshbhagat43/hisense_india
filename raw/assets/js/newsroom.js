
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // ====================== Two Box Newsroom Slider ======================
  const initTwoBoxNewsroomSlider = () => {
    const infoCarousel = $("#two-box-silders-newsroom .two-box-info-carousel");
    const imageCarousel = $("#two-box-silders-newsroom .two-box-image-carousel-newsroom");

    if (infoCarousel.length && imageCarousel.length) {
      infoCarousel.slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: imageCarousel,
      });

      imageCarousel.slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: infoCarousel,
      });
    }
  };

  // ====================== Newsroom List Pagination & Filters ======================
  const initNewsroomList = () => {
    const $container = $("#listnews-newsroom");
    const $items = $container.find(".slide-item-newsroom");
    const $pagination = $("#pagination");
    const $noResult = $(".list-no-result");
    const $topics = $("#topics");
    const $year = $("#year");
    const perPage = 6;
    let currentPage = 1;

    // Optional: Select2 for nice dropdowns
    if ($.fn.select2) {
      $topics.select2({ minimumResultsForSearch: Infinity, width: "style" });
      $year.select2({ minimumResultsForSearch: Infinity, width: "style" });
    }

    const extractYear = str => {
      const m = String(str).match(/(\d{4})/);
      return m ? m[1] : "";
    };

    const applyFilter = () => {
      const selTopic = $topics.val() || "All Topics";
      const selYear = $year.val() || "All Years";
      let visible = [];

      $items.each(function () {
        const $it = $(this);
        const topic = $it.data("topic");
        const isFeatured = String($it.data("is-featured")) === "true";
        const year = extractYear($it.data("year"));
        let show = true;

        if (selTopic !== "All Topics") {
          show = selTopic === "Featured" ? isFeatured : topic === selTopic;
        }

        if (show && selYear !== "All Years") {
          show = String(year) === String(selYear);
        }

        if (show) {
          $it.removeClass("filterhidden hidden");
          visible.push($it);
        } else {
          $it.addClass("filterhidden hidden");
        }
      });

      if (visible.length === 0) {
        $noResult.addClass("show");
        $container.addClass("hidden");
        buildPagination(0);
        return;
      } else {
        $noResult.removeClass("show");
        $container.removeClass("hidden");
      }

      currentPage = 1;
      buildPagination(visible.length);
      showPage(currentPage);
    };

    const showPage = page => {
      const $visible = $items.not(".filterhidden");
      const start = (page - 1) * perPage;
      const end = start + perPage;

      $items.addClass("hidden");
      $visible.slice(start, end).removeClass("hidden");
    };

    const buildPagination = totalVisible => {
      $pagination.empty();

      if (totalVisible <= perPage) return;

      const totalPages = Math.ceil(totalVisible / perPage);
      const windowSize = 5;
      let startPage = Math.max(1, currentPage - Math.floor(windowSize / 2));
      let endPage = Math.min(totalPages, startPage + windowSize - 1);

      if (endPage - startPage + 1 < windowSize) {
        startPage = Math.max(1, endPage - windowSize + 1);
      }

      $pagination.append(liItem("", currentPage - 1, currentPage === 1, false, "prev"));

      for (let p = startPage; p <= endPage; p++) {
        $pagination.append(liItem(p, p, false, p === currentPage));
      }

      $pagination.append(liItem("", currentPage + 1, currentPage === totalPages, false, "next"));
    };

    const liItem = (label, page, disabled, active, extraClass) => {
      const $li = $('<li class="page-item"></li>');
      if (disabled) $li.addClass("disabled");
      if (active) $li.addClass("active");
      if (extraClass) $li.addClass(extraClass);

      const $a = $('<a class="page-link" href="#"></a>')
        .text(label)
        .attr("data-page", page);

      return $li.append($a);
    };

    $pagination.on("click", ".page-link", function (e) {
      e.preventDefault();
      const page = parseInt($(this).attr("data-page"), 10);
      if (isNaN(page)) return;

      const totalPages = Math.ceil($items.not(".filterhidden").length / perPage);
      if (page < 1 || page > totalPages) return;

      currentPage = page;
      buildPagination($items.not(".filterhidden").length);
      showPage(currentPage);

      $("html, body").animate({ scrollTop: $(".news-info").offset().top - 100 }, 400);
    });

    $("body").on("change", "#topics, #year", applyFilter);

    applyFilter();
    showPage(1);
  };

  // ====================== Initialize All ======================
  initTwoBoxNewsroomSlider();
  initNewsroomList();
});