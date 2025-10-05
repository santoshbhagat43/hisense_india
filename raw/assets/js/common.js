// ====================== common Scripts ======================
document.addEventListener("DOMContentLoaded", () => {
  /**
   * ====================== Header Navigation ======================
   * Handles mobile navigation toggle and dropdowns.
   */
  const initHeaderNavigation = () => {
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const navbar = document.querySelector("header nav.main-nav .navigations");

    if (navToggle && navbar) {
      navToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");

        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!expanded));

        document.body.classList.toggle("menu-in");
        navToggle.classList.toggle("open");
      });
    }

    // Dropdown toggle in mobile menu
    document.querySelectorAll(".toggle-dropdown").forEach(toggle => {
      toggle.addEventListener("click", e => {
        e.preventDefault();
        const menu = toggle.closest("li")?.querySelector(".dropdown-menu");
        if (menu) menu.classList.add("menu-in");
      });
    });

    // Mobile back buttons
    document.querySelectorAll(".mobile-back").forEach(btn => {
      btn.addEventListener("click", () => {
        const menu = btn.closest(".dropdown-menu");
        if (menu) menu.classList.remove("menu-in");
      });
    });

    // Mark second-nav links as active based on current URL
    $(".second-nav a").each(function () {
      if (window.location.href.indexOf($(this).attr("href")) > -1) {
        $(this).parent().addClass("active");
      }
    });
  };


  // ====================== Scroll Direction (Header Toggle) ======================
  const initScrollDirection = () => {
    let lastScroll = 0;
    const header = document.querySelector("header");
    const notice = document.querySelector(".important-notice");

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        document.body.classList.remove("scroll-up");
        return;
      }

      if (currentScroll > lastScroll && !document.body.classList.contains("scroll-down")) {
        // Scroll Down
        document.body.classList.remove("scroll-up");
        document.body.classList.add("scroll-down");
        header?.classList.add("hide");

        if (notice) {
          const nHeight = notice.querySelector(".content")?.offsetHeight || 0;
          notice.style.transform = `translateY(-${nHeight}px)`;
        }
      } else if (currentScroll < lastScroll && document.body.classList.contains("scroll-down")) {
        // Scroll Up
        document.body.classList.remove("scroll-down");
        document.body.classList.add("scroll-up");
        header?.classList.remove("hide");

        if (notice) {
          notice.style.transform = "translateY(0)";
        }
      }

      lastScroll = currentScroll;
    });
  };

  initScrollDirection();

  /**
   * ====================== Searchbox ======================
   * Handles open/close functionality of the search box with suggestions.
   */
  const initSearchBox = () => {
    const btnSearch = document.getElementById("btnSearch");
    const searchBox = document.querySelector(".searchbox");
    const searchInput = document.querySelector("#keyword");
    const closeBtn = document.querySelector(".searchInput .close");
    const searchBgAll = document.querySelectorAll(".searchbox .searchBg");
    const searchDown = document.querySelector(".search-down");

    if (!btnSearch || !searchBox) return;

    const openSearch = () => {
      searchBox.classList.add("active");
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 50);
      }
    };

    const closeSearch = () => {
      searchBox.classList.remove("active", "show-suggestions");
      searchDown?.classList.remove("downOpen");
    };

    // Bind events
    btnSearch.addEventListener("click", e => {
      e.preventDefault();
      openSearch();
    });

    closeBtn?.addEventListener("click", e => {
      e.preventDefault();
      closeSearch();
    });

    searchBgAll.forEach(bg => bg.addEventListener("click", closeSearch));

    searchInput?.addEventListener("input", function () {
      const hasText = this.value.trim() !== "";
      searchBox.classList.toggle("show-suggestions", hasText);
      searchDown?.classList.toggle("downOpen", hasText);
    });
  };

  /**
   * ====================== Footer Accordion ======================
   * Enables accordion behavior for footer links on small screens.
   */
  const initFooterAccordion = () => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const rows = document.querySelectorAll(
      "footer .footer-links-container .footer-links ul.col li.row"
    );

    const closeAll = () => {
      rows.forEach(row => {
        row.classList.remove("show");
        row.style.maxHeight = "58px";
      });
    };

    const toggleRow = row => {
      const isOpen = row.classList.contains("show");
      closeAll();
      if (!isOpen) {
        row.classList.add("show");
        row.style.maxHeight = row.scrollHeight + "px";
      }
    };

    const applyMode = () => {
      if (mq.matches) {
        closeAll();
        rows.forEach(row => {
          const toggle = row.querySelector(".accordion-toggle");
          if (toggle) {
            toggle.onclick = e => {
              e.preventDefault();
              toggleRow(row);
            };
          }
        });
      } else {
        rows.forEach(row => {
          row.classList.remove("show");
          row.style.maxHeight = "none";
        });
      }
    };

    mq.addEventListener("change", applyMode);
    applyMode();
  };

  /**
   * ====================== Back To Top ======================
   * Shows a button on scroll and scrolls smoothly to top.
   */
  const initBackToTop = () => {
    const backToTopBtn = document.querySelector(".btn-backtotop");

    if (!backToTopBtn) return;

    // Show/Hide button
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    // Smooth scroll
    backToTopBtn.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  };

  // ====================== Init All ======================
  initHeaderNavigation();
  initSearchBox();
  initFooterAccordion();
  initBackToTop();
});
