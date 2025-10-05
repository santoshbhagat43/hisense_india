 document.addEventListener("DOMContentLoaded", function () {
  // ----------------- Slick Slider Initialization -----------------
  var sliderInitialized = false;
  $("#overview-silder .carousel").on("init breakpoint", function (event, slick) {
    if (!sliderInitialized) {
      sliderInitialized = true;

      // Apply filtering based on breakpoint
      if (slick.activeBreakpoint && slick.activeBreakpoint <= 768) {
        slick.slickUnfilter();
        slick.slickFilter(":not(.desktop-only)");
      } else if (slick.activeBreakpoint && slick.activeBreakpoint > 768) {
        slick.slickUnfilter();
        slick.slickFilter(".desktop-only");
      }

      sliderInitialized = false;
    }
  }).slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{ breakpoint: 9999 }, { breakpoint: 768 }]
  });

  // ----------------- Text Expand Functionality -----------------
  $(".innovation-group p").each(function () {
    if ($(this).prop("scrollHeight") > 270) {
      $(this).next().removeClass("d-none");
    }
  });

  $(window).on("resize", function () {
    $(".innovation-group p").each(function () {
      if ($(this).prop("scrollHeight") > 270) {
        $(this).next().removeClass("d-none");
      } else {
        $(this).next().addClass("d-none");
      }
    });
  });

  $(".text-expand img").click(function () {
    $(this).toggleClass("clicked");
    $(this).parent().prev().toggleClass("expanded");
  });

  // ----------------- Video Popup Functionality -----------------
  $(".btn-video").click(function (e) {
    e.preventDefault();
    var href = e.currentTarget.href;
    openPopupVideo(href, "video-lightbox");
  });

  // Example video popup function
  function openPopupVideo(url, className) {
    var popup = document.createElement("div");
    popup.className = className;
    popup.innerHTML = `
      <div class="video-container">
        <iframe src="${url}" frameborder="0" allowfullscreen></iframe>
        <button class="close-video">X</button>
      </div>
    `;
    document.body.appendChild(popup);
    popup.querySelector(".close-video").addEventListener("click", function () {
      document.body.removeChild(popup);
    });
  }
});
