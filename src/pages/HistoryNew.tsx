"use client"
import React, { useRef, useEffect, useState, MouseEvent } from "react";

type SlideDirection = "forward" | "backward";

interface HistoryTab {
  yearType: string;
  yearRange: string;
  yearTitle: string;
  yearDesc: React.ReactNode;
  images: { src: string; alt: string; className: string }[];
}
import "./about.css";

const historyTabs: HistoryTab[] = [
  {
    yearType: "Old Era",
    yearRange: "1988-2007",
    yearTitle: "Initial Exploration: Business Start With OEM",
    yearDesc: (
      <p>
        Hisense started its import and export business in 1988, and formally
        participated in the Canton Fair in 1993 to open up the international
        market. Hisense Confirmed, that all resources should be spent priority
        to overseas markets, and that it should expand through OEM business to
        gain channel resources and operational experience, while developing
        Hisense brand in key markets at the same time.
      </p>
    ),
    images: [
      {
        src: "/assets/images/Banners/thumb1.jpg",
        alt: "Initial Exploration, international market",
        className: "main d-only",
      },
      {
        src: "/assets/images/Banners/header_m.jpg",
        alt: "Initial Exploration, international market",
        className: "main m-only",
      },
      {
        src: "/assets/images/Banners/thumb2.jpg",
        alt: "import, export, 1988",
        className: "nd d-only",
      },
      {
        src: "/assets/images/Banners/thumb2.jpg",
        alt: "import, export, 1988",
        className: "nd m-only",
      },
      {
        src: "/assets/images/Banners/thumb3.jpg",
        alt: "1988, international market",
        className: "rd d-only",
      },
      {
        src: "/assets/images/Banners/thumb3.jpg",
        alt: "1988, international market",
        className: "rd m-only",
      },
    ],
  },
  // Add more tabs as needed...
];

function useHistoryCarousell(tabCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // For swipe support, you can use a library like react-swipeable or implement your own
  // For now, we only implement click/hover logic

  const goTo = (idx: number, direction: SlideDirection) => {
    setCurrentIndex(idx);
    // Optionally, you can add animation logic here
  };

  const next = () => {
    if (currentIndex < tabCount - 1) {
      goTo(currentIndex + 1, "forward");
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1, "backward");
    }
  };

  const onBulletClick = (idx: number) => {
    if (idx !== currentIndex) {
      goTo(idx, idx < currentIndex ? "backward" : "forward");
    }
  };

  const onTabHover = () => setHovered(true);
  const onTabOut = () => setHovered(false);

  const onShowDetail = () => setClicked(true);
  const onBackToTimeline = () => setClicked(false);

  return {
    currentIndex,
    hovered,
    clicked,
    goTo,
    next,
    prev,
    onBulletClick,
    onTabHover,
    onTabOut,
    onShowDetail,
    onBackToTimeline,
  };
}

export const HistoryCarousell: React.FC = () => {
  const tabCount = historyTabs.length;
  const {
    currentIndex,
    hovered,
    clicked,
    next,
    prev,
    onBulletClick,
    onTabHover,
    onTabOut,
    onShowDetail,
    onBackToTimeline,
  } = useHistoryCarousell(tabCount);

  return (
    <section className="history-carousell">
      <div className="history-carousell-inner">
        <div className="history-carousell-mover">
          {historyTabs.map((tab, idx) => (
            <div
              key={idx}
              className={
                "history-carousell-tab" +
                (currentIndex === idx ? " current" : "") +
                (hovered && currentIndex === idx ? " hover" : "") +
                (hovered ? " hide" : "") +
                (clicked && currentIndex === idx ? " clicked" : "")
              }
            >
              <div
                className="history-carousell-img"
                data-img_length={tab.images.length}
                onMouseOver={onTabHover}
                onMouseOut={onTabOut}
                onClick={onShowDetail}
                style={
                  {
                    // You can add transform/animation logic here
                  }
                }
              >
                {tab.images.map((img, i) => (
                  <img
                    key={i}
                    className={img.className}
                    src={img.src}
                    alt={img.alt}
                  />
                ))}
              </div>
              <div className="history-years-container">
                <div className="year-type fw-medium">{tab.yearType}</div>
                <div className="year-range fw-bold">{tab.yearRange}</div>
                <div className="year-title fw-bold">{tab.yearTitle}</div>
                <div className="year-desc fw-light">{tab.yearDesc}</div>
              </div>
            </div>
          ))}
          <div className="history-carousell-arrow previous" onClick={prev}>
            <img src="/assets/images/previous-arrow.png" alt="previous" />
            <label>2013-2016</label>
          </div>
          <div className="history-carousell-arrow next" onClick={next}>
            <img src="/assets/images/next-arrow.png" alt="next" />
            <label>2020-Now</label>
          </div>
        </div>
        <div className="history-carousell-control">
          {historyTabs.map((_, idx) => (
            <div
              key={idx}
              className={
                "history-carousell-bullet" +
                (currentIndex === idx ? " current" : "")
              }
              onClick={() => onBulletClick(idx)}
            />
          ))}
        </div>
      </div>
      {/* Show detail modal or section */}
      {clicked && (
        <div className="history-page-detail show fadein">
          <button className="b2timeline" onClick={onBackToTimeline}>
            Back to Timeline
          </button>
          {/* You can render more detail here */}
          <div>{historyTabs[currentIndex].yearTitle}</div>
          <div>{historyTabs[currentIndex].yearDesc}</div>
        </div>
      )}
    </section>
  );
};

export default function HistoryNew() {
  return (
    <div className="main-container">
      <h1 className="visuallyhidden">History of Hisense</h1>
      <section className="history-carousell">
        <div className="history-carousell-inner">
          <div className="history-carousell-mover">
            <div className="history-carousell-tab current">
              <div className="history-carousell-img" data-img_length="3">
                <img
                  className="main d-only"
                  src="/assets/images/Banners/thumb1.jpg"
                  alt="Initial Exploration, international market"
                />
                <img
                  className="main m-only"
                  src="/assets/images/Banners/header_m.jpg"
                  alt="Initial Exploration, international market"
                />
                <img
                  className="nd d-only"
                  src="/assets/images/Banners/thumb2.jpg"
                  alt="import, export, 1988"
                />
                <img
                  className="nd m-only"
                  src="/assets/images/Banners/thumb2.jpg"
                  alt="import, export, 1988"
                />
                <img
                  className="rd d-only"
                  src="/assets/images/Banners/thumb3.jpg"
                  alt="1988, international market"
                />
                <img
                  className="rd m-only"
                  src="/assets/images/Banners/thumb3.jpg"
                  alt="1988, international market"
                />
              </div>
              <div className="history-years-container">
                <div className="year-type fw-medium">Old Era</div>
                <div className="year-range fw-bold">1988-2007</div>
                <div className="year-title fw-bold">
                  Initial Exploration: Business Start With OEM
                </div>
                <div className="year-desc fw-light">
                  <p>
                    Hisense started its import and export business in 1988, and
                    formally participated in the Canton Fair in 1993 to open up
                    the international market. Hisense Confirmed, that all
                    resources should be spent priority to overseas markets, and
                    that it should expand through OEM business to gain channel
                    resources and operational experience, while developing
                    Hisense brand in key markets at the same time.
                  </p>
                </div>
              </div>
              <div className="history-carousell-arrow next">
                <img src="/assets/images/next-arrow.png" alt="next" />
                <label>2008-2012</label>
              </div>
            </div>
            <div className="history-carousell-tab">
              <div className="history-carousell-img" data-img_length="3">
                <img
                  className="main d-only"
                  src="/assets/images/Banners/thumb1.jpg"
                  alt="Initial Exploration, international market"
                />
                <img
                  className="main m-only"
                  src="/assets/images/Banners/header_m.jpg"
                  alt="Initial Exploration, international market"
                />
                <img
                  className="nd d-only"
                  src="/assets/images/Banners/thumb2.jpg"
                  alt="import, export, 1988"
                />
                <img
                  className="nd m-only"
                  src="/assets/images/Banners/thumb2.jpg"
                  alt="import, export, 1988"
                />
                <img
                  className="rd d-only"
                  src="/assets/images/Banners/thumb3.jpg"
                  alt="1988, international market"
                />
                <img
                  className="rd m-only"
                  src="/assets/images/Banners/thumb3.jpg"
                  alt="1988, international market"
                />
              </div>
              <div className="history-years-container">
                <div className="year-type fw-medium">Old Era</div>
                <div className="year-range fw-bold">2008-2012</div>
                <div className="year-title fw-bold">
                  Improve Marketing System &amp; Construct Hisense Brand
                </div>
                <div className="year-desc fw-light">
                  <p>
                    With the maturity of markets in South Africa, Australia,
                    Europe, North America, Hisense established more branches in
                    Germany, UK, Italy, Spain, Canada, Mexico, Japan, Dubai. It
                    established sound overseas marketing system, and realized
                    marketing localization.
                  </p>
                </div>
              </div>
              <div className="history-carousell-arrow previous">
                <img src="/assets/images/previous-arrow.png" alt="previous" />
                <label>1988-2007</label>
              </div>
              <div className="history-carousell-arrow next">
                <img src="/assets/images/next-arrow.png" alt="next" />
                <label>2013-2016</label>
              </div>
            </div>
            <div className="history-carousell-tab">
              <div className="history-carousell-img" data-img_length="3">
                <img
                  className="main d-only"
                  src="/assets/images/Banners/thumb1.jpg"
                  alt="Initial Exploration, international market"
                />
                <img
                  className="main m-only"
                  src="/assets/images/Banners/header_m.jpg"
                  alt="Initial Exploration, international market"
                />
                <img
                  className="nd d-only"
                  src="/assets/images/Banners/thumb2.jpg"
                  alt="import, export, 1988"
                />
                <img
                  className="nd m-only"
                  src="/assets/images/Banners/thumb2.jpg"
                  alt="import, export, 1988"
                />
                <img
                  className="rd d-only"
                  src="/assets/images/Banners/thumb3.jpg"
                  alt="1988, international market"
                />
                <img
                  className="rd m-only"
                  src="/assets/images/Banners/thumb3.jpg"
                  alt="1988, international market"
                />
              </div>
              <div className="history-years-container">
                <div className="year-type fw-medium">Old Era</div>
                <div className="year-range fw-bold">2013-2016</div>
                <div className="year-title fw-bold">
                  Localization of Production, Marketing, R&amp;D to Accelerate
                  Brand Development
                </div>
                <div className="year-desc fw-light">
                  <p>
                    Hisense built R&amp;D Centres and factories around the world
                    to encourage its designer and researchers to go abroad to
                    hear local demands, to improve product quality , to upgrade
                    technical level , to realize the localization of production,
                    and support the optimization of local product quality,
                    service and response.
                  </p>
                </div>
              </div>
              <div className="history-carousell-arrow previous">
                <img src="/assets/images/previous-arrow.png" alt="previous" />
                <label>2008-2012</label>
              </div>
              <div className="history-carousell-arrow next">
                <img src="/assets/images/next-arrow.png" alt="next" />
                <label>2017-2019</label>
              </div>
            </div>
            <div className="history-carousell-tab">
              <div className="history-carousell-img" data-img_length="3">
                <img
                  className="main d-only"
                  src="/assets/images/Banners/thumb1.jpg"
                  alt="Initial Exploration, international market"
                />
                <img
                  className="main m-only"
                  src="/assets/images/Banners/header_m.jpg"
                  alt="Initial Exploration, international market"
                />
                <img
                  className="nd d-only"
                  src="/assets/images/Banners/thumb2.jpg"
                  alt="import, export, 1988"
                />
                <img
                  className="nd m-only"
                  src="/assets/images/Banners/thumb2.jpg"
                  alt="import, export, 1988"
                />
                <img
                  className="rd d-only"
                  src="/assets/images/Banners/thumb3.jpg"
                  alt="1988, international market"
                />
                <img
                  className="rd m-only"
                  src="/assets/images/Banners/thumb3.jpg"
                  alt="1988, international market"
                />
              </div>
              <div className="history-years-container">
                <div className="year-type fw-medium">Old Era</div>
                <div className="year-range fw-bold">2017-2019</div>
                <div className="year-title fw-bold">
                  Operate with Full Product Category and Promote Sports
                  Marketing
                </div>
                <div className="year-desc fw-light">
                  <p>
                    Acquisition of TVS &amp; Gorenje in 2018, form Multi-Brand
                    Strategy and become official partner of EURO, FWC, PSG and
                    Fnatic since 2016
                  </p>
                </div>
              </div>
              <div className="history-carousell-arrow previous">
                <img src="/assets/images/previous-arrow.png" alt="previous" />
                <label>2013-2016</label>
              </div>
              <div className="history-carousell-arrow next">
                <img src="/assets/images/next-arrow.png" alt="next" />
                <label>2020-Now</label>
              </div>
            </div>
            <div className="history-carousell-tab">
              <div className="history-carousell-img" data-img_length="3">
                <img
                  className="main d-only"
                  src="/assets/images/Banners/thumb1.jpg"
                  alt="Initial Exploration, international market"
                />
                <img
                  className="main m-only"
                  src="/assets/images/Banners/header_m.jpg"
                  alt="Initial Exploration, international market"
                />
                <img
                  className="nd d-only"
                  src="/assets/images/Banners/thumb2.jpg"
                  alt="import, export, 1988"
                />
                <img
                  className="nd m-only"
                  src="/assets/images/Banners/thumb2.jpg"
                  alt="import, export, 1988"
                />
                <img
                  className="rd d-only"
                  src="/assets/images/Banners/thumb3.jpg"
                  alt="1988, international market"
                />
                <img
                  className="rd m-only"
                  src="/assets/images/Banners/thumb3.jpg"
                  alt="1988, international market"
                />
              </div>
              <div className="history-years-container">
                <div className="year-type fw-medium">New Era</div>
                <div className="year-range fw-bold">2020-Now</div>
                <div className="year-title fw-bold">
                  Pursue the TOP Corporation in the World
                </div>
                <div className="year-desc fw-light">
                  <p>
                    Become official partner again of EURO, FWC and PSG, and
                    accelerate the development of market position
                  </p>
                </div>
              </div>
              <div className="history-carousell-arrow previous">
                <img src="/assets/images/previous-arrow.png" alt="previous" />
                <label>2017-2019</label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="history-page-detail">
        <div
          className="history-topBanner-container d-only"
          style={{ backgroundImage: "url(assets/images/Banners/header.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              Initial Exploration: Business Start With OEM
            </div>
          </div>
        </div>
        <div
          className="history-topBanner-container m-only"
          style={{ backgroundImage: "url(assets/images/Banners/header_m.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              Initial Exploration: Business Start With OEM
            </div>
          </div>
        </div>
        <div className="history-page-container">
          <div className="histry-intro mobile_only">
            Initial Exploration: Business Start With OEM
          </div>
          <div className="histry-intro">
            <p>
              Hisense started its import and export business in 1988, and
              formally participated in the Canton Fair in 1993 to open up the
              international market. Hisense Confirmed, that all resources should
              be spent priority to overseas markets, and that it should expand
              through OEM business to gain channel resources and operational
              experience, while developing Hisense brand in key markets at the
              same time.
            </p>
          </div>
        </div>
        <div className="history-timeline">
          <div className="history-page-container with-timeline">
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">1988</div>
                <div className="timeline-title">Enterprise Spirit</div>
                <div className="timeline-desc">
                  <p>
                    In 1988, Hisense established the enterprise spirit: work
                    hard to start a business, strictly implement the policy,
                    seek truth from facts, be enthusiastic and press on
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">1993</div>
                <div className="timeline-title">Brand Name</div>
                <div className="timeline-desc">
                  <p>
                    In 1993, &quot;Qingdao brand&quot; was officially renamed
                    &quot;Hisense&quot;. In March of that year, the new
                    trademark was officially registered.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">1996</div>
                <div className="timeline-title">Hisense South Africa</div>
                <div className="timeline-desc">
                  <p>
                    Hisense South Africa was founded in October 1996, taking the
                    first step of internationalization.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">1996</div>
                <div className="timeline-title">Air Conditioning Company</div>
                <div className="timeline-desc">
                  <p>
                    In 1996, Hisense introduced frequency conversion technology
                    in China and established air conditioning company.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">1997</div>
                <div className="timeline-title">Hisense Electronics Stock</div>
                <div className="timeline-desc">
                  <p>
                    Hisense Elctronics A shares (600060) listed on Shanghai
                    Stock Exchange
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2001</div>
                <div className="timeline-title">
                  Research And Development Of Intelligent Transportation
                </div>
                <div className="timeline-desc">
                  <p>
                    In 2001, Hisense completed HiCON adaptive traffic signal
                    control system, filling the gap of high-end products of
                    China&#39;s traffic signal control system, and thus
                    determined Hisense&#39;s leading position in domestic
                    intelligent transportation technology.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2002</div>
                <div className="timeline-title">
                  Qingdao Hisense Hitachi Air-Conditioning System Co., Ltd.
                </div>
                <div className="timeline-desc">
                  <p>
                    In 2002, Hisense and Hitachi established Qingdao Hisense
                    Hitachi Air-conditioning System Co., Ltd. as a joint
                    venture, and began to set foot in the large-scale commercial
                    air conditioning market.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2005</div>
                <div className="timeline-title">Hisense Chip Born</div>
                <div className="timeline-desc">
                  <p>
                    In June 2005, China&#39;s first industrial digital video
                    processing chip with independent intellectual property
                    rights was born in Hisense, which is the first chip with
                    independent intellectual property rights and can be
                    officially industrialized in China&#39;s audio and video
                    field. The history of China&#39;s 73 million color TV sets
                    annually using foreign chips is coming to an end.scale
                    commercial air conditioning market.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2007</div>
                <div className="timeline-title">Hisense TV Line</div>
                <div className="timeline-desc">
                  <p>
                    In September 2007, Hisense TV LCD module production line was
                    put into production, which is the first LCD module
                    production line in China&#39;s color TV industry, breaking
                    the history of foreign monopoly.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="next-history-timeline-item">
          <div className="img-gallery" data-img_length="3">
            <img
              className="main d-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="main m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="nd d-only"
              src="/assets/images/Banners/thumb2.jpg"
              alt=""
            />
            <img
              className="nd m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="rd d-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="rd m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
          </div>
          <div className="history-years-container">
            <div className="year-type fw-medium">Old Era</div>
            <div className="year-range fw-bold">2008-2012</div>
            <div className="year-title fw-bold">
              Improve Marketing System &amp; Construct Hisense Brand
            </div>
            <a className="btn-discover-more">See More</a>
          </div>
        </div>
        <div className="b2timeline">
          <a>
            <img src="/assets/images/b2timeline.svg" alt="" />
            Back to timeline
          </a>
        </div>
      </div>
      <div className="history-page-detail">
        <div
          className="history-topBanner-container d-only"
          style={{ backgroundImage: "url(assets/images/Banners/header.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              Improve Marketing System &amp; Construct Hisense Brand
            </div>
          </div>
        </div>
        <div
          className="history-topBanner-container m-only"
          style={{ backgroundImage: "url(assets/images/Banners/header_m.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              Improve Marketing System &amp; Construct Hisense Brand
            </div>
          </div>
        </div>
        <div className="history-page-container">
          <div className="histry-intro mobile_only">
            Improve Marketing System &amp; Construct Hisense Brand
          </div>
          <div className="histry-intro">
            <p>
              With the maturity of markets in South Africa, Australia, Europe,
              North America, Hisense established more branches in Germany, UK,
              Italy, Spain, Canada, Mexico, Japan, Dubai. It established sound
              overseas marketing system, and realized marketing localization.
            </p>
          </div>
        </div>
        <div className="history-timeline">
          <div className="history-page-container with-timeline">
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2008</div>
                <div className="timeline-title">
                  Official Sponsor Of The Australia Open Tennis Championships
                </div>
                <div className="timeline-desc">
                  <p>
                    Official sponsor of the Australia Open Tennis Championships
                    and named the Australian Open stadium
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2008</div>
                <div className="timeline-title">
                  Launch Washing Machine Products
                </div>
                <div className="timeline-desc">
                  <p>
                    In April, 2008, whirlpool, the world&#39;s largest white
                    appliance manufacturer, and Hisense jointly established a
                    joint venture to produce white electric products such as
                    washing machines.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2010</div>
                <div className="timeline-title">2010 CES</div>
                <div className="timeline-desc">
                  <p>
                    In 2010, Zhou Houjian, chairman of Hisense Group, delivered
                    a keynote speech entitled &quot;from made in China to
                    created in China - technologies and products in emerging
                    markets&quot; at the CES Summit Forum in the United States.
                    This is the first Chinese entrepreneur to come to this
                    platform in 43 years.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2012</div>
                <div className="timeline-title">Intelligent Strategy</div>
                <div className="timeline-desc">
                  <p>
                    In 2012, a series of industrial layout were carried out
                    around the &quot;intelligent strategy&quot;: Jiangmen
                    Industrial Park, Pingdu Industrial Park, R&amp;D base, South
                    Africa Industrial Park and Shenzhen south management
                    headquarters were successively invested and constructed. In
                    order to support the goal of internationalization, at the
                    same time, large-scale overseas intelligence integration is
                    carried out to recruit international talents in the field of
                    intelligence.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="next-history-timeline-item">
          <div className="img-gallery" data-img_length="3">
            <img
              className="main d-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="main m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="nd d-only"
              src="/assets/images/Banners/thumb2.jpg"
              alt=""
            />
            <img
              className="nd m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="rd d-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="rd m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
          </div>
          <div className="history-years-container">
            <div className="year-type fw-medium">Old Era</div>
            <div className="year-range fw-bold">2013-2016</div>
            <div className="year-title fw-bold">
              Localization of Production, Marketing, R&amp;D to Accelerate Brand
              Development
            </div>
            <a className="btn-discover-more">See More</a>
          </div>
        </div>
        <div className="b2timeline">
          <a>
            <img src="/assets/images/b2timeline.svg" alt="" />
            Back to timeline
          </a>
        </div>
      </div>
      <div className="history-page-detail">
        <div
          className="history-topBanner-container d-only"
          style={{ backgroundImage: "url(assets/images/Banners/header.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              Localization of Production, Marketing, R&amp;D to Accelerate Brand
              Development
            </div>
          </div>
        </div>
        <div
          className="history-topBanner-container m-only"
          style={{ backgroundImage: "url(assets/images/Banners/header_m.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              Localization of Production, Marketing, R&amp;D to Accelerate Brand
              Development
            </div>
          </div>
        </div>
        <div className="history-page-container">
          <div className="histry-intro mobile_only">
            Localization of Production, Marketing, R&amp;D to Accelerate Brand
            Development
          </div>
          <div className="histry-intro">
            <p>
              Hisense built R&amp;D Centres and factories around the world to
              encourage its designer and researchers to go abroad to hear local
              demands, to improve product quality , to upgrade technical level ,
              to realize the localization of production, and support the
              optimization of local product quality, service and response.
            </p>
          </div>
        </div>
        <div className="history-timeline">
          <div className="history-page-container with-timeline">
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2013</div>
                <div className="timeline-title">Hisense South Africa</div>
                <div className="timeline-desc">
                  <p>
                    South Africa Industrial Park Phase II project completed and
                    put into operation
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2013</div>
                <div className="timeline-title">
                  Australian Open Tennis Championships
                </div>
                <div className="timeline-desc">
                  <p>
                    Signing ceremony for sponsorship of Australian Open Tennis
                    Championships in November 2013
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2014</div>
                <div className="timeline-title">R&amp;D Center</div>
                <div className="timeline-desc">
                  <p>
                    In October 2014, the Hisense research and development center
                    project, covering an area of 277976 square meters and with a
                    total investment of nearly 1.5 billion yuan, was put into
                    use.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2015</div>
                <div className="timeline-title">
                  Acquisition Of Sharp America
                </div>
                <div className="timeline-desc">
                  <p>
                    On July 31, 2015, Hisense announced that it would spend
                    $23.7 million on the acquisition of sharp America. The deal
                    will allow Hisense to take over sharp&#39;s television
                    business in North America and South America.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2015</div>
                <div className="timeline-title">Sponsor</div>
                <div className="timeline-desc">
                  <p>
                    Sponsor of Red Bull Racing F1 Team; Title Sponsor of NASCAR
                    Xfinity Race
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2016</div>
                <div className="timeline-title">
                  Official Sponsor Of The 2016 European Cup
                </div>
                <div className="timeline-desc">
                  <p>
                    On January 14, 2016, Hisense announced that it would become
                    the official sponsor of the 2016 European Cup, the first
                    Chinese sponsor since the establishment of the European Cup
                    56 years ago.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="next-history-timeline-item">
          <div className="img-gallery" data-img_length="3">
            <img
              className="main d-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="main m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="nd d-only"
              src="/assets/images/Banners/thumb2.jpg"
              alt=""
            />
            <img
              className="nd m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="rd d-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="rd m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
          </div>
          <div className="history-years-container">
            <div className="year-type fw-medium">Old Era</div>
            <div className="year-range fw-bold">2017-2019</div>
            <div className="year-title fw-bold">
              Operate with Full Product Category and Promote Sports Marketing
            </div>
            <a className="btn-discover-more">See More</a>
          </div>
        </div>
        <div className="b2timeline">
          <a>
            <img src="/assets/images/b2timeline.svg" alt="" />
            Back to timeline
          </a>
        </div>
      </div>
      <div className="history-page-detail">
        <div
          className="history-topBanner-container d-only"
          style={{ backgroundImage: "url(assets/images/Banners/header.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              Operate with Full Product Category and Promote Sports Marketing
            </div>
          </div>
        </div>
        <div
          className="history-topBanner-container m-only"
          style={{ backgroundImage: "url(assets/images/Banners/header_m.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              Operate with Full Product Category and Promote Sports Marketing
            </div>
          </div>
        </div>
        <div className="history-page-container">
          <div className="histry-intro mobile_only">
            Operate with Full Product Category and Promote Sports Marketing
          </div>
          <div className="histry-intro">
            <p>
              Acquisition of TVS &amp; Gorenje in 2018, form Multi-Brand
              Strategy and become official partner of EURO, FWC, PSG and Fnatic
              since 2016
            </p>
          </div>
        </div>
        <div className="history-timeline">
          <div className="history-page-container with-timeline">
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2017</div>
                <div className="timeline-title">
                  Official Sponsor Of The FIFA World Cup In 2018
                </div>
                <div className="timeline-desc">
                  <p>
                    On April 6, 2017, FIFA and Hisense Group jointly announced
                    in Beijing that Hisense became the official sponsor of the
                    FIFA World Cup in 2018, which is also the first Chinese
                    consumer electronics brand sponsor since the world cup was
                    established in nearly a century.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2017</div>
                <div className="timeline-title">Acquisition Of Toshiba</div>
                <div className="timeline-desc">
                  <p>
                    On November 14, 2017, Hisense Electric Appliance Co., Ltd.,
                    a listed company of Hisense Group, and Toshiba Co., Ltd.
                    jointly announced in Tokyo that 95% of the shares of Toshiba
                    Visual Solutions Corporation (TVS) were officially
                    transferred to Hisense
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2018</div>
                <div className="timeline-title">Hisense Family</div>
                <div className="timeline-desc">
                  <p>
                    On February 28, 2018, Hisense officially took over Toshiba
                    Visual Solutions Corporation (TVS), and acquired gorenje, a
                    white power manufacturer in Slovenia.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2019</div>
                <div className="timeline-title">50th Anniversary</div>
                <div className="timeline-desc">
                  <p>
                    In 2019, Hisense will release the world&#39;s first multi
                    screen TV and usher in the 50th anniversary of its
                    establishment.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="next-history-timeline-item">
          <div className="img-gallery" data-img_length="3">
            <img
              className="main d-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="main m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="nd d-only"
              src="/assets/images/Banners/thumb2.jpg"
              alt=""
            />
            <img
              className="nd m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="rd d-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
            <img
              className="rd m-only"
              src="/assets/images/Banners/1988.jpg"
              alt=""
            />
          </div>
          <div className="history-years-container">
            <div className="year-type fw-medium">New Era</div>
            <div className="year-range fw-bold">2020-Now</div>
            <div className="year-title fw-bold">
              Pursue the TOP Corporation in the World
            </div>
            <a className="btn-discover-more">See More</a>
          </div>
        </div>
        <div className="b2timeline">
          <a>
            <img src="/assets/images/b2timeline.svg" alt="" />
            Back to timeline
          </a>
        </div>
      </div>
      <div className="history-page-detail">
        <div
          className="history-topBanner-container d-only"
          style={{ backgroundImage: "url(assets/images/Banners/header.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              Pursue the TOP Corporation in the World
            </div>
          </div>
        </div>
        <div
          className="history-topBanner-container m-only"
          style={{ backgroundImage: "url(assets/images/Banners/header_m.jpg)" }}
        >
          <div className="history-page-container">
            <div className="history-topBanner-title">
              Pursue the TOP Corporation in the World
            </div>
          </div>
        </div>
        <div className="history-page-container">
          <div className="histry-intro mobile_only">
            Pursue the TOP Corporation in the World
          </div>
          <div className="histry-intro">
            <p>
              Become official partner again of EURO, FWC and PSG, and accelerate
              the development of market position
            </p>
          </div>
        </div>
        <div className="history-timeline">
          <div className="history-page-container with-timeline">
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2020</div>
                <div className="timeline-title">2020 CES</div>
                <div className="timeline-desc">
                  <p>
                    In January, Hisense held a CES conference in Las Vegas and
                    won eight CES product awards.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2020</div>
                <div className="timeline-title">Global Official Partner</div>
                <div className="timeline-desc">
                  <p>
                    Global Official Partner of EURO 2020
                    <br />
                    Global Official Partner of PSG Football Club
                    <br />
                    Global Official Partner of Fnatic Esports Club
                    <br />
                    Global Official Partner of Leeds United F.C.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2022</div>
                <div className="timeline-title">Global Official Sponsor</div>
                <div className="timeline-desc">
                  <p>
                    Global Official Sponsor of FIFA World Cup Qatar 2022&trade;
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2023</div>
                <div className="timeline-title">
                  Global No.2 &amp; Official Sponsor
                </div>
                <div className="timeline-desc">
                  <p>
                    Hisense extended the sponsorship with Paris Saint-Germain.
                  </p>
                  <p>
                    Hisense TV shipment share ranked second in the world for
                    three consecutive quarters after ranking second globally for
                    the whole year of 2022
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="col">
                <div className="timeline-year">2024</div>
                <div className="timeline-title">
                  CES 2024 &amp; Global Official Partner
                </div>
                <div className="timeline-desc">
                  <p>
                    Hisense won over 30 awards for multiple products in CES 2024
                  </p>
                  <p>Global Official Partner of the UEFA EURO 2024&trade;</p>
                </div>
              </div>
              <div className="col">
                <div className="timeline-img">
                  <img
                    className="d-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                  <img
                    className="m-only"
                    src="/assets/images/Banners/1988.jpg"
                    alt="Enterprise spirit, 1988"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="b2timeline">
          <a>
            <img src="/assets/images/b2timeline.svg" alt="" />
            Back to timeline
          </a>
        </div>
      </div>
    </div>
  );
}
