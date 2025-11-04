import React from 'react';
import TVSlider, { SliderItem } from './TVSlider';

// Example usage of TVSlider with custom data
const TVSliderExample: React.FC = () => {
  // Custom slider data
  const customSliderData: SliderItem[] = [
    {
      title: "Smart TVs",
      products: [
        {
          isNew: true,
          name: "ULED 4K Smart TV",
          moreHref: "/products/uled-4k",
          viewAllHref: "/products/tvs",
          moreLabel: "Learn More",
          viewAllLabel: "View All TVs",
        },
        {
          isNew: false,
          name: "QLED 8K Smart TV",
          moreHref: "/products/qled-8k",
          viewAllHref: "/products/tvs",
          moreLabel: "Learn More",
          viewAllLabel: "View All TVs",
        },
      ],
      banners: [
        {
          desktop: "/assets/images/Banners/tv_desktop.webp",
          mobile: "/assets/images/Banners/tv_mobile.webp",
          alt: "Smart TV Collection",
        },
      ],
    },
    {
      title: "Home Appliances",
      products: [
        {
          isNew: true,
          name: "Smart Refrigerator",
          moreHref: "/products/smart-fridge",
          viewAllHref: "/products/appliances",
          moreLabel: "Learn More",
          viewAllLabel: "View All Appliances",
        },
      ],
      banners: [
        {
          desktop: "/assets/images/Banners/appliance_desktop.webp",
          mobile: "/assets/images/Banners/appliance_mobile.webp",
          alt: "Home Appliances",
        },
      ],
    },
    {
      title: "Air Conditioners",
      products: [
        {
          isNew: true,
          name: "Inverter AC",
          moreHref: "/products/inverter-ac",
          viewAllHref: "/products/air-conditioners",
          moreLabel: "Learn More",
          viewAllLabel: "View All ACs",
        },
      ],
      banners: [
        {
          desktop: "/assets/images/Banners/ac_desktop.webp",
          mobile: "/assets/images/Banners/ac_mobile.webp",
          alt: "Air Conditioners",
        },
      ],
    },
  ];

  const handleSlideChange = (index: number) => {
    console.log(`Slide changed to index: ${index}`);
  };

  return (
    <div className="tv-slider-examples">
      <h2>TV Slider Examples</h2>
      
      {/* Example 1: Default usage (uses default data) */}
      <div className="example-section">
        <h3>Default Slider (with default data)</h3>
        {/* <TVSlider /> */}
      </div>

      {/* Example 2: Custom data with auto-slide disabled */}
      <div className="example-section">
        <h3>Custom Data - No Auto Slide</h3>
        {/* <TVSlider
          items={customSliderData}
          autoSlide={false}
          showNavigation={true}
          onSlideChange={handleSlideChange}
        /> */}
      </div>

      {/* Example 3: Custom data with faster auto-slide */}
      <div className="example-section">
        <h3>Custom Data - Fast Auto Slide (2 seconds)</h3>
        <TVSlider
          items={customSliderData}
          autoSlide={true}
          slideInterval={2000}
          showNavigation={true}
          className="fast-slider"
        />
      </div>

      {/* Example 4: Single item (no navigation) */}
      <div className="example-section">
        <h3>Single Item Slider</h3>
        {/* <TVSlider
          items={[customSliderData[0]]}
          autoSlide={false}
          showNavigation={false}
        /> */}
      </div>

      {/* Example 5: Custom styling */}
      <div className="example-section">
        <h3>Custom Styled Slider</h3>
        {/* <TVSlider
          items={customSliderData}
          autoSlide={true}
          slideInterval={4000}
          showNavigation={true}
          className="custom-styled-slider"
          onSlideChange={(index) => {
            console.log(`Custom slider changed to: ${customSliderData[index]?.title}`);
          }}
        /> */}
      </div>
    </div>
  );
};

export default TVSliderExample;
