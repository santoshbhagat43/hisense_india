// Mobile products data extracted from HTML structure
export const itemsMobileData = [
  {
    title: "MOBILE",
    products: [
      {
        isNew: true,
        name: "Hisense Infinity H60 5G",
        moreHref: "#",
        viewAllHref: "#",
        moreLabel: "More",
        viewAllLabel: "View all Smartphone",
      },
    ],
    banners: [
      {
        desktop: "/assets/images/Banners/discover_desktop.webp",
        mobile: "/assets/images/Banners/discover_mobile.webp",
        alt: "Hisense Infinity H60 5G",
      },
    ],
  },
];

// Air Conditioner data (from your existing structure)
export const itemsAirConditionerData = [
  {
    title: "Air Conditioner",
    products: [
      {
        isNew: true,
        name: "Intellipro",
        moreHref: "#",
        viewAllHref: "#",
        moreLabel: "More",
        viewAllLabel: "View all",
      },
    ],
    banners: [
      {
        desktop: "/assets/images/Banners/discover_desktop.webp",
        mobile: "/assets/images/Banners/discover_mobile.webp",
        alt: "ULED MINILED UX",
      },
    ],
  },
  {
    title: "Refrigerator",
    products: [
      {
        isNew: true,
        name: "FrostFree 500L",
        moreHref: "#",
        viewAllHref: "#",
        moreLabel: "More",
        viewAllLabel: "View all",
      },
    ],
    banners: [
      {
        desktop: "/assets/images/Banners/fridge_desktop.webp",
        mobile: "/assets/images/Banners/fridge_mobile.webp",
        alt: "FrostFree 500L",
      },
    ],
  },
];

// Laser TV data (from HTML structure)
export const itemsLaserTVData = [
  {
    title: "Laser TV",
    products: [
      {
        isNew: true,
        name: "88L5V Sonic Screen Laser TV",
        moreHref: "#",
        viewAllHref: "#",
        moreLabel: "More",
        viewAllLabel: "View all Laser TV",
      },
    ],
    banners: [
      {
        desktop: "/assets/images/Banners/discover_desktop.webp",
        mobile: "/assets/images/Banners/discover_mobile.webp",
        alt: "88L5V Sonic Screen Laser TV",
      },
    ],
  },
  {
    title: "Laser Cinema",
    products: [
      {
        isNew: true,
        name: "120L5 Ultra Short Throw Laser Cinema",
        moreHref: "#",
        viewAllHref: "#",
        moreLabel: "More",
        viewAllLabel: "View all Laser Cinema",
      },
    ],
    banners: [
      {
        desktop: "/assets/images/Banners/discover_desktop.webp",
        mobile: "/assets/images/Banners/discover_mobile.webp",
        alt: "120L5 Ultra Short Throw Laser Cinema",
      },
    ],
  },
];

// All products data combined
export const allProductsData = [
  ...itemsAirConditionerData,
  ...itemsLaserTVData,
  ...itemsMobileData,
];

// Export individual data objects
export default {
  mobile: itemsMobileData,
  airConditioner: itemsAirConditionerData,
  laserTV: itemsLaserTVData,
  all: allProductsData,
};
