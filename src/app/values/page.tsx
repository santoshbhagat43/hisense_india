import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us Values - Hisense Global",
  description: "Hisense India - Our Core Values: Integrity, Innovation, Customer Focus and Sustainability",
  keywords: "Hisense India, Values, Mission, Vision, Core Values",
};

export default function ValuesPage() {
  return (
    <div className="page-wrapper">
      <div className="main-container">
        <div className="about-overview about-values">
          <section id="overview-silder">
            <div className="text-box desktop-only">
              <div 
                className="text-box-with-image banner-custome"
                style={{
                  background: "url(/assets/images/Banners/demo_desktop.webp) no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                role="img" 
                aria-label="Hisense In Love with technology."
              >
                <div className="img-overlay"></div>
              </div>
              <div className="two-box-info absolute-c-c">
                <h1 className="hisenseBold text-center">
                  <p>In <span>Love</span> with Technology</p>
                </h1>
              </div>
            </div>
            <div className="text-box mobile-only">
              <div 
                className="text-box-with-image banner-custome"
                style={{
                  background: "url(/assets/images/Banners/demo_mobile.webp) no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                role="img" 
                aria-label="Hisense In Love with technology."
              >
                <div className="img-overlay"></div>
              </div>
              <div className="two-box-info absolute-c-c">
                <h1 className="hisenseBold text-center">
                  <p>In <span>Love</span> with Technology</p>
                </h1>
              </div>
            </div>
          </section>

          <section className="text-center black" id="mission-vision">
            <h3 className="hisenseBold">Mission & Vision</h3>
            <h4 className="hisenseBold custome-class">Vision</h4>
            <p className="hisenseLight">
              To be a century-old company, and to become the most reliable brand in the world.
            </p>
            <h4 className="hisenseBold custome-class">Mission</h4>
            <p className="hisenseLight">
              To pursue scientific and technological innovation, take the lead in the advanced manufacturing
              with intelligence as the core, and bring happiness to millions of families with high-quality
              products and services.
            </p>
          </section>

          <section id="our-core-value">
            <h3 className="hisenseBold black text-center">Our Core Value</h3>
            <div className="container">
              <div className="text-box values-no-space desktop-only">
                <div 
                  className="text-box-with-image bg-holder zoom"
                  style={{
                    background: "url(/assets/images/values.png) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label=""
                >
                  <div className="img-overlay"></div>
                </div>
                <div className="two-box-info absolute-c-c">
                  <h2 className="hisenseBold text-center">
                    Integrity<span className="slide-in"></span>
                  </h2>
                </div>
              </div>
              <div className="text-box values-no-space mobile-only">
                <div 
                  className="text-box-with-image bg-holder zoom"
                  style={{
                    background: "url(/assets/images/values.png) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label=""
                >
                  <div className="img-overlay"></div>
                </div>
                <div className="two-box-info values absolute-c-c">
                  <h2 className="hisenseBold text-center">
                    Integrity<span className="slide-in"></span>
                  </h2>
                </div>
              </div>
              <div className="text-box values-no-space desktop-only">
                <div 
                  className="text-box-with-image bg-holder zoom"
                  style={{
                    background: "url(/assets/images/values.png) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label=""
                >
                  <div className="img-overlay"></div>
                </div>
                <div className="two-box-info absolute-c-c">
                  <h2 className="hisenseBold text-center">
                    Innovation<span className="slide-in"></span>
                  </h2>
                </div>
              </div>
              <div className="text-box values-no-space mobile-only">
                <div 
                  className="text-box-with-image bg-holder zoom"
                  style={{
                    background: "url(/assets/images/values.png) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label=""
                >
                  <div className="img-overlay"></div>
                </div>
                <div className="two-box-info absolute-c-c">
                  <h2 className="hisenseBold text-center">
                    Innovation<span className="slide-in"></span>
                  </h2>
                </div>
              </div>
              <div className="text-box values-no-space desktop-only">
                <div 
                  className="text-box-with-image bg-holder zoom"
                  style={{
                    background: "url(/assets/images/values.png) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label=""
                >
                  <div className="img-overlay"></div>
                </div>
                <div className="two-box-info absolute-c-c">
                  <h2 className="hisenseBold text-center">
                    Customer<br />
                    Focus<span className="slide-in"></span>
                  </h2>
                </div>
              </div>
              <div className="text-box values-no-space mobile-only">
                <div 
                  className="text-box-with-image bg-holder zoom"
                  style={{
                    background: "url(/assets/images/values.png) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label=""
                >
                  <div className="img-overlay"></div>
                </div>
                <div className="two-box-info absolute-c-c">
                  <h2 className="hisenseBold text-center">
                    Customer<br />
                    Focus<span className="slide-in"></span>
                  </h2>
                </div>
              </div>
              <div className="text-box values-no-space desktop-only">
                <div 
                  className="text-box-with-image bg-holder zoom"
                  style={{
                    background: "url(/assets/images/values.png) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label=""
                >
                  <div className="img-overlay"></div>
                </div>
                <div className="two-box-info absolute-c-c">
                  <h2 className="hisenseBold text-center">
                    Sustainability<span className="slide-in"></span>
                  </h2>
                </div>
              </div>
              <div className="text-box values-no-space mobile-only">
                <div 
                  className="text-box-with-image bg-holder zoom"
                  style={{
                    background: "url(/assets/images/values.png) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label=""
                >
                  <div className="img-overlay"></div>
                </div>
                <div className="two-box-info absolute-c-c">
                  <h2 className="hisenseBold text-center">
                    Sustainability<span className="slide-in"></span>
                  </h2>
                </div>
              </div>
            </div>
            <p className="our-core-value-desc black hisenseLight text-center">
              We've always adhered to the core values of Integrity, Innovation, Customer Focus and
              Sustainability: Attributing our sustainable and healthy development to upright cadres and good
              corporate culture, attaching
              importance to R&D investment, prioritizing customer-centricity, and most importantly
              promoting precise urban governance and contributing to sustainable city development.
            </p>
          </section>

          <section className="text-box">
            <div className="overview-container">
              <div className="bg-overflow-h">
                <div 
                  className="text-box-with-image bg-holder zoom desktop-only"
                  style={{
                    background: "url(/assets/images/Banners/discover_desktop.webp) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label="Hisense participation in corporate social responsibility"
                >
                  <div className="img-overlay"></div>
                </div>
                <div 
                  className="text-box-with-image bg-holder zoom mobile-only"
                  style={{
                    background: "url(/assets/images/Banners/about_mobile.webp) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  role="img" 
                  aria-label="Hisense participation in corporate social responsibility"
                >
                  <div className="img-overlay"></div>
                </div>

                <div className="two-box-info absolute-c-c">
                  <h2 className="hisenseBold text-center">
                    <p><span>Active</span> in social public welfare</p>
                  </h2>

                  <a className="hisenseMedium nostyle btn_more" href="/csr">See More</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
