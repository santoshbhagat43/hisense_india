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