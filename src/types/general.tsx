export interface MenuItem {
  id: number;
  title: string;
  url: string;
  parent: string;
  order: number;
  // image: boolean;
  caption: string;
  caption_sub_nav: string;
  target: string;
  image: string;
}

export interface MenuData {
  id: number;
  name: string;
  slug: string;
  location: {
    "primary-menu": number;
    "header-right-menu": number;
    "footer-column-1": number;
    "footer-column-2": number;
    "footer-column-3": number;
    "footer-column-4": number;
    "social-menu": number;
    "footer-bottom-menu": number;
  };
  items: MenuItem[];
}

// export type BannerImage = {
//   url: string;
// };

// export type BannerData = {
//   ID: number;
//   banner_image_desktop: BannerImage;
//   banner_image_mobile: BannerImage;
//   banner_title: string;
//   post_title?: string;
//   featured_image?: string;
//   post_date?: string;
//   permalink?: string;
// };

// export type CSRPost = {
//   ID?: number;
//   listing_image: string;
//   post_title: string;
//   short_description: string;
//   permalink: string;
// };

// export type BannerSection = {
//   banner_desktop_image: BannerImage;
//   banner_mobile_image: BannerImage;
//   image_text: string;
//   permalink?: string;
// };

// export type PageSection = { csr_posts: CSRPost[] } | BannerSection;

// export type PageData = {
//   acf?: {
//     banner_data?: BannerData[];
//     page_sections?: any[]; // We'll type this more specifically below
//   };
//   post_content?: string;
//   featured_slider?: BannerData[];
//   filters?: {
//     categories:string[],
//     years:string[],
//   }
// };

export interface HomePageACF {
  banner_data: BannerData[]; // array, often objects, can be empty
  title: string; // e.g. "Discover our series"
  subtitle: string; // string, can be empty
  slider_data: SliderData[]; // array, might be empty
  section_title: string; // e.g. "About Hisense"
  about_data: AboutCard[]; // array, might be empty
  section_button: SectionButton[]; // array, might be empty
}

export interface HomePageData {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  acf: HomePageACF;
}

// Supporting types
export interface BannerImage {
  ID: number;
  id?: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: {
    [key: string]: string | number;
  };
}

export interface ButtonLink {
  button_text: string;
  link?: string;
  page_link?: string;
  target: string;
}

export interface BannerData {
  ID?: number;
  featured_image?: string;
  post_title?: string;
  post_date?: string;
  permalink?:string;
  acf_fc_layout?: "banner_data";
  banner_image_desktop?: BannerImage;
  banner_image_mobile?: BannerImage;
  banner_title?: string;
  banner_subtitle?: string;
  button?: ButtonLink;
  content?: string;
  logo?: string;
}

export interface Product {
  isNew?: boolean;
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  product_images: {
    main_image: string;
    mobile_image: string;
  };
  // acf?: any; // unclear, sometimes object, sometimes boolean/null
}

export interface CategoryData {
  category_name: {
    term_id: string;
    name: string;
    slug: string;
  };
  subcategory_data: {
    subcategories: {
      term_id: string;
      name: string;
    }[];
    products: Product;
  }[];
  products?: Product;
}

export interface SliderData {
  acf_fc_layout?: "slider";
  category_data?: CategoryData[];
}

export interface AboutCard {
  acf_fc_layout?: "cards";
  about_title?: string;
  about_image?: BannerImage;
  about_image_mobile?: BannerImage;
  button_text?: string;
  button_link?: string;
  target?: string;
}

export interface SectionButton {
  acf_fc_layout?: "button_data";
  button_text?: string;
  button_link?: string;
  target?: string;
}

export interface CSRPageACF {
  banner_data?: {
    acf_fc_layout: "banner_data";
    banner_image_desktop: BannerImage;
    banner_image_mobile: BannerImage;
    banner_title: string;
    banner_subtitle: string;
    button: {
      button_text: string;
      link: string;
      page_link: null | string;
      target: string;
    };
  }[];
  page_sections?: (
    | {
        acf_fc_layout: "csr_section";
        csr_posts: {
          ID: number;
          post_author: string;
          post_date: string;
          post_date_gmt: string;
          post_content: string;
          post_title: string;
          post_excerpt: string;
          post_status: string;
          comment_status: string;
          ping_status: string;
          post_password: string;
          post_name: string;
          to_ping: string;
          pinged: string;
          post_modified: string;
          post_modified_gmt: string;
          post_content_filtered: string;
          post_parent: number;
          guid: string;
          menu_order: number;
          post_type: string;
          post_mime_type: string;
          comment_count: string;
          filter: string;
          listing_image: string;
          short_description: string;
          permalink: string;
        }[];
      }
    | {
        acf_fc_layout: "banner_section";
        banner_desktop_image: BannerImage;
        banner_mobile_image: BannerImage;
        image_text: string;
      }
  )[];
  // csr?: any[];
}

// Helper types extracted from CSRPageACF
export type CSRPost = {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  listing_image: string;
  short_description: string;
  permalink: string;
};

export type BannerSection = {
  acf_fc_layout?: "banner_section";
  banner_desktop_image: BannerImage;
  banner_mobile_image: BannerImage;
  image_text: string;
};

// Full page data structure with ACF wrapper
export interface CSRPageData {
  acf: CSRPageACF;
  post_content?: string;
}

// Define the ACF structure for CSR details page
export interface CSRDetailPageACF {
  featured_image: string;
  description: string; // May contain HTML
}

// Full page data structure for CSR detail page
export interface CSRDetailPageData {
  ID: number;
  category: string;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  featured_image: string;
  description: string; // May contain HTML
  related_posts:RelatedPosts[]
}

export interface RelatedPosts {
  id:number;
  title:string;
  featured_image:string;
  permalink:string;
}

export interface HistoryPageData {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  acf: {
    banner_data: boolean | null;
    history: Array<{
      acf_fc_layout: "history";
      year_range: string;
      images: Array<{
        ID: number;
        id: number;
        title: string;
        filename: string;
        filesize: number;
        url: string;
        link: string;
        alt: string;
        author: string;
        description: string;
        caption: string;
        name: string;
        status: string;
        uploaded_to: number;
        date: string;
        modified: string;
        menu_order: number;
        mime_type: string;
        type: string;
        subtype: string;
        icon: string;
        width: number;
        height: number;
        sizes: {
          thumbnail: string;
          "thumbnail-width": number;
          "thumbnail-height": number;
          medium: string;
          "medium-width": number;
          "medium-height": number;
          medium_large: string;
          "medium_large-width": number;
          "medium_large-height": number;
          large: string;
          "large-width": number;
          "large-height": number;
          "1536x1536": string;
          "1536x1536-width": number;
          "1536x1536-height": number;
          "2048x2048": string;
          "2048x2048-width": number;
          "2048x2048-height": number;
          woocommerce_thumbnail: string;
          "woocommerce_thumbnail-width": number;
          "woocommerce_thumbnail-height": number;
          woocommerce_single: string;
          "woocommerce_single-width": number;
          "woocommerce_single-height": number;
          woocommerce_gallery_thumbnail: string;
          "woocommerce_gallery_thumbnail-width": number;
          "woocommerce_gallery_thumbnail-height": number;
        };
      }>;
      title: string;
      subtitle: string;
      description: string;
    }>;
    title: string;
    subtitle: string;
    slider_data: boolean | null;
    section_title: string;
    about_data: boolean | null;
    section_button: boolean | null;
  };
}

export interface NewsRoomPageData {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  acf: {
    banner_data: boolean;
  };
  featured_slider: BannerData[];
  latest_news: BannerData[];
  pagination: {
    current_page: number;
    total_pages: number;
    posts_per_page: number;
    total_posts: number;
  };
  filters: {
    categories: string[];
    years: string[];
    selected_category: string;
    selected_year: string;
  };
}

export interface LegalDisclaimerPageData   {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  acf: {
    banner_data: {
      acf_fc_layout: "banner_data";
      banner_image_desktop: BannerImage;
      banner_image_mobile: BannerImage;
      banner_title: string;
      banner_subtitle: string;
      button: {
        button_text: string;
        link: string;
        page_link: string | null;
        target: string;
      };
    }[];
  };
}

export interface PrivacyPolicyPageData  {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  acf: {
    banner_data: {
      acf_fc_layout: "banner_data";
      banner_image_desktop: BannerImage;
      banner_image_mobile: BannerImage;
      banner_title: string;
      banner_subtitle: string;
      button: {
        button_text: string;
        link: string;
        page_link: string | null;
        target: string;
      };
    }[];
  };
}

export interface TermsOfUsePageData {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  acf: {
    banner_data: false;
    page_data: {
      acf_fc_layout: "tabs";
      tab_data: {
        acf_fc_layout: "tab";
        tab_title: string;
        sidemenu:SidebarData[];
      }[];
    }[];
  };
}

export interface SidebarData {
  acf_fc_layout: "sidebar";
  sidebar_title: string;
  description: string;
}

export interface SitemapData {
  urls: {
    loc: string;
    lastmod: string;
    type: string;
    changefreq: string;
    priority: string;
  }[];
  product_categories: {
    name: string;
    slug: string;
    link: string;
    lastmod: string;
    changefreq: string;
    priority: string;
    subcategories: {
      name: string;
      slug: string;
      link: string;
      lastmod: string;
      changefreq: string;
      priority: string;
    }[];
  }[];
}

export interface PartnershipPageData {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  acf: {
    banner_data: boolean;
    page_data: (
      | {
          acf_fc_layout: "banner_data";
          banner_desktop_image: PartnershipImage;
          banner_mobile_image: PartnershipImage;
          title: string;
          partnership_post: PartnershipPost;
        }
      | {
          acf_fc_layout: "title";
          section_title: string;
        }
      | {
          acf_fc_layout: "partnership_slider";
          slider_data: PartnershipPost[];
        }
    )[];
  };
}

export interface PartnershipImage {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: {
    [size: string]: string | number;
  };
}

export interface PartnershipData {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  acf: {
    banner_data: false;
    page_data: [
      {
          acf_fc_layout: string;
          banner_desktop_image: PartnershipImage;
          banner_mobile_image: PartnershipImage;
          title: string;
          partnership_post: {
            ID: number;
            post_author: string;
            post_date: string;
            post_date_gmt: string;
            post_content: string;
            post_title: string;
            post_excerpt: string;
            post_status: string;
            comment_status: string;
            ping_status: string;
            post_password: string;
            post_name: string;
            to_ping: string;
            pinged: string;
            post_modified: string;
            post_modified_gmt: string;
            post_content_filtered: string;
            post_parent: number;
            guid: string;
            menu_order: number;
            post_type: string;
            post_mime_type: string;
            comment_count: string;
            filter: string;
          };
        }
      ,{
          acf_fc_layout: string;
          section_title: string;
        }
      ,{
          acf_fc_layout: string;
          slider_data: PartnershipPost[];
        }
      ];
  };
}

export interface PartnershipPost {
    ID: number;
    post_author: string;
    post_date: string;
    post_date_gmt: string;
    post_content: string;
    post_title: string;
    post_excerpt: string;
    post_status: string;
    comment_status: string;
    ping_status: string;
    post_password: string;
    post_name: string;
    to_ping: string;
    pinged: string;
    post_modified: string;
    post_modified_gmt: string;
    post_content_filtered: string;
    post_parent: number;
    guid: string;
    menu_order: number;
    post_type: string;
    post_mime_type: string;
    comment_count: string;
    filter: string;
  }