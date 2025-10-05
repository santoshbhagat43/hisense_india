import type { Metadata } from "next";
import "@/styles/supports.css"; 

export const metadata: Metadata = {
  title: "Product Accessories - Hisense Global",
  description: "Hisense India - Product accessories and spare parts for TV and Air Conditioner",
  keywords: "Hisense India, Product Accessories, Spare Parts, TV Accessories, AC Accessories, Wall Mount",
};

export default function ProductAccessoriesPage() {
  return (
    <div className="page-wrapper">
      <div className="main-container">
        <div className="breadcrumb__banner">
          <h1>Product Manuals</h1>
        </div>
        <div className="container_Accessories">
          <div className="card">
            <h2>LED TV Accessories</h2>
            <div className="flex-list">
              <div className="flex-item">
                <h3>43A4G</h3>
                <div>Model without Wall mount</div>
                <div>Wall Bracket cost - <b>399 Rs</b></div>
              </div>
              <div className="flex-item">
                <h3>32A4G</h3>
                <div>Model without Wall mount</div>
                <div>Wall Bracket cost - <b>399 Rs</b></div>
              </div>
              <div className="flex-item">
                <h3>43E6N</h3>
                <div>Model without Wall mount</div>
                <div>Wall Bracket cost - <b>399 Rs + taxes</b></div>
              </div>
              <div className="flex-item">
                <h3>55E6N &amp; 65E6N</h3>
                <div>Model without Wall mount</div>
                <div>Wall Bracket cost - <b>499 Rs + taxes</b></div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>AC Accessories</h2>
            <div className="flex-list">
              <div className="flex-item">
                <h3>Standard Installation</h3>
                <div>Cost - <b>1499 Rs</b></div>
                <div className="note">* additional spare part has extra cost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
