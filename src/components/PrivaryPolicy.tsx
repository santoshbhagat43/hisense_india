import { PrivacyPolicyPageData } from "@/types/general";

const PrivacyPolicy = ({ pageData }: { pageData: PrivacyPolicyPageData }) => {
  return (
      <div className="main-container">
        <div className="main-banner-container legal">
          <h1>{pageData?.post_title}</h1>
          <img 
            className="desktop-only" 
            src={pageData?.acf?.banner_data?.[0]?.banner_image_desktop?.url || ""}
            alt="Hisense Air Conditioner 1" 
          />
          <img 
            className="mobile-only" 
            src={pageData?.acf?.banner_data?.[0]?.banner_image_mobile?.url || ""}
            alt="Hisense Air Conditioner 1" 
          />
        </div>
        <div className="generic-container">
          <div  dangerouslySetInnerHTML={{ __html: pageData?.post_content || "" }} />
        </div>
      </div>
  );
};

export default PrivacyPolicy;