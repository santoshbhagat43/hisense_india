import type { Metadata } from "next";
import "@/styles/supports.css"; 

export const metadata: Metadata = {
  title: "Product Manuals - Hisense Global",
  description: "Hisense India - Download product manuals and user guides for all Hisense products",
  keywords: "Hisense India, Product Manuals, User Guides, Download Manuals, TV Manuals, Refrigerator Manuals",
};

export default function ProductManualsPage() {
  return (
    <div className="page-wrapper">
      <div className="">
        <div className="breadcrumb__banner">
          <h1>Product Manuals</h1>
        </div>
        <div className="page_container_manuals">
          <div className="product_title_manual">
            <h3>Download Product Manuals</h3>
          </div>
          <div className="form__group">
            <div className="custom-select-wrapper">
              <select id="categorySelect">
                <option value="" selected disabled>Select Category</option>
                <option value="refrigerator">Refrigerator</option>
                <option value="tv">TV</option>
              </select>
              <i className="fas fa-chevron-down dropdown-icon"></i>
            </div>
          </div>
          <div className="table-responsive">
            <table className="manualsTable" id="refrigeratorTable">
              <thead>
                <tr>
                  <th>Product Model</th>
                  <th>Manual</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="/manuals/RQ507N4SBVW.pdf" target="_blank">RQ507N4SBVW</a></td>
                  <td>User manual of refrigerator RQ507N4SBVW</td>
                  <td><a href="/manuals/RQ507N4SBVW.pdf" download className="download-btn">Download</a></td>
                </tr>
                <tr>
                  <td><a href="/manuals/RS564N4SSN.pdf" target="_blank">RS564N4SSN</a></td>
                  <td>User manual of refrigerator RS564N4SSN</td>
                  <td><a href="/manuals/RS564N4SSN.pdf" download className="download-btn">Download</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-responsive">
            <table className="manualsTable" id="tvTable">
              <thead>
                <tr>
                  <th>Product Model</th>
                  <th>Manual</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="/manuals/TV42XHD.pdf" target="_blank">TV42XHD</a></td>
                  <td>User manual of TV 42XHD</td>
                  <td><a href="/manuals/TV42XHD.pdf" download className="download-btn">Download</a></td>
                </tr>
                <tr>
                  <td><a href="/manuals/TV55UHD.pdf" target="_blank">TV55UHD</a></td>
                  <td>User manual of TV 55UHD</td>
                  <td><a href="/manuals/TV55UHD.pdf" download className="download-btn">Download</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
