import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TV Series - Hisense Global",
  description: "Hisense India - Complete range of TV series including ULED, OLED, UHD, and Smart TVs",
  keywords: "Hisense India, TV Series, ULED TV, OLED TV, UHD TV, Smart TV, Mini LED TV",
};

export default function TVSeriesPage() {
  return (
    <div className="page-wrapper">
      <div className="main-container">
        {/* Slider Start */}
        <section className="product-listing-banner">
          <div className="product-listing-banner-inner">
            <div className="product-listing-banner-holder">
              <div className="product-listing-banner-gallery theme-white mode-left">
                <div>
                  <Image 
                    className="banner desktop-only"
                    src="/assets/images/Banners/tv01.ux-mini-led-tv.jpg"
                    alt="ULED X Mini-LED TV"
                    width={1200}
                    height={600}
                  />
                  <Image 
                    className="banner mobile-only" 
                    src="/assets/images/Banners/tv-20241206-m.webp"
                    alt="ULED X Mini-LED TV"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="product-listing-banner-content">
                  <div className="product-listing-banner-content-inner">
                    <h3>ULED X Mini-LED</h3>
                    <h1>ULED MINILED UX</h1>
                    <div className="btn-container">
                      <Link className="btn-hisense-india" href="/uxn">Discover more</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-listing-banner-gallery theme-white mode-left">
                <div>
                  <Image 
                    className="banner desktop-only"
                    src="/assets/images/Banners/tv01.ux-mini-led-tv.jpg"
                    alt="ULED Mini-LED TV"
                    width={1200}
                    height={600}
                  />
                  <Image 
                    className="banner mobile-only" 
                    src="/assets/images/Banners/tv-20241206-m.webp"
                    alt="ULED Mini-LED TV"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="product-listing-banner-content">
                  <div className="product-listing-banner-content-inner">
                    <h3>ULED Mini-LED</h3>
                    <h1>ULED MINILED U8NQ</h1>
                    <div className="btn-container">
                      <Link className="btn-hisense-india" href="/uxn">Discover more</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-listing-banner-gallery theme-white mode-left">
                <div>
                  <Image 
                    className="banner desktop-only"
                    src="/assets/images/Banners/tv01.ux-mini-led-tv.jpg"
                    alt="ULED Mini-LED TV"
                    width={1200}
                    height={600}
                  />
                  <Image 
                    className="banner mobile-only" 
                    src="/assets/images/Banners/tv-20241206-m.webp"
                    alt="ULED Mini-LED TV"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="product-listing-banner-content">
                  <div className="product-listing-banner-content-inner">
                    <h3>ULED Mini-LED</h3>
                    <h1>ULED MINILED U8NQ</h1>
                    <div className="btn-container">
                      <Link className="btn-hisense-india" href="/uxn">Discover more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-listing-dots"></div>
          </div>
        </section>
        {/* slider end */}
        
        <div className="overview-type-listing">
          <div className="overview-type-wrapper">
            <h2>Our TV Series</h2>
            <div className="overview-type-container">
              <div className="overview-type">
                <div className="img">
                  <div className="img-container">
                    <Image 
                      className="desktop-only" 
                      src="/assets/images/tv_series_desktop.jpg"
                      alt="Hisense ULED TV"
                      width={400}
                      height={300}
                    />
                    <Image 
                      className="mobile-only" 
                      src="/assets/images/tv_series_mobile.jpg"
                      alt="Hisense ULED TV"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
                <div className="overview-content theme-white">
                  <div className="type">ULED TV</div>
                  <div className="style">MINI-LED ULED TV UX</div>
                  <div className="viewmore">
                    <Link className="btn-hisense-india" href="/uxn" target="_self">View More</Link>
                  </div>
                </div>
              </div>
              <div className="overview-type">
                <div className="img">
                  <div className="img-container">
                    <Image 
                      className="desktop-only" 
                      src="/assets/images/tv_series_desktop.jpg"
                      alt="Hisense OLED TV"
                      width={400}
                      height={300}
                    />
                    <Image 
                      className="mobile-only" 
                      src="/assets/images/tv_series_mobile.jpg"
                      alt="Hisense OLED TV"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
                <div className="overview-content theme-white">
                  <div className="type">OLED TV</div>
                  <div className="style">OLED 4K TV A9H</div>
                  <div className="viewmore">
                    <Link className="btn-hisense-india" href="/uxn" target="_self">View More</Link>
                  </div>
                </div>
              </div>
              <div className="overview-type">
                <div className="img">
                  <div className="img-container">
                    <Image 
                      className="desktop-only" 
                      src="/assets/images/tv_series_desktop.jpg"
                      alt="Hisense UHD TV"
                      width={400}
                      height={300}
                    />
                    <Image 
                      className="mobile-only" 
                      src="/assets/images/tv_series_mobile.jpg"
                      alt="Hisense UHD TV"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
                <div className="overview-content theme-white">
                  <div className="type">UHD TV</div>
                  <div className="style">UHD 4K TV A7H</div>
                  <div className="viewmore">
                    <Link className="btn-hisense-india" href="/uxn" target="_self">View More</Link>
                  </div>
                </div>
              </div>
              <div className="overview-type">
                <div className="img">
                  <div className="img-container">
                    <Image 
                      className="desktop-only" 
                      src="/assets/images/tv_series_desktop.jpg"
                      alt="Hisense Smart TV"
                      width={400}
                      height={300}
                    />
                    <Image 
                      className="mobile-only" 
                      src="/assets/images/tv_series_mobile.jpg"
                      alt="Hisense Smart TV"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
                <div className="overview-content theme-white">
                  <div className="type">Smart TV</div>
                  <div className="style"></div>
                  <div className="viewmore">
                    <Link className="btn-hisense-india" href="/uxn" target="_self">View More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-type-listing-dots"></div>
          </div>
        </div>
        
        <div className="overview-two-col">
          <div className="overview-two-col-wrapper">
            <div>
              <h2>Generation for gaming</h2>
              <div className="desc">Game Mode Pro</div>
              <div className="overview-two-col-container">
                <div className="banner">
                  <div className="img">
                    <Image 
                      className="desktop-only" 
                      src="/assets/images/hisense-tv-gamemode.jpg"
                      alt="Hisense ULED 8K TV U80G"
                      width={600}
                      height={400}
                    />
                    <Image 
                      className="mobile-only" 
                      src="/assets/images/hisense-tv-gamemode-mobile.jpg"
                      alt="Hisense ULED 8K TV U80G"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Accurate bright and dark</h2>
              <div className="desc">Contrast control technologies</div>
              <div className="overview-two-col-container">
                <div className="banner">
                  <div className="img">
                    <Image 
                      className="desktop-only" 
                      src="/assets/images/hisense-tv-gamemode.jpg"
                      alt="Hisense ULED 8K TV U80G"
                      width={600}
                      height={400}
                    />
                    <Image 
                      className="mobile-only" 
                      src="/assets/images/hisense-tv-gamemode-mobile.jpg"
                      alt="Hisense ULED 8K TV U80G"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overview-full-col">
          <div className="overview-full-col-wrapper">
            <h2>VIDAA SMART</h2>
            <div className="desc">Best global and local content</div>
            <div className="overview-full-col-container">
              <div className="banner">
                <div className="img">
                  <Image 
                    className="desktop-only" 
                    src="/assets/images/hisense-tv-vidaa-smart.jpg"
                    alt="Hisense TV VIDAA Smart"
                    width={1200}
                    height={600}
                  />
                  <Image 
                    className="mobile-only" 
                    src="/assets/images/hisense-tv-vidaa-smart-mobile.jpg"
                    alt="Hisense TV VIDAA Smart"
                    width={600}
                    height={300}
                  />
                </div>
              </div>
              <div className="overview-content theme-white">
                <div className="item">
                  <p></p>
                  <div className="btn-container">
                    <Link href="/tv" target="_self">View all TV</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="product-listing recommend">
          <h2>Our Recommendation</h2>
          <div className="product-listing-inner">
            <div className="product-listing-tab">
              <a className="product-listing-img" href="#" style={{transform: 'translateY(0px)'}}>
                <Image 
                  src="/assets/images/product.jpg" 
                  alt="ULED MiniLED UX - Listing image"
                  width={400}
                  height={300}
                />
              </a>
              <div className="product-listing-tab-content">
                <h4>ULED</h4>
                <h3>ULED MiniLED UX</h3>
                <div className="product-listing-description"></div>
                <div className="product-highlights" style={{transform: 'translateY(0px)'}}>
                  <div className="product-highlights-cursor"></div>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Feature_Mini-LED_PRO_s.png"
                      alt="ULED MiniLED UX - Mini-LED PRO"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">Mini-LED PRO</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Feature_Mini-LED_PRO_s.png"
                      alt="ULED MiniLED UX - Hi-View Engine X"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">Hi-View Engine X</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Feature_Mini-LED_PRO_s.png"
                      alt="ULED MiniLED UX- Dynamic X-Display"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">Dynamic X-Display</div>
                  </a>
                </div>
                <div className="product-highlights-description"></div>
              </div>
              <div className="product-listing-tab-buttons">
                <div>
                  <Link className="btn-detail" href="/uxn" target="_self">Detail</Link>
                </div>
                <div>
                  <a className="btn-hisense-custome open-buy-modal">
                    Where to buy
                  </a>
                </div>
              </div>
            </div>
            <div className="product-listing-tab">
              <a className="product-listing-img" href="#" style={{transform: 'translateY(0px)'}}>
                <Image 
                  src="/assets/images/product.jpg" 
                  alt="ULED MiniLED UX - Listing image"
                  width={400}
                  height={300}
                />
              </a>
              <div className="product-listing-tab-content">
                <h4>ULED</h4>
                <h3>ULED MiniLED UX</h3>
                <div className="product-listing-description"></div>
                <div className="product-highlights" style={{transform: 'translateY(0px)'}}>
                  <div className="product-highlights-cursor"></div>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Feature_Mini-LED_PRO_s.png"
                      alt="ULED MiniLED UX - Mini-LED PRO"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">Mini-LED PRO</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Feature_Mini-LED_PRO_s.png"
                      alt="ULED MiniLED UX - Hi-View Engine X"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">Hi-View Engine X</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Feature_Mini-LED_PRO_s.png"
                      alt="ULED MiniLED UX- Dynamic X-Display"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">Dynamic X-Display</div>
                  </a>
                </div>
                <div className="product-highlights-description"></div>
              </div>
              <div className="product-listing-tab-buttons">
                <div>
                  <Link className="btn-detail" href="/uxn" target="_self">Detail</Link>
                </div>
                <div>
                  <a className="btn-hisense-custome open-buy-modal">
                    Where to buy
                  </a>
                </div>
              </div>
            </div>
            <div className="product-listing-tab">
              <a className="product-listing-img" href="#" style={{transform: 'translateY(0px)'}}>
                <Image 
                  src="/assets/images/product.jpg" 
                  alt="ULED MiniLED UX - Listing image"
                  width={400}
                  height={300}
                />
              </a>
              <div className="product-listing-tab-content">
                <h4>ULED</h4>
                <h3>ULED MiniLED UX</h3>
                <div className="product-listing-description"></div>
                <div className="product-highlights" style={{transform: 'translateY(0px)'}}>
                  <div className="product-highlights-cursor"></div>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Feature_Mini-LED_PRO_s.png"
                      alt="ULED MiniLED UX - Mini-LED PRO"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">Mini-LED PRO</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Feature_Mini-LED_PRO_s.png"
                      alt="ULED MiniLED UX - Hi-View Engine X"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">Hi-View Engine X</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Feature_Mini-LED_PRO_s.png"
                      alt="ULED MiniLED UX- Dynamic X-Display"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">Dynamic X-Display</div>
                  </a>
                </div>
                <div className="product-highlights-description"></div>
              </div>
              <div className="product-listing-tab-buttons">
                <div>
                  <Link className="btn-detail" href="/uxn" target="_self">Detail</Link>
                </div>
                <div>
                  <a className="btn-hisense-custome open-buy-modal">
                    Where to buy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="view-more">
            <Link href="/tv" target="_self">View all</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
