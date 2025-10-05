import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/supports.css";

export const metadata: Metadata = {
  title: "Sitemap - Hisense Global",
  description: "Hisense India - Complete sitemap of all products, services, and company information",
  keywords: "Hisense India, Sitemap, Products, Support, About, TV, Air Conditioner, Mobile",
};

export default function SitemapPage() {
  return (
    <div className="page-wrapper">
      <div className="main-container">
        <div className="breadcrumb__banner">
          <h1>Sitemap</h1>
        </div>
        <div className="sitemap-container">
          <h1>SITEMAP</h1>

          {/* Product */}
          <div className="sitemap-section products">
            <h2>Product</h2>
            <div className="product-columns">
              <div className="product-col">
                <dl>
                  <dt>TV &amp; Audio</dt>
                  <dd><Link href="#">TV</Link></dd>
                  <dd><Link href="#">Soundbar</Link></dd>
                </dl>
                <dl>
                  <dt>Laser TV</dt>
                  <dd><Link href="#">Laser TV</Link></dd>
                  <dd><Link href="#">Laser Cinema</Link></dd>
                </dl>
              </div>

              <div className="product-col">
                <dl>
                  <dt>Home Appliances</dt>
                  <dd><Link href="#">Refrigerator</Link></dd>
                  <dd><Link href="#">Laundry</Link></dd>
                  <dd><Link href="#">Dishwasher</Link></dd>
                  <dd><Link href="#">Oven</Link></dd>
                  <dd><Link href="#">Hob</Link></dd>
                  <dd><Link href="#">Microwave</Link></dd>
                  <dd><Link href="#">Wine Cabinet</Link></dd>
                  <dd><Link href="#">Chest Freezer</Link></dd>
                  <dd><Link href="#">Air Conditioner</Link></dd>
                </dl>
              </div>

              <div className="product-col">
                <dl>
                  <dt>Mobile</dt>
                  <dd><Link href="#">Smartphone</Link></dd>
                </dl>
                <dl>
                  <dt>Business</dt>
                  <dd><Link href="#">Commercial Display</Link></dd>
                  <dd><Link href="#">Medical</Link></dd>
                  <dd><Link href="#">Transtech</Link></dd>
                </dl>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="sitemap-section">
            <h2>Support</h2>
            <ul>
              <li><Link href="#">Certificate Download</Link></li>
              <li><Link href="#">Customer Center</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="sitemap-section">
            <h2>About Hisense</h2>
            <ul>
              <li><Link href="/overview">Overview</Link></li>
              <li><Link href="/history">History</Link></li>
              <li><Link href="#">Industrial Groups</Link></li>
              <li><Link href="/values">Values</Link></li>
              <li><Link href="/csr">CSR</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/newsroom">Newsroom</Link></li>
              <li><Link href="/partnership">Partnership</Link></li>
            </ul>
          </div>

          {/* General */}
          <div className="sitemap-section">
            <h2>General</h2>
            <ul>
              <li><Link href="#">Regional</Link></li>
              <li><Link href="#">Legal Disclaimer</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
