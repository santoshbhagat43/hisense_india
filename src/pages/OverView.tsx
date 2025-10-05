"use client";

import Link from "next/link";

import "@/styles/about.css";
import { useAboutMenu } from "@/contexts/AboutMenuContext";
import { useEffect } from "react";

export default function OverView() {
  const { setShowAboutMenu } = useAboutMenu();

  useEffect(() => {
    setShowAboutMenu(true);

    return () => {
      setShowAboutMenu(false);
    };
  }, [setShowAboutMenu]);

  return (
    <div className="main-container">
      <div className="about-overview">
        <section id="overview-silder">
          <div className="text-box desktop-only">
            <div
              className="text-box-with-image"
              style={{
                background:
                  "url(/assets/images/Banners/demo_1_Desktop.jpg) no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              role="img"
              aria-label="Hisense In Love with technology."
            >
              <div className="img-overlay"></div>
            </div>
            <div className="two-box-info absolute-c-c-overview">
              <h1 className="hisenseBold text-center">
                <p>
                  In <span>Love</span> with Technology
                </p>
              </h1>
            </div>
          </div>
          <div className="text-box mobile-only">
            <div
              className="text-box-with-image"
              style={{
                background:
                  "url(/assets/images/Banners/demo_mobile.webp) no-repeat;background-position:center;background-size: cover;",
              }}
              role="img"
              aria-label="Hisense In Love with technology."
            >
              <div className="img-overlay"></div>
            </div>
            <div className="two-box-info absolute-c-c-overview">
              <h1 className="hisenseBold text-center">
                <p>
                  In <span>Love</span> with Technology
                </p>
              </h1>
            </div>
          </div>
        </section>
        <section className="text-box">
          <div className="container">
            <div className="text-box-info overview overviwe-font text-center">
              <h2 className="hisenseBold">Hisense, Your Reliable Partner</h2>
              <p className="hisenseLight">
                Aspiring to become the most reliable brand in the world with
                more than a century of brand heritage, we aim to continually
                pursue scientific and technological innovation in hopes to
                improve overall quality of life and bring happiness to millions
                of families.
              </p>
            </div>
          </div>
        </section>
        <section className="two-box-info-overview">
          <div className="container overview-container">
            <div
              className="left-container-overview"
              style={{ textAlign: "left" }}
            >
              <div className="h-100">
                <div className="two-box-info-content">
                  <div className="hisenseMedium">History</div>

                  <h3 className="hisenseBold">
                    Hisense has established 64 overseas companies and offices
                    for localization operation
                  </h3>

                  <a className="hisenseMedium overlay-gray" href="#">
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className="right-container-overview">
              <div className=" w-100 h-100 desktop-only">
                <div
                  className="two-box-img"
                  style={{
                    background:
                      "url(/assets/images/Banners/building.jpg) no-repeat;background-position: center;background-size: cover;",
                  }}
                  role="img"
                  aria-label="The new Hisense building image"
                >
                  <h4 className="hisenseBold">2016 - Present</h4>
                </div>
              </div>
              <div className="two-box-image-carousel w-100 h-100 mobile-only">
                <div
                  className="two-box-img"
                  style={{
                    background:
                      "url(/assets/images/Banners/building.jpg) no-repeat;background-position: center;background-size: cover;",
                  }}
                  role="img"
                  aria-label="The new Hisense building image"
                >
                  <h4 className="hisenseBold">2016 - Present</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-box">
          <div className="container overview-container">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder zoom desktop-only"
                style={{
                  background:
                    "url(/assets/images/Banners/discover_desktop.webp) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Hisense Industrial Groups"
              >
                <div className="img-overlay"></div>
              </div>
              <div
                className="text-box-with-image bg-holder zoom mobile-only"
                style={{
                  background:
                    "url(/assets/images/Banners/discover_mobile.webp) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Hisense Industrial Groups"
              >
                <div className="img-overlay"></div>
              </div>

              <div className="two-box-info absolute-c-c">
                <div className="hisenseMedium">Industrial Group</div>

                <h2 className="hisenseBold text-center">
                  <p>Industrial Sectors &amp; Companies</p>
                </h2>

                <a className="hisenseMedium nostyle btn_more" href="#">
                  See More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="text-box">
          <div className="container overview-container">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder zoom desktop-only"
                style={{
                  background:
                    "url(/assets/images/Banners/discover_desktop.webp) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Values"
              >
                <div className="img-overlay"></div>
              </div>
              <div
                className="text-box-with-image bg-holder zoom mobile-only"
                style={{
                  background:
                    "url(/assets/images/Banners/discover_mobile.webp) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Values"
              >
                <div className="img-overlay"></div>
              </div>

              <div className="two-box-info absolute-c-c">
                <div className="hisenseMedium">Value</div>

                <h2 className="hisenseBold text-center">
                  <p>
                    Everything we do should make your{" "}
                    <span>
                      life
                      <br /> simpler
                    </span>
                  </p>
                </h2>

                <a
                  className="hisenseMedium nostyle btn_more"
                  href="values.html"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="text-box">
          <div className="container overview-container">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder zoom desktop-only"
                style={{
                  background:
                    "url(/assets/images/Banners/discover_desktop.webp) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Hisense participation in corporate social responsibility"
              >
                <div className="img-overlay"></div>
              </div>
              <div
                className="text-box-with-image bg-holder zoom mobile-only"
                style={{
                  background:
                    "url(/assets/images/Banners/demo_mobile.webp) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Hisense participation in corporate social responsibility"
              >
                <div className="img-overlay"></div>
              </div>

              <div className="two-box-info absolute-c-c">
                <div className="hisenseMedium">
                  Corporate Social Responsibility
                </div>

                <h2 className="hisenseBold text-center">
                  <p>
                    <span>Active</span> in social public welfare
                  </p>
                </h2>

                <a className="hisenseMedium nostyle btn_more" href="csr.html">
                  See More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="text-box">
          <div className="container overview-container">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder zoom desktop-only"
                style={{
                  background:
                    "url(/assets/images/Banners/discover_desktop.webp) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Hisense innovates through technology"
              >
                <div className="img-overlay"></div>
              </div>
              <div
                className="text-box-with-image bg-holder zoom mobile-only"
                style={{
                  background:
                    "url(/assets/images/Banners/mobile.webp) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Hisense innovates through technology"
              >
                <div className="img-overlay"></div>
              </div>

              <div className="two-box-info absolute-c-c">
                <div className="hisenseMedium">Technology</div>

                <h2 className="hisenseBold text-center">
                  <p>
                    <span>Innovation</span> through experience
                  </p>
                </h2>

                <a
                  className="hisenseMedium nostyle btn_more"
                  href="technology.html"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="text-box">
          <div className="container overview-container">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder zoom desktop-only"
                style={{
                  background:
                    "url(/assets/images/hisense-laser-tv-100-inches.jpg) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Hisense Newsroom"
              >
                <div className="img-overlay"></div>
              </div>
              <div
                className="text-box-with-image bg-holder zoom mobile-only"
                style={{
                  background:
                    "url(/assets/images/hisense-laser-tv-alr-screen-mobile.jpg) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Hisense Newsroom"
              >
                <div className="img-overlay"></div>
              </div>

              <div className="two-box-info absolute-c-c">
                <h2 className="hisenseBold text-center">Newsroom</h2>

                <a
                  className="hisenseMedium nostyle btn_more"
                  href="newsroom.html"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="text-box">
          <div className="container overview-container">
            <div className="bg-overflow-h">
              <div
                className="text-box-with-image bg-holder zoom desktop-only"
                style={{
                  background:
                    "url(/assets/images/Banners/discover_desktop.webp) no-repeat; background-position: center; background-size: cover;",
                }}
                role="img"
                aria-label="Hisense Partnership"
              >
                <div className="img-overlay"></div>
              </div>
              <div
                className="text-box-with-image bg-holder zoom mobile-only"
                style={{
                  background:
                    "url('assets/images/Banners/demo_mobile.webp') no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                role="img"
                aria-label="Hisense Partnership"
              >
                <div className="img-overlay"></div>
              </div>

              <div className="two-box-info absolute-c-c">
                <h2 className="hisenseBold text-center">
                  <span>Hisense</span> Partnership
                </h2>

                <a
                  className="hisenseMedium nostyle btn_more"
                  href="partnership.html"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="green-text-box">
          <div className="container">
            <div className="green-text-box-info">
              <div className="hisenseBold">
                We’ll be happy to help you in any way we can
              </div>
              <Link className="hisenseMedium overlay-gray" href="/">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
