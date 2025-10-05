
document.addEventListener("DOMContentLoaded", () => {
			  // Elements
			  const dropdown = document.getElementById("issueType");
			  const expandedFields = document.querySelector(".expanded-fields");
			  const productIssue = document.querySelector(".product-issue-section");
			  const contactInfo = document.querySelector(".contact-info-section");
			  const helpSection = document.querySelector(".help-section");
			  const helpDescription = document.getElementById("helpDescription");
			  const errorMessage = document.querySelector(".error");
			  const productRelated = document.querySelector(".product-related");
			  const campaignSection = document.querySelector(".campaign-section");
			  const productCard = document.getElementById("productCard");
			  const categorySel = document.getElementById("category");
			  const productSel = document.getElementById("product");
			  const issueForm = document.getElementById("issueForm");
			  const purchaseDateGroup = document.getElementById("purchaseDateGroup");
			  const purchaseDateInput = document.getElementById('purchaseDate');
			  // -------------------------------
			  // Section Toggle Logic
			  // -------------------------------
			  dropdown.addEventListener("change", () => {
			    const value = dropdown.value;
			    // Hide all first
			    [expandedFields, productIssue, contactInfo, helpSection, errorMessage].forEach(
			      el => (el.style.display = "none")
			    );
			    if (productRelated) productRelated.style.display = "none";
			    if (campaignSection) campaignSection.style.display = "none";
			    // Show based on type
			    if (value === "Service" || value === "Repair") {
			      expandedFields.style.display = "block";
			      if (productRelated) productRelated.style.display = "block";
			      productIssue.style.display = "block";
			      contactInfo.style.display = "block";
			      if (purchaseDateGroup) {
			        purchaseDateGroup.style.display = "block";
			        purchaseDateInput.required = true;
			      }
			    } else if (value === "Offers") {
			      expandedFields.style.display = "block";
			      if (productRelated) productRelated.style.display = "block";
			      contactInfo.style.display = "block";
			      if (purchaseDateGroup) {
			        purchaseDateGroup.style.display = "none";
			        purchaseDateInput.required = false;
			      }
			    } else if (value === "Campaigns") {
			      expandedFields.style.display = "block";
			      if (campaignSection) campaignSection.style.display = "block";
			      contactInfo.style.display = "block";
			      helpSection.style.display = "block";
			      if (purchaseDateGroup) {
			        purchaseDateGroup.style.display = "none";
			        purchaseDateInput.required = false;
			      }
			    } else {
			      if (purchaseDateGroup) {
			        purchaseDateGroup.style.display = "none";
			        purchaseDateInput.required = false;
			      }
			    }
			  });
			  // -------------------------------
			  // Product Card Helpers
			  // -------------------------------
			  function renderPlaceholder() {
			    productCard.classList.add("is-placeholder");
			    productCard.innerHTML = `
			      <div class="card-inner">
			        <svg class="card-illustration" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			          <rect x="4" y="8" width="40" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
			          <circle cx="34" cy="16" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
			          <path d="M8 34l11-12 7 8 6-6 8 10" fill="none" stroke="currentColor" stroke-width="2"/>
			        </svg>
			        <p class="card-text">Enter Model Name or Select by Product Category <span class="required">*</span></p>
			      </div>
			    `;
			  }
			  function renderProductInfo(model, categoryText) {
			    productCard.classList.remove("is-placeholder");
			    const selectedOption = [...productSel.options].find(opt => opt.value === model);
			    const imageUrl = selectedOption?.dataset.image || "/assets/images/placeholder-product.jpg";
			    const ton = selectedOption?.dataset.ton || "";
			    const star = selectedOption?.dataset.star || "";
			    const spec = ton && star ? `${ton}Ton ${star}*` : "";
			    productCard.innerHTML = `
			      <div class="details">
			        <div class="product-image">
			          <img src="${imageUrl}" alt="${model}" style="max-width:150px; margin-top:10px; border:1px solid #ddd; border-radius:6px;">
			        </div>
			        <h4>${model}</h4>
			        <p>${spec}</p>
			        <div class="product-button">
			          <a href="product-detail.html?model=${encodeURIComponent(model)}" class="view-product-btn">Click Here to View Product</a>
			        </div>
			      </div>
			    `;
			  }
			  // -------------------------------
			  // Product Dropdown Logic
			  // -------------------------------
			  categorySel.addEventListener("change", () => {
			    renderPlaceholder();
			    const category = categorySel.value;
			    const sourceSelect = document.getElementById(`${category}-products`);
			    productSel.innerHTML = '<option value="">Select Product</option>';
			    if (sourceSelect) {
			      [...sourceSelect.options].forEach(opt => {
			        const newOpt = document.createElement("option");
			        newOpt.value = opt.value;
			        newOpt.textContent = opt.textContent;
			        if (opt.dataset.image) newOpt.dataset.image = opt.dataset.image;
			        if (opt.dataset.ton) newOpt.dataset.ton = opt.dataset.ton;
			        if (opt.dataset.star) newOpt.dataset.star = opt.dataset.star;
			        productSel.appendChild(newOpt);
			      });
			    }
			  });
			  productSel.addEventListener("change", () => {
			    const model = productSel.value;
			    const categoryText = categorySel.options[categorySel.selectedIndex]?.text || "";
			    model ? renderProductInfo(model, categoryText) : renderPlaceholder();
			  });
			  // Init card with placeholder
			  renderPlaceholder();
			  // -------------------------------
			  // Form Validation
			  // -------------------------------
			  issueForm.addEventListener("submit", e => {
			    e.preventDefault();
			    let isValid = true;
			    errorMessage.style.display = "none";
			    // Required fields
			    const requiredFields = issueForm.querySelectorAll("[required]");
			    requiredFields.forEach(field => {
			      if (!field.value.trim()) {
			        isValid = false;
			        field.style.borderColor = "red";
			      } else {
			        field.style.borderColor = "#00B3AC";
			      }
			    });
			    // Extra check: help description if visible
			    if (helpSection.style.display !== "none" && !helpDescription.value.trim()) {
			      isValid = false;
			      errorMessage.style.display = "block";
			    }
			    if (!isValid) {
			      alert("Please fill in all required fields.");
			      return;
			    }
			    // ✅ If valid
			    alert("Form submitted successfully!");
			    issueForm.reset();
			    renderPlaceholder();
			  });
});
