// ====================== Category Switcher ======================
document.addEventListener("DOMContentLoaded", () => {
  /**
   * ====================== Show/Hide Tables by Category ======================
   */
  const initCategorySwitcher = () => {
    const categorySelect = document.getElementById("categorySelect");
    if (!categorySelect) return;

    const tables = {
      refrigerator: document.getElementById("refrigeratorTable"),
      tv: document.getElementById("tvTable"),
    };

    const showTable = (key) => {
      Object.entries(tables).forEach(([name, table]) => {
        if (table) table.style.display = name === key ? "table" : "none";
      });
    };

    // Initialize state on load
    showTable(categorySelect.value);

    // Update on change
    categorySelect.addEventListener("change", (e) => {
      showTable(e.target.value);
    });
  };

  // ====================== Init All ======================
  initCategorySwitcher();
});
