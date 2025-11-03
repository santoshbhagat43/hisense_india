import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RecommendProduct = () => {
  return (
    <div className="product-listing recommend">
        <h2>Our Recommendation</h2>
        <div className="product-listing-inner">
          <div className="product-listing-tab">
            <a
              className="product-listing-img"
              href="#"
              style={{ transform: "translateY(0px)" }}
            >
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
              <div
                className="product-highlights"
                style={{ transform: "translateY(0px)" }}
              >
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
                  <div className="product-highlight-text">
                    Dynamic X-Display
                  </div>
                </a>
              </div>
              <div className="product-highlights-description"></div>
            </div>
            <div className="product-listing-tab-buttons">
              <div>
                <Link className="btn-detail" href="/uxn" target="_self">
                  Detail
                </Link>
              </div>
              <div>
                <a className="btn-hisense-custome open-buy-modal">
                  Where to buy
                </a>
              </div>
            </div>
          </div>
          <div className="product-listing-tab">
            <a
              className="product-listing-img"
              href="#"
              style={{ transform: "translateY(0px)" }}
            >
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
              <div
                className="product-highlights"
                style={{ transform: "translateY(0px)" }}
              >
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
                  <div className="product-highlight-text">
                    Dynamic X-Display
                  </div>
                </a>
              </div>
              <div className="product-highlights-description"></div>
            </div>
            <div className="product-listing-tab-buttons">
              <div>
                <Link className="btn-detail" href="/uxn" target="_self">
                  Detail
                </Link>
              </div>
              <div>
                <a className="btn-hisense-custome open-buy-modal">
                  Where to buy
                </a>
              </div>
            </div>
          </div>
          <div className="product-listing-tab">
            <a
              className="product-listing-img"
              href="#"
              style={{ transform: "translateY(0px)" }}
            >
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
              <div
                className="product-highlights"
                style={{ transform: "translateY(0px)" }}
              >
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
                  <div className="product-highlight-text">
                    Dynamic X-Display
                  </div>
                </a>
              </div>
              <div className="product-highlights-description"></div>
            </div>
            <div className="product-listing-tab-buttons">
              <div>
                <Link className="btn-detail" href="/uxn" target="_self">
                  Detail
                </Link>
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
          <Link href="/tv" target="_self">
            View all
          </Link>
        </div>
      </div>
  )
}

export default RecommendProduct