import type { Metadata } from "next";
import "@/styles/supports.css";

export const metadata: Metadata = {
  title: "Terms and Conditions - Hisense Global",
  description: "Hisense India - Terms and conditions for campaigns, products, and services",
  keywords: "Hisense India, Terms and Conditions, Campaigns, Products, Legal Terms, User Agreement",
};

export default function TermsConditionsPage() {
  return (
    <div className="page-wrapper">
      <div className="main-container">
        <div className="breadcrumb__banner">
          <h1>TERMS AND CONDITIONS</h1>
        </div>
        <div className="tabs__container">
          <div className="tabs">
            <div className="list-group">
              <span className="list-group-item active" data-tab="campaigns">Campaigns</span>
              <span className="list-group-item" data-tab="products">Products</span>
            </div>
          </div>
        </div>
        <div className="content__container">
          <div className="col1" id="campaigns-list">
            <span className="list-group-item active" data-target="b20">B20 with Hisense Campaign 2024</span>
            <span className="list-group-item" data-target="euro-ar">Euro Cup AR Filter Campaign 2024</span>
            <span className="list-group-item" data-target="trivia">Euro Trivia Challenge 2024</span>
            <span className="list-group-item" data-target="jadeja">Spot Jadeja</span>
            <span className="list-group-item" data-target="wow">Capture The Wow</span>
          </div>
          <div className="col1 d-none" id="products-list">
            <span className="list-group-item active" data-target="ac">Air Conditioner</span>
            <span className="list-group-item" data-target="tv">Television</span>
          </div>
          <div className="col2">
            <div className="content-item" id="b20">
              <h2>B20 with Hisense Campaign 2024</h2>
              <h3>(11th June - 29th June 2024)</h3>
              <div className="terms__and__conditions__context__text">
                <ul>
                  <li>Contest open for all Indian nationals.</li>
                  <li>Download template, upload with hashtags #HisenseIndia #B20WithHisense.</li>
                  <li>Follow page, tag 3 friends, must be 18+.</li>
                  <li>Top 30 participants get Jio Cinema subscription for a year.</li>
                </ul>
              </div>
            </div>

            <div className="content-item d-none" id="euro-ar">
              <h2>Euro Cup AR Filter Campaign 2024</h2>
              <p>Details coming soon...</p>
            </div>

            <div className="content-item d-none" id="trivia">
              <h2>Euro Trivia Challenge 2024</h2>
              <p>Play trivia and win exciting prizes!</p>
            </div>

            <div className="content-item d-none" id="jadeja">
              <h2>Spot Jadeja</h2>
              <p>Find Jadeja in our campaign posts and win rewards.</p>
            </div>

            <div className="content-item d-none" id="wow">
              <h2>Capture The Wow</h2>
              <p>Share your wow moments with Hisense.</p>
            </div>
            <div className="content-item d-none" id="ac">
              <h2>Air Conditioner</h2>
              <p>Terms & conditions for AC campaigns.</p>
            </div>

            <div className="content-item d-none" id="tv">
              <h2>Television</h2>
              <p>Terms & conditions for TV campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
