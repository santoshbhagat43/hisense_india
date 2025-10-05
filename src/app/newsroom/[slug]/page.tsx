import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsroom Details - Hisense Global",
  description: "Hisense India - Latest news, press releases, and company updates",
  keywords: "Hisense India, Newsroom, Press Release, News, Company Updates, Awards",
};

interface NewsroomDetailPageProps {
  params: {
    slug: string;
  };
}

export default function NewsroomDetailPage({ params: { slug } }: NewsroomDetailPageProps) {
  // TODO: Use slug parameter to fetch dynamic newsroom content
  console.log('Newsroom Detail Page for slug:', slug);
  
  return (
    <div className="page-wrapper">
      <div className="main-container">
        <div className="about-csr-details">
          <section className="mainText text-box">
            <div className="container">
              <div className="text-box-info text-center">
                <h5 className="topic">Press Release</h5>
                <h1 className="hisenseBold">Hisense Display Technology Powers VAR Viewing at FIFA Club World Cup 2025™</h1>
                <h5 className="date">08 July 2025</h5>
              </div>
            </div>
          </section>

          <div className="top-banner">
            <div className="top-banner-inner">
              <Image 
                className="desktop-only" 
                src="/assets/images/20250708-banner.webp" 
                alt="Hisense Display Technology at FIFA Club World Cup 2025"
                width={1200}
                height={600}
              />
              <Image 
                className="mobile-only" 
                src="/assets/images/20250708-banner.webp" 
                alt="Hisense Display Technology at FIFA Club World Cup 2025"
                width={600}
                height={300}
              />
            </div>
          </div>

          <section className="mainText text-box">
            <div className="container">
              <div className="text-box-info text-center">
                <h6 className="hisenseLight"></h6>
              </div>
            </div>
          </section>

          <div className="main-banner">
            <div className="text-box-info slider"></div>
          </div>

          <section className="mainText text-box">
            <div className="container">
              <div className="text-box-info text-center">
                <h6 className="hisenseLight">
                  <p>
                    <b>QINGDAO, China, July 8, 2025</b> -- Hisense, a leading global brand in consumer electronics and home appliances, continues to showcase its cutting-edge display technology on the world&apos;s biggest
                    sports stages. During the FIFA Club World Cup 2025™, Hisense&apos;s state-of-the-art screens are featured in the Video Assistant Referee (VAR) room at the International Broadcast Center (IBC), providing a
                    stunningly sharp and immersive view of every match.
                  </p>
                  <br />
                  <br />
                </h6>
              </div>
            </div>
          </section>

          <div className="main-banner big-banner">
            <div className="slider">
              <div className="slide-item">
                <div className="content">
                  <Image 
                    className="desktop-only" 
                    src="/assets/images/20250708.webp" 
                    alt="Hisense Display Technology Powers VAR Viewing at FIFA Club World Cup 2025™"
                    width={1000}
                    height={500}
                  />
                  <Image 
                    className="mobile-only" 
                    src="/assets/images/20250708.webp" 
                    alt="Hisense Display Technology Powers VAR Viewing at FIFA Club World Cup 2025™"
                    width={500}
                    height={250}
                  />
                </div>
                <div className="text-box-info">
                  <p className="hisenseLight"><i>Hisense Display Technology Powers VAR Viewing at FIFA Club World Cup 2025™</i></p>
                </div>
              </div>
            </div>
          </div>

          <section className="mainText text-box">
            <div className="container">
              <div className="text-box-info text-center">
                <h6 className="hisenseLight">
                  <p>
                    The VAR system demands extremely high standards for display performance, including ultra-high resolution, color accuracy, and real-time responsiveness. Hisense&apos;s advanced screen technology delivers
                    the clarity and precision required, ensuring that every detail of every play is visible with unmatched fidelity.
                  </p>
                  <br />
                  <p>
                    This marks the first time that FIFA has granted exclusive VAR screen branding rights to a partner, underscoring Hisense&apos;s growing influence as a trusted provider of professional display solutions for
                    elite-level sport.
                  </p>
                  <br />
                  <p>
                    Beyond the control room, Hisense branding is also prominently featured inside the stadium—from dynamic LED perimeter boards to giant jumbotrons—showcasing bold messages such as &quot;HISENSE 100&quot; TV,
                    GLOBAL No.1&quot; and &quot;#RGB-MiniLED TV&quot;. These messages reinforce Hisense&apos;s commitment to technological excellence and global leadership—highlighting flagship innovations such as 100-inch TVs, and
                    cutting-edge RGB-MiniLED displays on a world stage.
                  </p>
                  <br />
                  <p>
                    As global audiences tune in to witness the action, Hisense proudly continues its mission to enhance the viewing experience—on the pitch, in the VAR room, and at home. With its display innovations at
                    the heart of the game, Hisense empowers everyone to truly Own the Moment.
                  </p>
                  <br />
                  <br />
                </h6>
              </div>
            </div>
          </section>

          <div className="listBg">
            <section className="text-box">
              <div className="container">
                <div className="text-box-info text-center">
                  <h3 className="hisenseBold">Discover more</h3>
                </div>
              </div>
            </section>
            <section id="latest-news">
              <div className="container">
                <div className="main-visual-about-visual slider-newsroom" id="listnews-newsroom">
                  <div className="slide-item-newsroom" data-is-featured="false" data-topic="Press Release" data-year="14 December 2024">
                    <div className="content">
                      <div className="bg-overflow-h">
                        <div 
                          className="text-box-with-image bg-holder desktop-only"
                          style={{
                            background: "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="img-overlay"></div>
                        </div>
                        <div 
                          className="text-box-with-image bg-holder mobile-only"
                          style={{
                            background: "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="img-overlay"></div>
                        </div>
                      </div>
                      <div className="text-box trackin">
                        <div className="news-topics">Press Release</div>
                        <h4>Hisense Scores Record-Breaking Black Friday Sales Abroad with Surge in Large Screen TV and Smart Home Innovation</h4>
                        <div className="news-date">14 December 2024</div>
                      </div>
                      <a className="hisenseMedium nostyle" href="#"></a>
                    </div>
                  </div>
                  <div className="slide-item-newsroom" data-is-featured="false" data-topic="Press Release" data-year="09 December 2024">
                    <div className="content">
                      <div className="bg-overflow-h">
                        <div 
                          className="text-box-with-image bg-holder desktop-only"
                          style={{
                            background: "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="img-overlay"></div>
                        </div>
                        <div 
                          className="text-box-with-image bg-holder mobile-only"
                          style={{
                            background: "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="img-overlay"></div>
                        </div>
                      </div>
                      <div className="text-box trackin">
                        <div className="news-topics">Press Release</div>
                        <h4>Hisense Secures Top Spot in 100-inch TV Global Shipments</h4>
                        <div className="news-date">09 December 2024</div>
                      </div>
                      <a className="hisenseMedium nostyle" href="#"></a>
                    </div>
                  </div>
                  <div className="slide-item-newsroom" data-is-featured="false" data-topic="Press Release" data-year="03 December 2024">
                    <div className="content">
                      <div className="bg-overflow-h">
                        <div 
                          className="text-box-with-image bg-holder desktop-only"
                          style={{
                            background: "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="img-overlay"></div>
                        </div>
                        <div 
                          className="text-box-with-image bg-holder mobile-only"
                          style={{
                            background: "url(/assets/images/Banners/newsroom.jpg) no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="img-overlay"></div>
                        </div>
                      </div>
                      <div className="text-box trackin">
                        <div className="news-topics">Press Release</div>
                        <h4>Hisense PX3-PRO Crowned Top Performer in Projector Showdown</h4>
                        <div className="news-date">03 December 2024</div>
                      </div>
                      <a className="hisenseMedium nostyle" href="#"></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="text-center">
              <Link className="btn_more-newroom-detail" href="/newsroom">Return to Previous Page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
