import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/styles/product.css"; 
import ProductSlider from "@/components/ProductSlider";

export const metadata: Metadata = {
  title: "TV Products - Hisense Global",
  description: "Hisense India - Premium TV products including ULED, Mini LED, and Smart TVs",
  keywords: "Hisense India, TV, ULED TV, Mini LED TV, Smart TV, 4K TV, Laser TV",
};

export default function TVPage() {
  return (
    
      <div className="main-container">
    
        <ProductSlider />
        
        <div className="product-listing">
          <div className="mobile-product-filter">
            <div className="product-name">laser-cinema</div>
            <div className="product-filter-button">
              <div className="mobile-filter">Filter</div>
            </div>
          </div>
          <div className="product-filter">
            <div className="mobile-filter">
              Filter by
              <div className="close"></div>
            </div>
            <div className="product-filter-container">
              <div className="title">Filter by</div>
              <div className="filter-clear"><span>Clear all</span></div>
              <div className="product-filter-type">
                <div className="product-filter-title">Screen Size</div>
                <div className="product-filter-detail">
                  <ul>
                    <li>
                      <div><input type="checkbox" id="" data-filter="99&quot;-or-less" /><span>99&quot; or less</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="100&quot;or-more" /><span>100&quot; or more</span></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-filter-type">
                <div className="product-filter-title">Features</div>
                <div className="product-filter-detail">
                  <ul>
                    <li>
                      <div><input type="checkbox" id="" data-filter="trichroma" /><span>TriChroma</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="ultra-short-throw" /><span>Ultra Short Throw</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="hdr" /><span>HDR</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="smooth-motion" /><span>Smooth Motion</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="dolby-atmos" /><span>Dolby Atmos</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="dbx-tv" /><span>dbx-tv</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="android-tv" /><span>Android TV</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="voice-control" /><span>Voice Control</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="netflix/stan/iview" /><span>Netflix/Stan/iView</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="freeviewplus" /><span>FreeviewPlus</span></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-filter-type">
                <div className="product-filter-title">Resolution</div>
                <div className="product-filter-detail">
                  <ul>
                    <li>
                      <div><input type="checkbox" id="" data-filter="8k" /><span>8K</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="4k" /><span>4K</span></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-filter-type">
                <div className="product-filter-title">Best For</div>
                <div className="product-filter-detail">
                  <ul>
                    <li>
                      <div><input type="checkbox" id="" data-filter="films" /><span>Films</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="sports" /><span>Sports</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="games" /><span>Games</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="apps" /><span>Apps</span></div>
                    </li>
                    <li>
                      <div><input type="checkbox" id="" data-filter="tv" /><span>TV</span></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn-container">
                <a className="btn-clear" href="javascript:void(0)">Clear</a>
                <a className="btn-apply" href="javascript:void(0)">Apply</a>
              </div>
            </div>
          </div>
          <div className="product-listing-inner">
            <div className="product-listing-no-result">No Result</div>
            <div className="product-listing-tab" data-filter="100&quot;or-more dolby-atmos ultra-short-throw hdr voice-control smooth-motion 4k films sports games 100&quot;or-more dolby-atmos netflix/stan/iview trichroma ultra-short-throw hdr voice-control smooth-motion 4k films sports games ">
              <a className="product-listing-img" data-hero-product="" href="#">
                <Image 
                  src="/assets/images/Banners/product.jpg"
                  alt="PX3-PRO 4K TriChroma Laser Cinema Listing image"
                  width={400}
                  height={300}
                />
              </a>
              <div className="product-listing-tab-content">
                <h4>Laser Cinema</h4>
                <h3>PX3-PRO 4K TriChroma Laser Cinema</h3>
                <div className="product-highlights">
                  <div className="product-highlights-cursor"></div>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - LPU™ Technology"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">LPU™ Technology</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - 80&quot;-150&quot; Projection Size"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">80&quot;-150&quot; Projection Size</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - IMAX ENHANCED"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">IMAX ENHANCED</div>
                  </a>
                </div>
                <div className="product-highlights-description"></div>
              </div>
              <div className="product-listing-tab-buttons">
                <div>
                  <Link className="btn-detail" href="/uxn">Detail</Link>
                </div>
                <div>
                  <a className="btn-hisense-custome open-buy-modal">
                    Where to buy
                  </a>
                </div>
              </div>
            </div>
            <div className="product-listing-tab" data-filter="100&quot;or-more dolby-atmos ultra-short-throw hdr voice-control smooth-motion 4k films sports games 100&quot;or-more dolby-atmos netflix/stan/iview trichroma ultra-short-throw hdr voice-control smooth-motion 4k films sports games ">
              <a className="product-listing-img" data-hero-product="" href="#">
                <Image 
                  src="/assets/images/Banners/product.jpg"
                  alt="PX3-PRO 4K TriChroma Laser Cinema Listing image"
                  width={400}
                  height={300}
                />
              </a>
              <div className="product-listing-tab-content">
                <h4>Laser Cinema</h4>
                <h3>PX3-PRO 4K TriChroma Laser Cinema</h3>
                <div className="product-highlights">
                  <div className="product-highlights-cursor"></div>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - LPU™ Technology"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">LPU™ Technology</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - 80&quot;-150&quot; Projection Size"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">80&quot;-150&quot; Projection Size</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - IMAX ENHANCED"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">IMAX ENHANCED</div>
                  </a>
                </div>
                <div className="product-highlights-description"></div>
              </div>
              <div className="product-listing-tab-buttons">
                <div>
                  <Link className="btn-detail" href="/uxn">Detail</Link>
                </div>
                <div>
                  <a className="btn-hisense-custome open-buy-modal">
                    Where to buy
                  </a>
                </div>
              </div>
            </div>
            <div className="product-listing-tab" data-filter="100&quot;or-more dolby-atmos ultra-short-throw hdr voice-control smooth-motion 4k films sports games 100&quot;or-more dolby-atmos netflix/stan/iview trichroma ultra-short-throw hdr voice-control smooth-motion 4k films sports games ">
              <a className="product-listing-img" data-hero-product="" href="#">
                <Image 
                  src="/assets/images/Banners/product.jpg"
                  alt="PX3-PRO 4K TriChroma Laser Cinema Listing image"
                  width={400}
                  height={300}
                />
              </a>
              <div className="product-listing-tab-content">
                <h4>Laser Cinema</h4>
                <h3>PX3-PRO 4K TriChroma Laser Cinema</h3>
                <div className="product-highlights">
                  <div className="product-highlights-cursor"></div>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - LPU™ Technology"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">LPU™ Technology</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - 80&quot;-150&quot; Projection Size"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">80&quot;-150&quot; Projection Size</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - IMAX ENHANCED"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">IMAX ENHANCED</div>
                  </a>
                </div>
                <div className="product-highlights-description"></div>
              </div>
              <div className="product-listing-tab-buttons">
                <div>
                  <Link className="btn-detail" href="/uxn">Detail</Link>
                </div>
                <div>
                  <a className="btn-hisense-custome open-buy-modal">
                    Where to buy
                  </a>
                </div>
              </div>
            </div>
            <div className="product-listing-tab" data-filter="">
              <a className="product-listing-img" data-hero-product="" href="#">
                <Image 
                  src="/assets/images/Banners/product.jpg"
                  alt="120L5 Ultra Short Throw Laser Cinema"
                  width={400}
                  height={300}
                />
              </a>
              <div className="product-listing-tab-content">
                <h4>Laser Cinema</h4>
                <h3>PX3-PRO 4K TriChroma Laser Cinema</h3>
                <div className="product-highlights">
                  <div className="product-highlights-cursor"></div>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - LPU™ Technology"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">LPU™ Technology</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - 80&quot;-150&quot; Projection Size"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">80&quot;-150&quot; Projection Size</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - IMAX ENHANCED"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">IMAX ENHANCED</div>
                  </a>
                </div>
                <div className="product-highlights-description"></div>
              </div>
              <div className="product-listing-tab-buttons">
                <div>
                  <Link className="btn-detail" href="/uxn">Detail</Link>
                </div>
                <div>
                  <a className="btn-hisense-custome open-buy-modal">
                    Where to buy
                  </a>
                </div>
              </div>
            </div>
            <div className="product-listing-tab" data-filter="">
              <a className="product-listing-img" data-hero-product="" href="#">
                <Image 
                  src="/assets/images/Banners/product.jpg"
                  alt="120L5 Ultra Short Throw Laser Cinema"
                  width={400}
                  height={300}
                />
              </a>
              <div className="product-listing-tab-content">
                <h4>Laser Cinema</h4>
                <h3>PX3-PRO 4K TriChroma Laser Cinema</h3>
                <div className="product-highlights">
                  <div className="product-highlights-cursor"></div>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - LPU™ Technology"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">LPU™ Technology</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - 80&quot;-150&quot; Projection Size"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">80&quot;-150&quot; Projection Size</div>
                  </a>
                  <a className="product-highlight" href="#">
                    <Image 
                      src="/assets/images/Banners/Feature_LPU-Technology_s.png"
                      alt="PX3-PRO 4K TriChroma Laser Cinema - IMAX ENHANCED"
                      width={60}
                      height={60}
                    />
                    <div className="product-highlight-text">IMAX ENHANCED</div>
                  </a>
                </div>
                <div className="product-highlights-description"></div>
              </div>
              <div className="product-listing-tab-buttons">
                <div>
                  <Link className="btn-detail" href="/uxn">Detail</Link>
                </div>
                <div>
                  <a className="btn-hisense-custome open-buy-modal">
                    Where to buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
