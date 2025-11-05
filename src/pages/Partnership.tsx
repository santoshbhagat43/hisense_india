"use client";

import "@/styles/about.css";
import { useAboutMenu } from "@/contexts/AboutMenuContext";
import { useEffect } from "react";
import { PartnershipData } from "@/types/general";

export default function Partnership({ pageData }: { pageData: PartnershipData }) {
  const { setShowAboutMenu, handleActiveSlug } = useAboutMenu();

  useEffect(() => {
    setShowAboutMenu(true);
    handleActiveSlug("overview");

    return () => {
      setShowAboutMenu(false);
    };
  }, [setShowAboutMenu, handleActiveSlug]);

  return (
    <div className="main-container">
      <div className="about-partnership">
        <section className="topbanner">
          <section className="bannerleft" id="partnership-silder">
            <div className="carousel">
              <div className="slick-slide-item">
                <div
                  className="bg desktop-only"
                  style={{
                    background:
                      `url(${pageData?.acf?.page_data[0]?.banner_desktop_image?.url}) no-repeat`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  role="img"
                  aria-label="alt"
                ></div>
                <div
                  className="bg mobile-only"
                  style={{
                    background:
                      `url(${pageData?.acf?.page_data[0]?.banner_mobile_image?.url}) no-repeat`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  role="img"
                  aria-label="alt"
                ></div>
                <div className="text-info">
                  <h1 className="hisenseBold" dangerouslySetInnerHTML={{ __html: pageData?.acf?.page_data[0]?.title }} />
                </div>
                <div className="img-overlay"></div>
              </div>
            </div>
          </section>

          <section className="bannerright">
            <div className="imageBox">
              <div className="imageList">
                <div className="imageInfo">
                  <div className="swiper-wrapper">
                    <div className="imageItem swiper-slide">
                      <div className="imageTran">
                        <div className="imgInfo" data-video="">
                          <div className="image3D">
                            <div
                              className="image desktop-only"
                              style={{
                                background:
                                  "url(assets/images/Banners/20230901-1-list.jpg) no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                              }}
                            ></div>
                            <div
                              className="image mobile-only"
                              style={{
                                background:
                                  "url(assets/images/Banners/20230901-1-list.jpg) no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                              }}
                            ></div>
                          </div>
                          <div className="textBox">
                            <div className="textInfo">
                              <h4 className="hisenseBold">
                                Third time’s a charm: Hisense extends strategic
                                partnership with UEFA to sponsor EURO 2024
                              </h4>
                              <a
                                className="hisenseMedium nostyle btn_more"
                                href="#"
                              >
                                See More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="text-box">
          <div className="container">
            <div className="text-box-info text-center">
              <h3 className="hisenseBold">
                Over the years, Hisense has sponsored big sporting events and
                team sponsorships
              </h3>
            </div>
          </div>
        </section>

        <section className="imageBox">
          <div className="imageTitle mobile-only"></div>
          <div className="imageList">
            <div className="imageInfo overTheYears">
              <a className="btnPrev"></a>
              <a className="btnNext"></a>
              <div className="swiper-wrapper">
                <div className="imageItem swiper-slide pcTitleItem desktop-only">
                  <div className="pcTitle hisenseBold">
                    <div className="text"></div>
                  </div>
                </div>

                <div className="imageItem swiper-slide" data-type="Worldwide">
                  <div className="imageTran">
                    <div className="imgInfo" data-video="video">
                      <div className="image3D">
                        <div
                          className="image desktop-only"
                          style={{
                            background:
                              "url(assets/images/20230920-1-list.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div
                          className="image mobile-only"
                          style={{
                            background:
                              "url(assets/images/20230920-1-list.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </div>
                      <div className="textBox">
                        <div className="textInfo">
                          <h4 className="hisenseBold">
                            Hisense and Paris Saint-Germain Celebrates the
                            Renewal of Their Partnership
                          </h4>
                          <a
                            className="hisenseMedium nostyle btn_more"
                            href="#"
                          >
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imageItem swiper-slide" data-type="Worldwide">
                  <div className="imageTran">
                    <div className="imgInfo" data-video="video">
                      <div className="image3D">
                        <div
                          className="image desktop-only"
                          style={{
                            background:
                              "url(assets/images/20230920-1-list.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div
                          className="image mobile-only"
                          style={{
                            background:
                              "url(assets/images/20230920-1-list.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </div>
                      <div className="textBox">
                        <div className="textInfo">
                          <h4 className="hisenseBold">
                            Third time’s a charm: Hisense extends strategic
                            partnership with UEFA to sponsor EURO 2024
                          </h4>
                          <a
                            className="hisenseMedium nostyle btn_more"
                            href="#"
                          >
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imageItem swiper-slide" data-type="Worldwide">
                  <div className="imageTran">
                    <div className="imgInfo" data-video="video">
                      <div className="image3D">
                        <div
                          className="image desktop-only"
                          style={{
                            background:
                              "url(assets/images/euro_thumbnail.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div
                          className="image mobile-only"
                          style={{
                            background:
                              "url(assets/images/euro_thumbnail.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </div>
                      <div className="textBox">
                        <div className="textInfo">
                          <h4 className="hisenseBold">
                            Sponsoring EURO 2020 Is The Inevitable Choice Of
                            Hisense&apos;s Globalization Strategy
                          </h4>
                          <a
                            className="hisenseMedium nostyle btn_more"
                            href="#"
                          >
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imageItem swiper-slide" data-type="Worldwide">
                  <div className="imageTran">
                    <div className="imgInfo" data-video="video">
                      <div className="image3D">
                        <div
                          className="image desktop-only"
                          style={{
                            background:
                              "url(assets/images/euro_thumbnail.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div
                          className="image mobile-only"
                          style={{
                            background:
                              "url(assets/images/euro_thumbnail.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </div>
                      <div className="textBox">
                        <div className="textInfo">
                          <h4 className="hisenseBold">
                            Hisense Becomes Official Sponsor Of FIFA World Cup
                            Qatar 2022™
                          </h4>
                          <a
                            className="hisenseMedium nostyle btn_more"
                            href="#"
                          >
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imageItem swiper-slide" data-type="Worldwide">
                  <div className="imageTran">
                    <div className="imgInfo" data-video="video">
                      <div className="image3D">
                        <div
                          className="image desktop-only"
                          style={{
                            background:
                              "url(assets/images/euro_thumbnail.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div
                          className="image mobile-only"
                          style={{
                            background:
                              "url(assets/images/euro_thumbnail.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </div>
                      <div className="textBox">
                        <div className="textInfo">
                          <h4 className="hisenseBold">
                            Sponsoring EURO 2x020 Is The Inevitable Choice Of
                            Hisense&apos;s Globalization Strategy
                          </h4>
                          <a
                            className="hisenseMedium nostyle btn_more"
                            href="#"
                          >
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imageItem swiper-slide" data-type="Worldwide">
                  <div className="imageTran">
                    <div className="imgInfo" data-video="video">
                      <div className="image3D">
                        <div
                          className="image desktop-only"
                          style={{
                            background:
                              "url(assets/images/euro_thumbnail.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div
                          className="image mobile-only"
                          style={{
                            background:
                              "url(assets/images/euro_thumbnail.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </div>
                      <div className="textBox">
                        <div className="textInfo">
                          <h4 className="hisenseBold">
                            Sponsoring EURO 2020 Is The Inevitable Choice Of
                            Hisense&apos;s Globalization Strategy
                          </h4>
                          <a
                            className="hisenseMedium nostyle btn_more"
                            href="#"
                          >
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="imageItem swiper-slide desktop-only">
                  <div style={{ width: "80px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
