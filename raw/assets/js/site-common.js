// ====================== Campaigns & Products Tabs (robust) ======================
document.addEventListener("DOMContentLoaded", () => {
  // --- elements ---
  const tabs = Array.from(document.querySelectorAll(".tabs .list-group-item"));
  const campaignsList = document.getElementById("campaigns-list");
  const productsList = document.getElementById("products-list");
  const lists = { campaigns: campaignsList, products: productsList };

  // --- helpers ---
  const getAllContentItems = () => Array.from(document.querySelectorAll(".content-item"));

  const hideAllContent = () => {
    getAllContentItems().forEach((c) => c.classList.add("d-none"));
  };

  const showContent = (targetId) => {
    if (!targetId) {
      console.warn("showContent: missing targetId");
      return;
    }
    const target = document.getElementById(targetId);
    if (!target) {
      console.warn(`showContent: no element found with id="${targetId}"`);
      return;
    }
    hideAllContent();
    target.classList.remove("d-none");
  };

  const activateSidebarItem = (sidebar, item) => {
    if (!sidebar || !item) return;
    const items = Array.from(sidebar.querySelectorAll(".list-group-item"));
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    const target = item.dataset.target;
    if (target) {
      showContent(target);
    } else {
      console.warn("activateSidebarItem: clicked item missing data-target", item);
    }
  };

  // --- init sidebar handler (reusable) ---
  const initSidebarHandler = (sidebar) => {
    if (!sidebar) return console.warn("initSidebarHandler: sidebar not found");
    const items = Array.from(sidebar.querySelectorAll(".list-group-item"));
    if (!items.length) return console.warn("initSidebarHandler: no .list-group-item inside sidebar", sidebar);

    items.forEach((item) => {
      item.addEventListener("click", () => activateSidebarItem(sidebar, item));
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activateSidebarItem(sidebar, item);
        }
      });
    });

    // ensure there's an active item in this sidebar on init
    const active = sidebar.querySelector(".list-group-item.active") || items[0];
    if (active) activateSidebarItem(sidebar, active);
  };

  // --- init tabs handler ---
  const initTabsHandler = () => {
    if (!tabs.length) return console.warn("initTabsHandler: no .tabs .list-group-item found");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // reset tabs
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // show corresponding list panel
        const key = tab.dataset.tab;
        if (!key) return console.warn("tab element missing data-tab", tab);

        const activeList = lists[key];
        if (!activeList) return console.warn(`No list found for tab "${key}" (expected id like "${key}-list")`);

        // show chosen panel, hide others
        Object.values(lists).forEach((l) => l?.classList.add("d-none"));
        activeList.classList.remove("d-none");

        // show the default content inside the panel:
        // preference order: tab.dataset.default -> first .list-group-item in the panel -> do nothing
        const defaultTarget =
          tab.dataset.default ||
          activeList.querySelector(".list-group-item")?.dataset.target;
        if (defaultTarget) showContent(defaultTarget);
      });

      // keyboard support for tabs
      tab.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          tab.click();
        }
      });
    });

    // initialize: prefer an already-active tab, otherwise click the first tab
    const initialTab = tabs.find((t) => t.classList.contains("active")) || tabs[0];
    if (initialTab) initialTab.click();
  };

  // --- boot ---
  initSidebarHandler(campaignsList);
  initSidebarHandler(productsList);
  initTabsHandler();
});
