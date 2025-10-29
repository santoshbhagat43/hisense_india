"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAboutMenu } from "../contexts/AboutMenuContext";

import { MenuData, MenuItem } from "@/types/general";

const Header: React.FC<{ menuList: unknown }> = ({ menuList }) => {
  console.log(menuList, "menuList");

  const { showAboutMenu, activeSlug } = useAboutMenu();



  const [headerRightMenu, setHeaderRightMenu] = useState<MenuItem[]>([]);
  const [headerLeftMenu, setHeaderLeftMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (menuList && Array.isArray(menuList)) {
      // Find the main header menu (slug: "header")
      const headerMenu = menuList.find((menu) => menu.slug === "header");
      if (headerMenu && headerMenu.items) {
        setHeaderLeftMenu(headerMenu.items);
      }

      // Find the header right menu if it exists
      const headerRightMenuData = menuList.find(
        (menu) => menu.slug === "header-right-menu"
      );
      if (headerRightMenuData && headerRightMenuData.items) {
        setHeaderRightMenu(headerRightMenuData.items);
      }
    }

    // ====================== Header Navigation ======================
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
    document.querySelectorAll(".toggle-dropdown").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const menu = toggle.closest("li")?.querySelector(".dropdown-menu");
        if (menu) menu.classList.add("menu-in");
      });
    });

    // Mobile back buttons
    document.querySelectorAll(".mobile-back").forEach((btn) => {
      btn.addEventListener("click", () => {
        const menu = btn.closest(".dropdown-menu");
        if (menu) menu.classList.remove("menu-in");
      });
    });

    // Mark second-nav links as active based on current URL
    document.querySelectorAll(".second-nav a").forEach((link) => {
      if (
        window.location.href.indexOf(
          (link as HTMLAnchorElement).getAttribute("href") || ""
        ) > -1
      ) {
        link.parentElement?.classList.add("active");
      }
    });

    // ====================== Scroll Direction (Header Toggle) ======================
    let lastScroll = 0;
    const header = document.querySelector("header");
    const notice = document.querySelector(".important-notice");

    const onScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        document.body.classList.remove("scroll-up");
        return;
      }

      if (
        currentScroll > lastScroll &&
        !document.body.classList.contains("scroll-down")
      ) {
        // Scroll Down
        document.body.classList.remove("scroll-up");
        document.body.classList.add("scroll-down");
        header?.classList.add("hide");

        if (notice) {
          const nHeight =
            (notice.querySelector(".content") as HTMLElement)?.offsetHeight ||
            0;
          (notice as HTMLElement).style.transform = `translateY(-${nHeight}px)`;
        }
      } else if (
        currentScroll < lastScroll &&
        document.body.classList.contains("scroll-down")
      ) {
        // Scroll Up
        document.body.classList.remove("scroll-down");
        document.body.classList.add("scroll-up");
        header?.classList.remove("hide");

        if (notice) {
          (notice as HTMLElement).style.transform = "translateY(0)";
        }
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", onScroll);

    // ====================== Searchbox ======================
    const btnSearch = document.getElementById("btnSearch");
    const searchBox = document.querySelector(".searchbox");
    const searchInput = document.querySelector(
      "#keyword"
    ) as HTMLInputElement | null;
    const closeBtn = document.querySelector(".searchInput .close");
    const searchBgAll = document.querySelectorAll(".searchbox .searchBg");
    const searchDown = document.querySelector(".search-down");

    if (btnSearch && searchBox) {
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

      btnSearch.addEventListener("click", (e) => {
        e.preventDefault();
        openSearch();
      });

      closeBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        closeSearch();
      });

      searchBgAll.forEach((bg) => bg.addEventListener("click", closeSearch));

      searchInput?.addEventListener("input", function () {
        const hasText = this.value.trim() !== "";
        searchBox.classList.toggle("show-suggestions", hasText);
        searchDown?.classList.toggle("downOpen", hasText);
      });
    }

    // ====================== Footer Accordion ======================
    const mq = window.matchMedia("(max-width: 1023px)");
    const rows = document.querySelectorAll(
      "footer .footer-links-container .footer-links ul.col li.row"
    );

    const closeAll = () => {
      rows.forEach((row) => {
        row.classList.remove("show");
        (row as HTMLElement).style.maxHeight = "58px";
      });
    };

    const toggleRow = (row: Element) => {
      const isOpen = row.classList.contains("show");
      closeAll();
      if (!isOpen) {
        row.classList.add("show");
        (row as HTMLElement).style.maxHeight = row.scrollHeight + "px";
      }
    };

    const applyMode = () => {
      if (mq.matches) {
        closeAll();
        rows.forEach((row) => {
          const toggle = row.querySelector(".accordion-toggle");
          if (toggle) {
            (toggle as HTMLElement).onclick = (e) => {
              e.preventDefault();
              toggleRow(row);
            };
          }
        });
      } else {
        rows.forEach((row) => {
          row.classList.remove("show");
          (row as HTMLElement).style.maxHeight = "none";
        });
      }
    };

    mq.addEventListener("change", applyMode);
    applyMode();

    // ====================== Back To Top ======================
    const backToTopBtn = document.querySelector(".btn-backtotop");

    if (backToTopBtn) {
      // Show/Hide button
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add("show");
        } else {
          backToTopBtn.classList.remove("show");
        }
      });

      // Smooth scroll
      backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", applyMode);
    };
  }, [menuList]);

  return (
    <>
      {/* <!-- Header Start --> */}
      <header>
        <nav className="main-nav">
          <Link className="logo" href="/">
            Hisense International
          </Link>
          <div className="navbar" id="navbar">
            <div className="navigations">
              <ul className="left">
                {headerLeftMenu
                  ?.filter((item: MenuItem) => item.parent === "0")
                  .map((item: MenuItem) => {
                    // Find sub-menu items whose parent is this item's id
                    const subMenuItems = headerLeftMenu.filter(
                      (subItem: MenuItem) => subItem.parent === String(item.id)
                    );
                    if (subMenuItems.length > 0) {
                      return (
                        <li key={item.id}>
                          <Link href={item.url} target={item.target} rel={""}>
                            {item.title}
                          </Link>
                          <a
                            className="toggle-dropdown"
                            id={`toggle-dropdown-${item.id}`}
                            aria-haspopup="true"
                            aria-expanded="false"
                            aria-label="Toggle dropdown"
                            href="#"
                          >
                            {" "}
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby={`toggle-dropdown-${item.id}`}
                          >
                            <button
                              className="mobile-back"
                              type="button"
                              aria-label="Toggle sub navigation"
                            >
                              <span className="navbar-back-icon"></span>
                            </button>
                            <div className="section-title">{item.title}</div>
                            <div className="sub-menu">
                              {subMenuItems.map((subItem: MenuItem) => (
                                <Link
                                  key={subItem.id}
                                  href={subItem.url}
                                  target={subItem.target}
                                  rel={""}
                                >
                                  <span className="thumbnail">
                                      <div className="img">
                                        <img src={subItem.image}
                                          alt={subItem.title} />
                                      </div>
                                    </span>
                                  <span className="title">{subItem.title}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </li>
                      );
                    } else {
                      return (
                        <li key={item.id}>
                          <Link href={item.url} target={item.target} rel={""}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    }
                  })}
              </ul>
              <ul className="right">
                {headerRightMenu
                  ?.filter((item: MenuItem) => item.parent === "0")
                  .map((item: MenuItem) => {
                    // Find sub-menu items whose parent is this item's id
                    const subMenuItems = headerRightMenu.filter(
                      (subItem: MenuItem) => subItem.parent === String(item.id)
                    );
                    if (subMenuItems.length > 0) {
                      return (
                        <li key={item.id}>
                          <Link href={item.url} target={item.target} rel={""}>
                            {item.title}
                          </Link>
                          <a
                            className="toggle-dropdown"
                            id={`toggle-dropdown-${item.id}`}
                            aria-haspopup="true"
                            aria-expanded="false"
                            aria-label="Toggle dropdown"
                            href="#"
                          >
                            {" "}
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby={`toggle-dropdown-${item.id}`}
                          >
                            <button
                              className="mobile-back"
                              type="button"
                              aria-label="Toggle sub navigation"
                            >
                              <span className="navbar-back-icon"></span>
                            </button>
                            <div className="section-title">{item.title}</div>
                            <div className="sub-menu">
                              {subMenuItems.map((subItem: MenuItem) => (
                                <Link
                                  key={subItem.id}
                                  href={subItem.url}
                                  target={subItem.target}
                                  rel={""}
                                >
                                  <span className="thumbnail">
                                      <div className="img">
                                        <img src={subItem.image}
                                          alt={subItem.title} />
                                      </div>
                                    </span>
                                  <span className="title">{subItem.title}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </li>
                      );
                    } else {
                      return (
                        <li key={item.id}>
                          <Link href={item.url} target={item.target} rel={""}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    }
                  })}
              </ul>
            </div>
          </div>
          <Link className="icon-region" href="https://global.hisense.com" target="_blank" rel="noopener noreferrer">
            International
          </Link>
          <a className="icon-search" id="btnSearch" href="#"></a>
          <button
            className="mobile-nav-toggle"
            type="button"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <nav className={showAboutMenu ? "second-nav" : "second-nav d-none"}>
          <div className="second-nav-items" key={activeSlug}>
            <ul>
              <li>
                <Link href="/overview" className={activeSlug === "overview" ? "active" : ""}>About Hisense</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/overview" className={activeSlug === "overview" ? "active" : ""}>Overview</Link>
              </li>
              <li>
                <Link href="/history" className={activeSlug === "history" ? "active" : ""}>History</Link>
              </li>
              <li>
                <Link href="/values" className={activeSlug === "values" ? "active" : ""}>Values</Link>
              </li>
              <li>
                <Link href="/csr" className={activeSlug === "csr" ? "active" : ""}> CSR</Link>
              </li>
              <li>
                <Link href="/technology" className={activeSlug === "technology" ? "active" : ""}>Technology</Link>
              </li>
              <li>
                <Link href="/newsroom" className={activeSlug === "newsroom" ? "active" : ""}>Newsroom</Link>
              </li>
              <li>
                <Link href="/partnership" className={activeSlug === "partnership" ? "active" : ""}>Partnership</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* <!-- Header End --> */}

      {/* <!-- Searchbox start  --> */}
      <div className="searchbox">
        <div className="searchbar">
          <div className="searchInput">
            <input
              id="keyword"
              type="search"
              autoComplete="off"
              placeholder="Search Hisense  "
            />
            <a className="close" href="#"></a>
          </div>
          <div className="search-down">
            <dl className="text-list">
              <dt>Popular Searches</dt>
              <dd>
                <Link href="#">H50 Zoom</Link>
                <Link href="#">ULED 4K TV U7G</Link>
                <Link href="#">Laser TV Series</Link>
                <Link href="#">About Hisense</Link>
                <Link href="#">TV Selection Guide</Link>
              </dd>
            </dl>
            <dl className="text-list">
              <dt>Suggested Searches</dt>
              <dd className="arrow"></dd>
            </dl>
            <div className="related-list">
              <div className="title">Related Links</div>
            </div>
          </div>
          <div className="searchBg"></div>
        </div>
        <div className="searchBg"></div>
      </div>
      {/* <!-- Searchbox end  --> */}
    </>
  );
};

export default Header;
