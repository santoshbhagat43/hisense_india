import { SitemapData } from "@/types/general";
import Link from "next/link";

const Sitemap = ({ sitemapData }: { sitemapData: SitemapData }) => {
  return (
    <div className="main-container">
      <div className="breadcrumb__banner">
        <h1>Sitemap</h1>
      </div>
      <div className="sitemap-container">
        <h1>SITEMAP</h1>

        {/* {JSON.stringify(sitemapData)} */}

        {/* Product */}
        <div className="sitemap-section products">
          <h2>Product</h2>
          <div className="product-columns">
            {sitemapData.product_categories.map((category) => (
              <div className="product-col" key={category.name}>
                <dl>
                  <dt>{category.name}</dt>
                  {category.subcategories.map((subcategory) => (
                    <dd key={subcategory.name}>
                      <Link href={subcategory.link}>{subcategory.name}</Link>
                    </dd>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="sitemap-section">
          <h2>Support</h2>
          <ul>
            <li>
              <Link href="#">Certificate Download</Link>
            </li>
            <li>
              <Link href="#">Customer Center</Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div className="sitemap-section">
          <h2>About Hisense</h2>
          <ul>
            <li>
              <Link href="/overview">Overview</Link>
            </li>
            <li>
              <Link href="/history">History</Link>
            </li>
            <li>
              <Link href="#">Industrial Groups</Link>
            </li>
            <li>
              <Link href="/values">Values</Link>
            </li>
            <li>
              <Link href="/csr">CSR</Link>
            </li>
            <li>
              <Link href="/technology">Technology</Link>
            </li>
            <li>
              <Link href="/newsroom">Newsroom</Link>
            </li>
            <li>
              <Link href="/partnership">Partnership</Link>
            </li>
          </ul>
        </div>

        {/* General */}
        <div className="sitemap-section">
          <h2>General</h2>
          <ul>
            <li>
              <Link href="#">Regional</Link>
            </li>
            <li>
              <Link href="#">Legal Disclaimer</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
