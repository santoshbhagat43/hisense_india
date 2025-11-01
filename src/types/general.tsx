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

export type BannerImage = {
  url: string;
};

export type BannerData = {
  ID: number;
  banner_image_desktop: BannerImage;
  banner_image_mobile: BannerImage;
  banner_title: string;
  post_title?: string;
  featured_image?: string;
  post_date?: string;
  permalink?: string;
};

export type CSRPost = {
  ID?: number;
  listing_image: string;
  post_title: string;
  short_description: string;
  permalink: string;
};

export type BannerSection = {
  banner_desktop_image: BannerImage;
  banner_mobile_image: BannerImage;
  image_text: string;
  permalink?: string;
};

export type PageSection = { csr_posts: CSRPost[] } | BannerSection;

export type PageData = {
  acf?: {
    banner_data?: BannerData[];
    page_sections?: any[]; // We'll type this more specifically below
  };
  post_content?: string;
  featured_slider?: BannerData[];
  filters?: {
    categories:string[],
    years:string[],
  }
};
