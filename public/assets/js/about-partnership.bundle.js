document.addEventListener("DOMContentLoaded", function () {
  // Left side slider (Slick)
  $("#partnership-silder .carousel").slick({
    slidesToShow: 1,
    arrows: false,
    dots: false
  });

  // Right side slider (Swiper) with GSAP animation
  const swiper = new Swiper(".bannerright .imageInfo", {
    slidesPerView: "auto",
    centeredSlides: true,
    on: {
      setTranslate: function () {
        gsap.to(this.$wrapperEl[0], {
          duration: 1,
          x: this.translate,
          ease: "power4.out"
        });
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const overTheYearsSwiper = new Swiper(".overTheYears", {
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
    loop: false,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".btnNext",
      prevEl: ".btnPrev",
    },
  });

  // Function to dynamically set freeMode and slidesPerGroup based on viewport
  function updateSwiperSettings() {
    const isMobile = window.innerWidth < 767;
    overTheYearsSwiper.params.freeMode = !isMobile;
    overTheYearsSwiper.params.slidesPerGroup = isMobile ? 1 : 3;
    overTheYearsSwiper.params.centeredSlides = isMobile;
    overTheYearsSwiper.update();
  }

  // Initial call
  updateSwiperSettings();

  // Update on window resize
  window.addEventListener("resize", updateSwiperSettings);

  // Optional: video hover for desktop
  document.querySelectorAll(".imageItem .imgInfo[data-video=video]").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const desktopDiv = item.querySelector(".desktop-only");
      const videoSrc = desktopDiv.getAttribute("video");
      if (desktopDiv && videoSrc) {
        desktopDiv.innerHTML = `<video muted autoplay loop src="${videoSrc}" style="opacity:0"></video>`;
        const videoEl = desktopDiv.querySelector("video");
        videoEl.animate([{opacity:0}, {opacity:1}], {duration:500, fill:"forwards"});
        videoEl.play();
      }
    });
    item.addEventListener("mouseleave", () => {
      const desktopDiv = item.querySelector(".desktop-only");
      if (desktopDiv) desktopDiv.innerHTML = "";
    });
  });

  // Optional: filtering by type
  document.querySelectorAll("#tag li").forEach((li) => {
    li.addEventListener("click", () => {
      const type = li.getAttribute("type");
      document.querySelectorAll("#tag li.cur").forEach(el => el.classList.remove("cur"));
      li.classList.add("cur");
      document.querySelectorAll(".imageItem[data-type]").forEach((slide) => {
        if (!type) slide.classList.remove("hidden");
        else if (slide.dataset.type !== type) slide.classList.add("hidden");
        else slide.classList.remove("hidden");
      });

      // Show "no result" if all are hidden
      document.querySelectorAll("section.imageBox").forEach((section) => {
        const hiddenCount = section.querySelectorAll(".imageItem[data-type].hidden").length;
        const totalCount = section.querySelectorAll(".imageItem[data-type]").length;
        const noResult = section.querySelector(".noResult");
        if (noResult) {
          if (hiddenCount === totalCount) noResult.classList.remove("hidden");
          else noResult.classList.add("hidden");
        }
      });

      // Update Swiper after filtering
      overTheYearsSwiper.update();
    });
  });
});