// ====================== About CSR Slider ======================
document.addEventListener("DOMContentLoaded", () => {
    const $slider = $("#list1-about-csr");

    const initCSRSlider = () => {
        // Responsive settings
        let settings = {
            centerMode: true,
            centerPadding: "60px",
            slidesToShow: 3,
            accessibility: false,
            arrows: false, // <-- disable default slick arrows
        };

        if (window.innerWidth < 1200 && window.innerWidth > 767) {
            settings = {
                centerMode: true,
                autoplay: true,
                centerPadding: "30px",
                slidesToShow: 2,
                accessibility: false,
                adaptiveHeight: true,
                arrows: false, // <-- disable default slick arrows
            };
        } else if (window.innerWidth <= 767) {
            settings = {
                autoplay: true,
                centerPadding: "30px",
                slidesToShow: 1,
                accessibility: false,
                adaptiveHeight: true,
                arrows: false, // <-- disable default slick arrows
            };
        }

        // Re-initialize slick
        if ($slider.hasClass("slick-initialized")) {
            $slider.slick("unslick");
        }
        $slider.slick(settings);

        // Bind custom Prev/Next buttons
        $("#list1-about-csrPrev").off("click").on("click", () => $slider.slick("slickPrev"));
        $("#list1-about-csrNext").off("click").on("click", () => $slider.slick("slickNext"));
    };

    // Init + reinit on resize
    initCSRSlider();
    window.addEventListener("resize", initCSRSlider);
});