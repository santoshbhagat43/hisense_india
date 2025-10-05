import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ULED MiniLED UX - Hisense Global",
  description: "Hisense India - ULED MiniLED UX TV with advanced Mini-LED X technology and Hi-View Engine X",
  keywords: "Hisense India, ULED MiniLED UX, Mini-LED X, Hi-View Engine X, 4K TV, Smart TV",
};

export default function UXNPage() {
  return (
    <div className="page-wrapper">
      <div className="main-container">
        <nav className="info-bar">
          <div className="info-bar-category mobile-only">
            <Image 
              src="/assets/images/TV_icon.png" 
              alt="TV Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="info-bar-title">ULED MiniLED UX</div>
          <div>
            <a className="btn-hisense-custome open-buy-modal">
              <span className="mobile-only open-buy-modal">Buy</span>
              <span className="desktop-only open-buy-modal">Where to buy</span>
            </a>
          </div>
        </nav>
        
        <section className="top-banner">
          <div className="top-banner-inner">
            <div className="top-banner-gallery">
              <div className="top-banner-gallery-img">
                <div className="top-banner-gallery-img-tab current">
                  <Image 
                    src="/assets/images/Banners/Product.1.jpg"
                    alt="ULED MiniLED UX - Product Image 1"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="top-banner-gallery-img-tab">
                  <Image 
                    src="/assets/images/Banners/Product.2.jpg"
                    alt="ULED MiniLED UX - Product Image 2"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="top-banner-gallery-img-tab">
                  <Image 
                    src="/assets/images/Banners/Product.3.jpg"
                    alt="ULED MiniLED UX - Product Image 3"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
              <div className="top-banner-gallery-thumb">
                <a className="top-banner-gallery-thumb-tab current" href="#">
                  <Image 
                    src="/assets/images/Banners/Product.1.jpg"
                    alt="ULED MiniLED UX - Product Image 1"
                    width={120}
                    height={90}
                  />
                </a>
                <a className="top-banner-gallery-thumb-tab" href="#">
                  <Image 
                    src="/assets/images/Banners/Product.2.jpg"
                    alt="ULED MiniLED UX - Product Image 2"
                    width={120}
                    height={90}
                  />
                </a>
                <a className="top-banner-gallery-thumb-tab" href="#">
                  <Image 
                    src="/assets/images/Banners/Product.3.jpg"
                    alt="ULED MiniLED UX - Product Image 3"
                    width={120}
                    height={90}
                  />
                </a>
              </div>
            </div>
            <div className="top-banner-info">
              <div className="top-banner-logo">
                <Image 
                  src="/assets/images/Banners/icon_top.png"
                  alt="ULED MiniLED UX - Product Logo"
                  width={100}
                  height={50}
                />
              </div>
              <h1>ULED MiniLED UX</h1>
              <div className="top-banner-spec">
                <div>
                  <Image 
                    className="icon"
                    src="/assets/images/TV_icon.png"
                    alt="TV Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="spec">
                  <p>85&quot; 110&quot;</p>
                </div>
              </div>
              <div>
                <a className="btn-hisense-custome open-buy-modal">Where to buy</a>
              </div>
            </div>
          </div>
        </section>
        
        <div className="component-top-features features-six" data-sticky-nav="Top Features">
          <h2>TOP FEATURES</h2>
          <div className="component-top-features-tabholder">
            <div className="component-top-features-tabholder-inner">
              <div className="component-top-features-tab">
                <div className="component-top-features-img">
                  <Image 
                    src="/assets/images/Banners/Feature_Mini-LED_PRO_s.png"
                    alt="ULED MiniLED UX - Mini-LED X"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="component-top-features-text">
                  <h4></h4>
                  <div>
                    <p>Mini-LED X</p>
                  </div>
                </div>
              </div>
              <div className="component-top-features-tab">
                <div className="component-top-features-img">
                  <Image 
                    src="/assets/images/Banners/Feature_Hi-View-Engine-X_m.png"
                    alt="ULED MiniLED UX - Hi-View Engine X"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="component-top-features-text">
                  <h4></h4>
                  <div>
                    <p>Hi-View Engine X</p>
                  </div>
                </div>
              </div>
              <div className="component-top-features-tab">
                <div className="component-top-features-img">
                  <Image 
                    src="/assets/images/Banners/Feature_Quantum-Dot-Colour_m.png"
                    alt="ULED MiniLED UX - Dynamic X-Display"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="component-top-features-text">
                  <h4></h4>
                  <div>
                    <p>Dynamic X-Display</p>
                  </div>
                </div>
              </div>
              <div className="component-top-features-tab">
                <div className="component-top-features-img">
                  <Image 
                    src="/assets/images/Banners/Feature_Quantum-Dot-Colour_m.png"
                    alt="ULED MiniLED UX - CineStage X Surround"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="component-top-features-text">
                  <h4></h4>
                  <div>
                    <p>CineStage X Surround</p>
                  </div>
                </div>
              </div>
              <div className="component-top-features-tab">
                <div className="component-top-features-img">
                  <Image 
                    src="/assets/images/Banners/Feature_Quantum-Dot-Colour_m.png"
                    alt="ULED MiniLED UX - Quantum Dot Colour"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="component-top-features-text">
                  <h4></h4>
                  <div>
                    <p>Quantum Dot Colour</p>
                  </div>
                </div>
              </div>
              <div className="component-top-features-tab">
                <div className="component-top-features-img">
                  <Image 
                    src="/assets/images/Banners/Feature_144Hz_Game_Mode_PRO_m.png"
                    alt="ULED MiniLED UX - 144Hz Game Mode Pro"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="component-top-features-text">
                  <h4></h4>
                  <div>
                    <p>144Hz Game Mode Pro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-keyvisual" data-sticky-nav="Highlights">
          <div className="banner-container">
            <div className="image-wrap">
              <Image 
                className="desktop-only"
                src="/assets/images/Banners/Banner_01.jpg"
                alt="ULED MiniLED UX - Banner 1"
                width={1200}
                height={600}
              />
              <Image 
                className="mobile-only"
                src="/assets/images/Banners/Banner_01_m.jpg"
                alt="ULED MiniLED UX - Banner 1 m"
                width={600}
                height={300}
              />
              <div className="overlay-wrapper mobile-only productlogo" style={{backgroundColor: '#000'}}>
                <div className="overlay topleft type-productlogo">
                  <div className="icon-wrap">
                    <div className="icon">
                      <div className="image">
                        <Image 
                          src="/assets/images/logo-white.v2.png"
                          alt="ULED MiniLED UX - white logo"
                          width={100}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-wrapper text" data-bg-mobile="#000">
              <div className="overlay bottomleft type-text">
                <div className="sectionTitle" data-color="#fff" data-color-mobile="">
                  Highlights
                </div>
              </div>
            </div>
            <div className="overlay-wrapper desktop-only productlogo" data-bg-mobile="#000">
              <div className="overlay topleft type-productlogo">
                <div className="icon-wrap">
                  <div className="icon">
                    <div className="image">
                      <Image 
                        src="/assets/images/logo-white.v2.png"
                        alt="ULED MiniLED UX - white logo"
                        width={100}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-block" data-sticky-nav="">
          <div className="content-wrapper uxn_bg">
            <div className="content-container uxn_bg">
              <div className="icon-wrap top">
                <div className="icon">
                  <div className="image">
                    <Image 
                      className="desktop-only"
                      src="/assets/images/Banner_02_icon.png"
                      alt="ULED MiniLED UX - banner 2 icon"
                      width={60}
                      height={60}
                    />
                    <Image 
                      className="mobile-only"
                      src="/assets/images/Banner_02_icon.png"
                      alt="ULED MiniLED UX - banner 2 icon"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </div>
              <h2 className="title">
                <p>Look at how big 110&quot; TV is</p>
              </h2>
              <div className="desc" data-color="#FFF" data-color-mobile="#FFF">
                100&quot; is not the final destination. Now we have 110&quot; TV! Infinity Vision&apos;s expansive display
                engulfs you in every scene. Marvel in an endless horizon of pixels that captivates and
                transports you beyond the ordinary.
              </div>
            </div>
          </div>
          <div className="feature-keyvisual">
            <div className="banner-container">
              <div className="image-wrap">
                <Image 
                  className="desktop-only"
                  src="/assets/images/Banners/Banner_02.jpg"
                  alt="ULED MiniLED UX - Banner 2"
                  width={1200}
                  height={600}
                />
                <Image 
                  className="mobile-only"
                  src="/assets/images/Banners/Banner_02_m.jpg"
                  alt="ULED MiniLED UX - Banner 2 mobile"
                  width={600}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-keyvisual" data-sticky-nav="">
          <div className="banner-container">
            <div className="image-wrap">
              <Image 
                className="desktop-only"
                src="/assets/images/Banners/Banner_03.jpg"
                alt="ULED MiniLED UX - Banner 3"
                width={1200}
                height={600}
              />
              <Image 
                className="mobile-only"
                src="/assets/images/Banners/Banner_03_m.jpg"
                alt="ULED MiniLED UX - Banner 3 mobile"
                width={600}
                height={300}
              />
            </div>
            <div className="overlay-wrapper desktop-only productlogo" data-bg-mobile="">
              <div className="overlay type-productlogo">
                <div className="icon-wrap"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-keyvisual" data-sticky-nav="">
          <div className="banner-container">
            <div className="image-wrap">
              <Image 
                className="desktop-only"
                src="/assets/images/Banners/Banner_04.jpg"
                alt="ULED MiniLED UX - Banner 4"
                width={1200}
                height={600}
              />
              <Image 
                className="mobile-only"
                src="/assets/images/Banners/Banner_04_m.jpg"
                alt="ULED MiniLED UX - Banner 4 mobile"
                width={600}
                height={300}
              />
            </div>
            <div className="overlay-wrapper footnote" data-bg="">
              <div className="overlay bottomright type-footnote" data-track="105">
                <div className="footnote" data-color="#FFF" data-color-mobile="#FFF">
                  <p>
                    *Data is measured based on 110&quot;UX and may differ by screen size.
                  </p>
                </div>
              </div>
            </div>
            <div className="overlay-wrapper desktop-only productlogo" data-bg-mobile="">
              <div className="overlay type-productlogo">
                <div className="icon-wrap"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-block" data-sticky-nav="">
          <div className="content-wrapper uxn_bg">
            <div className="content-container uxn_bg">
              <div className="icon-wrap top">
                <div className="icon">
                  <div className="image">
                    <Image 
                      className="desktop-only"
                      src="/assets/images/Banners/Banner_05_icon.png"
                      alt="ULED MiniLED UX - banner 5 icon"
                      width={60}
                      height={60}
                    />
                    <Image 
                      className="mobile-only"
                      src="/assets/images/Banners/Banner_05_icon.png"
                      alt="ULED MiniLED UX - banner 5 icon"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </div>
              <h2 className="title">
                <p>8 Times Hashrate, Hisense&apos;s most powerful processor</p>
              </h2>
              <div className="desc">
                With this engine&apos;s human-like brain function, you don&apos;t just get a TV. You get a timeless
                companion that delivers an evolving, outstanding visual experience.
              </div>
            </div>
          </div>
          <div className="feature-keyvisual">
            <div className="banner-container">
              <div className="image-wrap">
                <Image 
                  className="desktop-only"
                  src="/assets/images/Banners/Banner_05.jpg"
                  alt="ULED MiniLED UX - Banner 5"
                  width={1200}
                  height={600}
                />
                <Image 
                  className="mobile-only"
                  src="/assets/images/Banners/Banner_05_m.jpg"
                  alt="ULED MiniLED UX - Banner 5 mobile"
                  width={600}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-block" data-sticky-nav="">
          <div className="content-wrapper uxn_bg">
            <div className="content-container uxn_bg">
              <div className="icon-wrap top">
                <div className="icon">
                  <div className="image">
                    <Image 
                      className="desktop-only"
                      src="/assets/images/Banners/Banner_06_icon.png"
                      alt="ULED MiniLED UX - banner 6 icon"
                      width={60}
                      height={60}
                    />
                    <Image 
                      className="mobile-only"
                      src="/assets/images/Banners/Banner_06_icon.png"
                      alt="ULED MiniLED UX - banner 6 icon"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </div>
              <h2 className="title">
                <p>40% higher contrast, illuminate every shadow</p>
              </h2>
              <div className="desc">
                Not every feature can be named as &quot;X&quot;. Only Mini-LED X can reach 40,000 Full Array Local
                Dimming and up to 10,000nits Peak Brightness, performing unprecedented light management with
                extremely precise detail.
              </div>
              <div className="footnote">
                <p>
                  *Zone and brightness differ by screen size. &nbsp;*Compare to conventional ULED TV
                  &nbsp; *Simulated image&nbsp;
                </p>
              </div>
            </div>
          </div>
          <div className="feature-keyvisual">
            <div className="banner-container">
              <div className="image-wrap">
                <Image 
                  className="desktop-only"
                  src="/assets/images/Banners/Banner_06.jpg"
                  alt="ULED MiniLED UX - Banner 6"
                  width={1200}
                  height={600}
                />
                <Image 
                  className="mobile-only"
                  src="/assets/images/Banners/Banner_06_m.jpg"
                  alt="ULED MiniLED UX - Banner 6 mobile"
                  width={600}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-keyvisual" data-sticky-nav="">
          <div className="banner-container">
            <div className="image-wrap">
              <Image 
                className="desktop-only"
                src="/assets/images/Banners/Banner_07.jpg"
                alt="ULED MiniLED UX - Banner 7"
                width={1200}
                height={600}
              />
              <Image 
                className="mobile-only"
                src="/assets/images/Banners/Banner_07_m.jpg"
                alt="ULED MiniLED UX - Banner 7 mobile"
                width={600}
                height={300}
              />
            </div>
            <div className="overlay-wrapper uxn_bg text">
              <div className="overlay topleft type-text">
                <h2 className="title">
                  <p>20% better anti -glare, minimal light intrusion</p>
                </h2>
                <div className="desc" data-color="#FFF" data-color-mobile="#FFF">
                  Hisense&apos;s Low Reflection Screen reduces light reflection from 5% to 1.2%. Crafted to
                  combat the intrusion of ambient light, this technology ensures that your viewing remains
                  crisp and vivid, regardless of
                  external light sources. Take a step closer to that perfect cinematic experience, whether
                  it&apos;s day or night. <br />
                  <br />
                  <Image
                    src="/assets/images/Banners/Banner_06_icon.png"
                    alt="Banner 6 Icon"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
            <div className="overlay-wrapper footnote" data-bg="#000">
              <div className="overlay bottomright type-footnote" data-track="105">
                <div className="footnote" data-color="#fff" data-color-mobile="#fff">
                  <p>
                    *Compare to conventional ULED TV without LR or AGLR &nbsp; *Simulated image
                  </p>
                </div>
              </div>
            </div>
            <div className="overlay-wrapper desktop-only productlogo" data-bg-mobile="#000">
              <div className="overlay type-productlogo">
                <div className="icon-wrap"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-block" data-sticky-nav="">
          <div className="content-wrapper uxn_bg">
            <div className="content-container center uxn_bg">
              <h2 className="title">
                <p>
                  40% wider viewing angle, no more &quot;best seat&quot; debates
                </p>
              </h2>
              <div className="desc">
                Hisense&apos;s Dynamic X-Display adopts multiple technologies and materials to improve viewing
                angle, offering consistent brilliance from anywhere. See vibrant colors and sharp contrasts,
                whether you&apos;re front and
                center or off to the side.
              </div>
              <div className="footnote">
                <p>
                  &nbsp; *Compare to conventional ULED TV without HVA or STW. &nbsp;*Simulated image.
                  &nbsp;
                </p>
              </div>
              <div className="icon-wrap bottom">
                <div className="icon">
                  <div className="image">
                    <Image 
                      className="desktop-only"
                      src="/assets/images/Banners/Banner_08_m.jpg"
                      alt="ULED MiniLED UX - banner 8 icon"
                      width={60}
                      height={60}
                    />
                    <Image 
                      className="mobile-only"
                      src="/assets/images/Banners/Banner_08_m.jpg"
                      alt="ULED MiniLED UX - banner 8 icon"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-keyvisual">
            <div className="banner-container">
              <div className="image-wrap">
                <Image 
                  className="desktop-only"
                  src="/assets/images/Banners/Banner_08.jpg"
                  alt="ULED MiniLED UX - Banner 8"
                  width={1200}
                  height={600}
                />
                <Image 
                  className="mobile-only"
                  src="/assets/images/Banners/Banner_08_m.jpg"
                  alt="ULED MiniLED UX - Banner 8 mobile"
                  width={600}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-keyvisual" data-sticky-nav="">
          <div className="banner-container">
            <div className="image-wrap">
              <Image 
                className="desktop-only"
                src="/assets/images/Banners/Banner_09.jpg"
                alt="ULED MiniLED UX - Banner 9"
                width={1200}
                height={600}
              />
              <Image 
                className="mobile-only"
                src="/assets/images/Banners/Banner_09_m.jpg"
                alt="ULED MiniLED UX - Banner 9 mobile"
                width={600}
                height={300}
              />
            </div>
            <div className="overlay-wrapper uxn_bg text">
              <div className="overlay centerleft type-text">
                <h2 className="title">
                  <p>25% richer colours, more than Quantum Dot Colour</p>
                </h2>
                <div className="desc">
                  In addition to conventional Quantum Dot Color material, advanced colour management
                  technologies are applied on UX to perform 25% richer colours. Every frame is rich,
                  vibrant, and true-to-life, ensuring
                  every color, from the most subtle to the most vibrant, stands out. <br />
                  <br />
                  <Image
                    src="/assets/images/Banners/Banner_09_icon.png"
                    alt="Banner 9 Icon"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
            <div className="overlay-wrapper footnote">
              <div className="overlay bottomright type-footnote">
                <div className="footnote">
                  <p>*Compare to conventional ULED TV</p>
                </div>
              </div>
            </div>
            <div className="overlay-wrapper desktop-only productlogo">
              <div className="overlay type-productlogo">
                <div className="icon-wrap"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-block" data-sticky-nav="">
          <div className="content-wrapper uxn_bg">
            <div className="content-container uxn_bg">
              <div className="icon-wrap top">
                <div className="icon">
                  <div className="image">
                    <Image 
                      className="desktop-only"
                      src="/assets/images/Banners/Banner_10_icon.png"
                      alt="ULED MiniLED UX - banner 10 icon"
                      width={60}
                      height={60}
                    />
                    <Image 
                      className="mobile-only"
                      src="/assets/images/Banners/Banner_10_icon.png"
                      alt="ULED MiniLED UX - banner 10 icon"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </div>
              <h2 className="title">
                <p>Step into the story</p>
              </h2>
              <div className="desc">
                Multiple audio-visual technologies are consolidated to bring you into the story with vivid
                colours, rich details and stereo sound. Imagine you&apos;re safariing in Savannah, swimming with
                manta, or walking through
                a medieval castle.
              </div>
              <div className="footnote">
                <p>
                  *HDR10+&trade; logo is a trademark of HDR10+ Technologies, LLC.*FILMMAKER MODETM is a
                  trademark of UHD Alliance, Inc. &nbsp;*IMAX&reg; is a registered trademark of IMAX&reg;
                  corporation.
                </p>
                <p>
                  *DTS and the DTS logo are registered trademarks or trademarks of DTS, Inc. in the United
                  States and other countries.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-keyvisual">
            <div className="banner-container">
              <div className="image-wrap">
                <Image 
                  className="desktop-only"
                  src="/assets/images/Banners/Banner_10.jpg"
                  alt="ULED MiniLED UX - Banner 10"
                  width={1200}
                  height={600}
                />
                <Image 
                  className="mobile-only"
                  src="/assets/images/Banners/Banner_10_m.jpg"
                  alt="ULED MiniLED UX - Banner 10 mobile"
                  width={600}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-block" data-sticky-nav="">
          <div className="content-wrapper uxn_bg">
            <div className="content-container uxn_bg">
              <h2 className="title">
                <p>Perfection, any content, anytime in your home</p>
              </h2>
              <div className="desc">
                Whether a bright sunny day or rouge winter evening, Total Ambient Adaptive senses and
                adjusts, for a picture that matches the moment. With the support of multiple HDR
                technologies, this TV always offer the
                best view in the right ambiance.
              </div>
              <div className="icon-wrap bottom">
                <div className="icon">
                  <div className="image">
                    <Image 
                      className="desktop-only"
                      src="/assets/images/Banners/Banner_11_icon.png"
                      alt="ULED MiniLED UX - banner 11 icon"
                      width={60}
                      height={60}
                    />
                    <Image 
                      className="mobile-only"
                      src="/assets/images/Banners/Banner_11_icon.png"
                      alt="ULED MiniLED UX - banner 11 icon"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-keyvisual">
            <div className="banner-container">
              <div className="image-wrap">
                <Image 
                  className="desktop-only"
                  src="/assets/images/Banners/Banner_11.jpg"
                  alt="ULED MiniLED UX - Banner 11"
                  width={1200}
                  height={600}
                />
                <Image 
                  className="mobile-only"
                  src="/assets/images/Banners/Banner_11_m.jpg"
                  alt="ULED MiniLED UX - Banner 11 mobile"
                  width={600}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="component-specification" data-sticky-nav="Specification">
          <div className="content-wrapper">
            <div className="content-container">
              <div className="sectionTitle">Specification</div>
              <h2 className="title">NOW, HERE&apos;S THE TECHNICAL BIT…</h2>
            </div>
          </div>
          <div className="spec-wrapper">
            <div className="spec-container">
              <div className="spec">
                <div className="title">Resolution:</div>
                <div className="desc">4K 2840x2160</div>
              </div>
              <div className="spec">
                <div className="title">Screen Size:</div>
                <div className="desc">85, 110 (coming soon)</div>
              </div>
              <div className="spec">
                <div className="title">Backlit:</div>
                <div className="desc">Mini-LED X</div>
              </div>
              <div className="spec">
                <div className="title">Brightness:</div>
                <div className="desc">Up to 10,000nits Peak Brightness</div>
              </div>
              <div className="spec">
                <div className="title">Viewing Angle:</div>
                <div className="desc">Ultra Viewing Angle</div>
              </div>
              <div className="spec">
                <div className="title">Screen:</div>
                <div className="desc">Low-Reflection Screen</div>
              </div>
              <div className="spec">
                <div className="title">Colour:</div>
                <div className="desc">Quantum Dot Colour</div>
              </div>
              <div className="spec">
                <div className="title">Sound:</div>
                <div className="desc">
                  4.2.2 CineStage X Surround (Channels differ by screen size)
                </div>
              </div>
              <a className="btn-view-more" href="javascript:;"><span>View More</span></a>
            </div>
            <div className="image-container">
              <div className="title"></div>
            </div>
          </div>
          <div className="footnote-wrapper">
            <div className="footnote-container">
              <div className="footnote">
                <p>
                  All product descriptions, pricing and dimensions are approximate. product availability,
                  specifications and features are subject to change at any time, and from time to time,
                  and without notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
