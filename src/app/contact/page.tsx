import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Hisense Global",
  description: "Hisense India - Contact us for support, service, and business inquiries",
  keywords: "Hisense India, Contact, Support, Service, Business, Customer Care",
};

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <div className="main-container">
        <div className="main-banner-container legal">
          <h1>Contact Us</h1>
          <img 
            className="desktop-only" 
            src="/assets/images/Banners/generic-banner.jpg"
            alt="Hisense Air Conditioner 1" 
          />
          <img 
            className="mobile-only" 
            src="/assets/images/Banners/generic-banner-mobile.jpg"
            alt="Hisense Air Conditioner 1" 
          />
        </div>
        
        {/* Issue Reporting Form */}
        <div className="issue-reporting-container">
          {/* Issue Reporting Form */}
          <form id="issueForm" noValidate>
            {/* Select Issue Type */}
            <section className="issue-section">
              <div className="section-title-contact">
                <p>Select type of issue</p>
              </div>
              <div className="form-container">
                <div className="form-group">
                  <label htmlFor="issueType">Select type of issue</label>
                  <select id="issueType" name="issueType" required className="custom-select">
                    <option value="">Select issue type</option>
                    <option value="Service">Service</option>
                    <option value="Repair">Repair</option>
                    <option value="Offers">Offers</option>
                    <option value="Campaigns">Campaigns</option>
                  </select>
                </div>
                
                {/* Expanded Fields */}
                <div className="expanded-fields" style={{ display: 'none' }}>
                  {/* Product Related */}
                  <div className="product-related" style={{ display: 'none' }}>
                    <div className="issue-grid">
                      {/* LEFT: stacked fields */}
                      <div className="issue-left">
                        {/* Category */}
                        <div className="form-group">
                          <label htmlFor="category">Select Category</label>
                          <select id="category" name="category" required>
                            <option value="">Select Category</option>
                            <option value="ac">Air Conditioner</option>
                            <option value="tv">TV</option>
                          </select>
                        </div>
                        {/* Product */}
                        <div className="form-group">
                          <label htmlFor="product">Select Product</label>
                          <select id="product" name="product" required>
                            <option value="">Select Product</option>
                          </select>
                        </div>
                        {/* Purchase Date */}
                        <div className="form-group" id="purchaseDateGroup">
                          <label htmlFor="purchaseDate">Product Purchase Date <span className="required">*</span></label>
                          <input type="date" id="purchaseDate" name="purchaseDate" placeholder="mm/dd/yyyy" required />
                        </div>
                      </div>
                      {/* RIGHT: product info card */}
                      <div className="issue-right">
                        <div id="productCard" className="product-card is-placeholder" aria-live="polite">
                          <div className="card-inner">
                            <svg className="card-illustration" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <rect x="4" y="8" width="40" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                              <circle cx="34" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
                              <path d="M8 34l11-12 7 8 6-6 8 10" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            <p className="card-text">
                              Enter Model Name or Select by Product Category
                              <span className="required">*</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Campaign Section */}
                  <div className="form-group campaign-section" style={{ display: 'none' }}>
                    <label htmlFor="campaign">Select Campaign <span className="required">*</span></label>
                    <select id="campaign" name="campaign" required>
                      <option value="">Select Campaign</option>
                      <option value="Spin the wheel">Spin the wheel</option>
                      <option value="Spot Hisense">Spot Hisense</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Product Issue Section */}
            <section className="product-issue-section" style={{ display: 'none' }}>
              <div className="section-title-contact">
                <p>Product Issue</p>
              </div>
              <div className="form-container">
                <div className="form-group">
                  <label htmlFor="symptoms">Symptoms <span className="required">*</span></label>
                </div>
                <div className="form-row">
                  <div className="half-width">
                    <div className="form-group">
                      <select id="topic" name="topic" required>
                        <option value="">Topic</option>
                        <option value="Technical">Technical</option>
                        <option value="General">General</option>
                      </select>
                    </div>
                  </div>
                  <div className="half-width">
                    <div className="form-group">
                      <select id="subTopic" name="subTopic" required>
                        <option value="">Sub Topic</option>
                        <option value="Display">Display</option>
                        <option value="Sound">Sound</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description <span className="required">*</span></label>
                  <textarea id="description" name="description" required></textarea>
                </div>
              </div>
            </section>
            
            {/* Help Section */}
            <section className="help-section" style={{ display: 'none' }}>
              <div className="section-title-contact">
                <p>How can we help you</p>
              </div>
              <div className="form-container">
                <div className="form-group">
                  <label htmlFor="helpDescription">Describe how can we help you? <span className="required">*</span></label>
                  <textarea id="helpDescription" name="helpDescription" required></textarea>
                  <span className="error" style={{ color: 'red', display: 'none' }}>Description is Required!</span>
                </div>
              </div>
            </section>
            
            {/* Contact Information Section */}
            <section className="contact-info-section" style={{ display: 'none' }}>
              <div className="section-title-contact">
                <p>Contact Information</p>
              </div>
              <div className="form-container">
                <div className="form-row">
                  <div className="half-width">
                    <div className="form-group">
                      <label htmlFor="name">Name <span className="required">*</span></label>
                      <input type="text" id="name" name="name" required />
                    </div>
                  </div>
                  <div className="half-width">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                      <input type="tel" id="phone" name="phone" required />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="half-width">
                    <div className="form-group">
                      <label htmlFor="email">Email <span className="required">*</span></label>
                      <input type="email" id="email" name="email" required />
                    </div>
                  </div>
                  <div className="half-width">
                    <div className="form-group">
                      <label htmlFor="address">Address <span className="required">*</span></label>
                      <input type="text" id="address" name="address" required />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="half-width">
                    <div className="form-group">
                      <label htmlFor="city">City <span className="required">*</span></label>
                      <input type="text" id="city" name="city" required />
                    </div>
                  </div>
                  <div className="half-width">
                    <div className="form-group">
                      <label htmlFor="state">State <span className="required">*</span></label>
                      <input type="text" id="state" name="state" required />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pinCode">Pin Code <span className="required">*</span></label>
                  <input type="text" id="pinCode" name="pinCode" required />
                </div>
                <hr style={{ border: '1px solid #00b3ac' }} />
                <h3 className="privacy-policy-title">Privacy Policy</h3>
                <br />
                <div className="form-policy-check privacy-policy">
                  <input type="checkbox" id="privacy" name="privacy" required />
                  <label htmlFor="privacy">I agree with the data protection policy. <a href="#">Read More</a></label>
                </div>
              </div>
            </section>
            
            {/* Submit */}
            <div className="button-style">
              <button type="submit" className="hisenseMedium submit-btn" style={{ justifyContent: 'center' }}>
                Submit
              </button>
            </div>
          </form>
          
          {/* Hidden Selects for Product Data */}
          <select id="ac-products" style={{ display: 'none' }}>
            <option value="AS-12TC4RAM0" data-image="/assets/images/AS-12TC4RAM0-thumb_image-1715316644-9334.webp" data-ton="1.0" data-star="4">AS-12TC4RAM0</option>
            <option value="AS-12TC5RAM0" data-image="/assets/images/AT-C503HIB-thumb_image-1715259475-5259.webp" data-ton="1.0" data-star="5">AS-12TC5RAM0</option>
            <option value="AS-18TC4RAM1" data-image="/assets/images/AS-12TR4R3BP1-thumb_image-1715173711-6724.webp" data-ton="1.5" data-star="4">AS-18TC4RAM1</option>
            <option value="AS-18TC5RAM0" data-image="/assets/images/AT-CW623HJP-thumb_image-1715258922-2695.webp" data-ton="1.5" data-star="5">AS-18TC5RAM0</option>
          </select>
          <select id="tv-products" style={{ display: 'none' }}>
            <option value="85U7N U7N" data-image="/assets/images/120L9G-thumb_image-1663577035-8685.webp">85U7N U7N</option>
            <option value="75U7N U7N" data-image="/assets/images/120L9HE-thumb_image-1715237343-3342.webp">75U7N U7N</option>
            <option value="65U7N U7N" data-image="/assets/images/laser-tv.webp">65U7N U7N</option>
            <option value="55U7N U7N" data-image="/assets/images/43A56E-thumb.webp">55U7N U7N</option>
            <option value="55U7Q U7Q" data-image="/assets/images/laser-tv-thumb_image_small-1715581537-1470.webp">55U7Q U7Q</option>
          </select>
          
          {/* Contact Info Columns */}
          <section className="support-columns">
            <div className="row">
              {/* Column 1 */}
              <div className="col">
                <h3>For Installation and Service Support Only</h3>
                <p><strong>Email:</strong> india@hisense.com</p>
                <p><strong>Phone:</strong> 1800 266 1969</p>
              </div>
              {/* Column 2 */}
              <div className="col">
                <h3>For Business</h3>
                <p><strong>Email:</strong> india@hisense.com</p>
              </div>
              {/* Column 3 */}
              <div className="col">
                <h3>For Complaints</h3>
                <div className="table-wrapper">
                  <table>
                    <tr>
                      <th>Escalation Level</th>
                      <th>Method</th>
                      <th>Details</th>
                    </tr>
                    <tr>
                      <td>Level 1</td>
                      <td>Call</td>
                      <td>1800 266 1969</td>
                    </tr>
                    <tr>
                      <td>Level 2</td>
                      <td>Email</td>
                      <td>india.service@hisense.com</td>
                    </tr>
                    <tr>
                      <td>Level 3</td>
                      <td>Email</td>
                      <td>in.servicehead@hisense.com</td>
                    </tr>
                    <tr>
                      <td>Queries</td>
                      <td>Email</td>
                      <td>india@hisense.com</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </section>
          
          <section className="office-section">
            <div className="office-container">
              {/* Left Side */}
              <div className="office-left">
                {/* Google Map */}
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.220595891934!2d77.3824340754945!3d28.61942757566897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d8d7d3b26b%3A0x5f38d88b6e2b2d!2sWindsor%20Grand%2C%20Sector%20126%2C%20Noida%2C%20Uttar%20Pradesh%20201313!5e0!3m2!1sen!2sin!4v1692800000000!5m2!1sen!2sin"
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
                {/* Office Address */}
                <div className="office-address">
                  <h3 className="Corporate">Corporate Office</h3>
                  <p>
                    21st Floor, Windsor Grand, Plot No. 1C, Sector 126, Noida, Uttar Pradesh 201313
                  </p>
                </div>
              </div>
              {/* Right Side */}
              <div className="office-right">
                <img src="/assets/images/Banners/bg-social.jpg" alt="Office Map" />
                <div className="overlay-content">
                  <h3>Follow Us on Social Media</h3>
                  <p>Get in touch with us and we&apos;re looking forward to you.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
